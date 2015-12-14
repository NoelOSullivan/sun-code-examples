var facebookAppId = '1428351830791950';//'1429534027340397';// 

var whichQuiz = window.quiz.name;
var data = window.quiz.questions;
var questions = data.questions;
var scoreBoundaries = data.results;
var budgetApp = angular.module('sunnation',["ngFacebook","preload"]);

window.scrollTo(0,1);

budgetApp.config(function ($facebookProvider, TealiumProvider) {
    TealiumProvider.isQuiz();
    TealiumProvider.gameName("How " + whichQuiz + " are you?");

    // Facebook app ID
    $facebookProvider.setAppId(facebookAppId).setVersion('v2.2')
      .setPermissions("email");
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    var scaleWindow = function () {
        var $window = $(window),
            width = $window.width(),
            height = $window.height(),
            currentWidth = 960,
            currentHeight = 1280,
            scale,
            widthScale = width / currentWidth,
            heightScale = height / currentHeight;

        var newWidth = currentWidth * heightScale;
        var translate = 0;
        translate = (width - newWidth)/2;
        $('#game-container').css('transform', 'translateX('+translate+'px) scale(' + heightScale + ')');
    };

    $(window).resize(function(evt) {
        scaleWindow();
    });
    scaleWindow();
  })
.controller('BaseController', ['$scope', 'preloader', 'Tealium', function($scope, preloader, Tealium) {
    Tealium.gameIntroScreen();
        window.$mainScope = $scope;
        $scope.endTemplate = "data/"+window.quiz.name+"/views/result-anim.html";
        $scope.Modernizr = Modernizr;
        $scope.uiTemplate = "views/start.html";
        $scope.playNextCaption = window.quiz.playNextCaption;
        $scope.playNext = function() {
            window.location = window.quiz.playNextUrl;
        }
        $scope.startgame = function() {
            Tealium.gameClickOnPlay();

            $scope.uiTemplate = "views/game.html";
        };  
        $scope.userScores = [];
        var imageList = window.quiz.preloadIntro.concat([
                "ui/playNow.png",
                "ui/playNowHover.png",
                "ui/answerButtonTick.png",
                "ui/footerBG.png",
                "ui/footerIcons.png",
                "ui/endBackground.jpg",
                "ui/facebook.png",
                "ui/facebookHover.png",
                "ui/shareBack.png",
                "ui/textureOverlay.jpg",
                "ui/tryAgain.png",
                "ui/tryAgainHover.png",
                "ui/twitter.png",
                "ui/twitterHover.png"
            ]).concat(data.questions.map((q)=>("data/"+whichQuiz+"/assets/"+q.imageUrl)))
            .concat(window.quiz.preloadRest);
                //.concat(data.results.map((r)=>("data/"+whichQuiz+"/assets/"+r.imageUrl)));
            preloader.preloadImages(imageList);
            function jumpToResult(score) {
                    $mainScope.uiTemplate = "views/results.html";
                    $mainScope.totalScore = score;
                    $mainScope.jumped = true;
            }
           //jumpToResult(5);
    }])

    .controller('GameController', ['$scope','$timeout', '$rootScope', 'Tealium', function($scope, $timeout, $rootScope, Tealium) {
        $rootScope.inGame = true;
        $rootScope.endGame = false;
        $scope.quizName = whichQuiz;
        $scope.showHeadlines = data.showHeadlines;
        $scope.anim = {
            incoming: false,
            outgoing: false
        };
        $timeout(function(){
            $scope.anim.incoming = true;
        },1);
        var getQuestion = function (questionId) {
                if (questionId >= questions.length) {
                    return false;
                }
                if (questionId < 0) {
                    return -1;
                }
                return questions[questionId];
            },
            nextQuestion = function () {
                questionId = questionId + 1;
                load();
            },
            prevQuestion = function () {
                questionId = questionId - 1;
                load();
            },
            load = function () {
                $scope.question = getQuestion(questionId);
                updateCurrent(questionId);
                $scope.currentScore = $mainScope.userScores[questionId];
                if ($scope.question === -1) {
                    $mainScope.uiTemplate = "views/start.html";
                    return;
                }
                if ($scope.question === false) {
                    $mainScope.uiTemplate = "views/results.html";
                    return;
                }
            },
            storeScore = function () {
                if ($scope.question.answerVal === undefined) {
                    return;
                }
                $mainScope.userScores[questionId] = $scope.question.answerVal;
            },
            updateCurrent = function (currentQuestionId) {
                angular.forEach(questions, function (question) {
                    question.current = question.id === currentQuestionId ? 'active' : 'passive';
                });
            },
            questionId = 0;
        updateCurrent(questionId);
        $scope.questions = questions;
        $scope.nextQuestion = function () {
            nextQuestion();
        };
        $scope.prevQuestion = function () {
            storeScore();
            prevQuestion();
        };

        $scope.chooseAnswer = function(a, event) {
            event.preventDefault();
            event.target.blur();
            $scope.question.answerVal = a.value;
            $scope.checkboxChanged();
        };

        var timer = null;

        $scope.checkboxChanged = function () {
            storeScore();
            Tealium.quizSelectAnswer(questionId+1);

            $scope.currentScore = $mainScope.userScores[questionId];

            if (timer !== null) {
                return;
            }
            
            $scope.anim.outgoing = true;
            timer = $timeout(function(){
                timer = null;
                $scope.anim.outgoing = false;
                $scope.anim.incoming = false;
                nextQuestion();
                $timeout(function(){
                    $scope.anim.incoming = true;
                });
            }, 1000);
        };
        $scope.jumpToQuestion = function (newQuestionId) {
            questionId = newQuestionId;
            load();
        };
        load();
    }])
    .controller('ResultsController', ['$scope', '$rootScope', 'Tealium', '$timeout',
        function($scope, $rootScope, Tealium, $timeout) {
        $timeout(function(){
            $rootScope.resultClass = $scope.range.resultClass;
        },1);
        $rootScope.endGame = true;
        Tealium.quizCompleted();

        var calculateScore = function () {
            if ($scope.jumped) {
                return $scope.totalScore;
            }
                var totalScore = 0;
                angular.forEach($mainScope.userScores, function (score) {
                    if (score !== undefined) {
                        totalScore = totalScore + score;
                    }
                });
                $rootScope.totalScore = totalScore;
                return totalScore;
            },
            getRange = function (score) {
                var currentBoundary;
                scoreBoundaries.some(function (boundary) {
                    if (boundary.score >= score) {
                        currentBoundary = boundary;
                        return true;
                    }
                });
                if (!currentBoundary) {
                    currentBoundary = scoreBoundaries[scoreBoundaries.length - 1];
                }
                return currentBoundary;
            },
            doFacebookShare = function () {
                Tealium.gameShareStart('facebook');
                      FB.ui({
                        method: 'share_open_graph',
                        action_type: 'sn-quizzes:take',
                        action_properties: JSON.stringify({
                          result_percent: Math.floor($rootScope.totalScore * 10),
                          result_text: $scope.range.text,
                          quiz: window.quiz.shareUrl
                        }) }
                      , function(response){
                        Tealium.gameShareComplete('facebook');
                      }, function(err) {
                        console.error(err);
                      });
                /*
                FB.ui({
                    method: 'share',
                    href: $scope.range.socialUrl
                }, function(response){
                    console.log(response);
                });
                    */
            },
            tweetText,
            twitterLink = 'https://twitter.com/intent/tweet?text=';
            $scope.twitterClick = function(){
                Tealium.gameShareStart('twitter');
            }
        $scope.range = getRange(calculateScore());
        tweetText = encodeURIComponent(window.quiz.tweetTemplate($scope.totalScore*10));
        twitterLink = twitterLink + tweetText;
        twitterLink = twitterLink + '&hashtags=SunNation&via=SunNation&url=' + window.quiz.shareUrl;//$scope.range.socialUrl;
        $scope.twitterLink = twitterLink;

        $scope.resultTemplate = function() {
            return typeof window.quiz.resultTemplate === 'undefined'
                ? `You got ${$scope.totalScore*10}% - ${$scope.range.text}`
                : window.quiz.resultTemplate($scope.totalScore, $scope.range.text);
        };

        $scope.playAgain = function () {
            Tealium.gameClickOnBeginGame();
            $rootScope.inGame = false;
            $rootScope.endGame = false;
            $mainScope.userScores = [];
            angular.forEach(questions, function (question) {
                question.answerVal = null;
            });
            $mainScope.uiTemplate = "views/start.html";
        };
        $scope.facebookShare = function () {
                    doFacebookShare();
            /*
            FB.getLoginStatus(  
                function (response) {
                    if (response.status !== 'connected') {
                        FB.login(function(response) {
                            if (response.authResponse) {
                                doFacebookShare();
                            } else {
                                console.log('User cancelled login or did not fully authorize.');
                            }
                        });
                        return;
                    }
                    doFacebookShare();
                }
            );*/
        };
    }]).filter('nl2br', function($sce){
    return function(msg,is_xhtml) { 
        var is_xhtml = is_xhtml || true;
        var breakTag = (is_xhtml) ? '<br />' : '<br>';
        var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
        return $sce.trustAsHtml(msg);
    }
});

import '../app/TealiumProvider';