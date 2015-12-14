function BaseController($scope, $facebook, $state, $rootScope, preloader, config, game, Tealium, Scale) {

    $rootScope.uiTemplate = "views/preload.html";
    $rootScope.subTemplate = "views/home-logo.html";
    $rootScope.preloaded = false;
    $rootScope.Modernizr = window.Modernizr;
    //$rootScope.Scale = Scale;

    $facebook.api("/me").then(
      function(response) {
        $scope.fbConnected = true;
      },
      function(err) {
        $scope.fbConnected = false;
      }
    );

    $scope.preloadDone = function() {
      $rootScope.uiTemplate = "views/home.html";
      $rootScope.preloaded = true;
    }

    $scope.gotoscores = function(){
      Tealium.gameShowLeaderboard();
      scores({
        winning:$scope.winning,
        score:$scope.score
      })
    };

    $scope.startgame = function() {
      Tealium.gameClickOnBeginGame();
      $rootScope.uiTemplate = "views/game.html";
    };

    var gameover = function(data){ 
      $rootScope.winning = data.winning;
      $rootScope.score = data.score;
      $rootScope.totalTime = data.totalTime;
      $rootScope.uiTemplate = "views/endgame.html";
    };

    var scores = function(data){
      $rootScope.winning = data.winning;
      $rootScope.score = data.score;
      $rootScope.subTemplate = "views/home-scores.html";
      $rootScope.uiTemplate = "views/home.html";
    };

    $scope.progress = 0;
    $scope.gameprog = 0;
    $scope.imageprog = 0;
    function checkprog() {
      $scope.progress = ($scope.gameprog + $scope.imageprog) / 2;
      if ($scope.progress >= 1 && !$scope.preloaded) {
        $scope.preloadDone();
      }
    }

    $scope.shareStory = function() {
      Tealium.gameShareStart("facebook");
      game.exitFullscreen();
      config.facebookShare($scope, function(err,response){
        $scope.$apply(()=>{
          if (!err) {
            Tealium.gameShareComplete("facebook");
          }
          $scope.gotoscores();
        });
      });
    }

    preloader.preloadImages(config.preload).then( ()=>{
        $scope.imageprog = 1;
        checkprog();
      }, (error)=>{
        console.error(error);
      }, (ev)=>{
        $scope.imageprog = ev.percent / 100;
        checkprog();
      });

    // Register hooks for the game to use.
    game.app = {
      win: function(score, totalTime) {
        $scope.$apply(()=>{ gameover({ winning: true, score: score, totalTime:totalTime }); });
      },
      lose: function(score, totalTime) {
        $scope.$apply(()=>{ gameover({ winning: false, score: score, totalTime:totalTime }); });
      },
      /*
      orientation: function(val) {
        $scope.$apply(()=>{
          $rootScope.orientation = val;
        });
      },*/
    // Receive status from game
      progress: function(val) {
        val = val / 100;
        $scope.$apply(function(){
          $scope.gameprog = val;
          checkprog();
        });
      },
      scale:Scale
    };

}

export default BaseController;