var app = angular.module("sunnation");

app.provider("Tealium", function() {

  var lastPageName = "";
  var totalPlays = 0;
  var gameOrQuiz = "game";
  var gameName = "undefined";

  var pageSection = "games";
  var pageType = "game";

  this.isQuiz = function() {
    gameOrQuiz = "quiz";
    pageSection = "quizzes";
    pageType = "quiz";
    totalPlays = 1;
  }

  this.gameName = function(name) {
    gameName = name;
  }

  function prefix(value) {
    return gameOrQuiz + ":" + value;
  }

    var api = {

      // GAME Page Tracking

      // GAME Intro Screen
      gameIntroScreen: function() {
        lastPageName = prefix("intro:"+gameName);
        utag.view({
          page_name:lastPageName,
          page_section:pageSection,
          page_type:pageType,
          page_site_region:"uk",
          article_parent_name:prefix(gameName),
          page_restrictions:"public"
        });
      },

      // GAME Instructions Screen
      gameInstructionsScreen: function() {
        lastPageName = prefix("instructions:"+gameName);
        utag.view({
          page_name:lastPageName,
          page_section:pageSection,
          page_type:pageType,
          page_site_region:"uk",
          article_parent_name:prefix(gameName),
          page_restrictions:"public"
        });
      },

      // GAME Game Over Screen
      gameScoreScreen: function() {
        lastPageName = prefix("score:"+gameName);
        utag.view({
          page_name:lastPageName,
          page_section:pageSection,
          page_type:pageType,
          page_site_region:"uk",
          article_parent_name:prefix(gameName),
          page_restrictions:"public"
        });
      },

      // GAME Leaderboard Screen
      gameLeaderboardScreen: function() {
        lastPageName = prefix("leaderboard:"+gameName);
        utag.view({
          page_name:lastPageName,
          page_section:pageSection,
          page_type:pageType,
          page_site_region:"uk",
          article_parent_name:prefix(gameName),
          page_restrictions:"public"
        });
      },

      // GAME User Interactions

      // GAME / QUIZ - Click on Play
      gameClickOnPlay: function() {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "play "+gameOrQuiz,
          event_navigation_browsing_method: "click",
          article_parent_name: gameOrQuiz+":"+gameName,
          page_name: lastPageName
        });
      },

      gameClickOnExit: function() {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "exit "+gameOrQuiz,
          event_navigation_browsing_method: "click",
          article_parent_name:prefix(gameName),
          page_name: lastPageName
        });
      },

      // GAME / QUIZ - Start or restart game
      gameClickOnBeginGame: function() {
        var navName = "play " + gameOrQuiz;
        if (++totalPlays >= 2) {
          navName = "play "+gameOrQuiz+" again:" + (totalPlays);
        }
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: navName,
          event_navigation_browsing_method: "click",
          article_parent_name: gameOrQuiz+":"+gameName,
          page_name: lastPageName
        });
      },

      gameStarted: function(){
        utag.link({
          event_engagement_action: "engagement",
          event_engagement_name: gameOrQuiz+" started",
          event_engagement_browsing_method: gameOrQuiz+" play",
          article_parent_name: gameOrQuiz+":"+gameName
        });
      },

      gameEnded: function(winning, totalTime) {
        utag.link({
          event_engagement_action: "engagement",
          event_engagement_name: "game over:" + winning?"win":"lose",
          playing_time: totalTime,
          event_engagement_browsing_method: "game play",
          article_parent_name: gameOrQuiz+":"+gameName
        });
      },

      gameShowLeaderboard: function() {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "show leaderboard",
          event_navigation_browsing_method: "click",
          article_parent_name: prefix(gameName),
          page_name: lastPageName
        });
      },

      gameShareStart: function(platform) {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "share score:"+gameName,
          event_navigation_browsing_method: "click",
          event_social_action: "share start",
          social_category: "share",
          social_platform: platform/*,
          article_parent_name: gameOrQuiz+":"+gameName,
          page_name: lastPageName*/
        });
      },

      gameShareComplete: function(platform) {
        utag.link({
          event_social_action: "share complete",
          social_category: "share",
          social_platform: platform/*,
          article_parent_name: gameOrQuiz+":"+gameName,
          page_name: lastPageName*/
        });
      },

      quizSelectAnswer: function(questionNum) {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "quiz:answer submitted:"+questionNum,
          event_navigation_browsing_method: "click",
          article_parent_name: "quiz:"+gameName,
          page_name: lastPageName
        });
      },

      quizCompleted: function() {
        utag.link({
          event_navigation_action: "navigation",
          event_navigation_name: "quiz completed",
          event_navigation_browsing_method: "quiz play",
          article_parent_name: "quiz:"+gameName,
          page_name: lastPageName
        });
      }
    };

    var queue = [];
    var queueInterval = null;
    function queueWaiting() {
      // Check every second until tracking is available
      if (queueInterval !== null) return;
      queueInterval = setInterval(function(){
        if (typeof utag === "undefined") return;

        // Process queue now tracking has loaded
        clearInterval(queueInterval);
        for (var q of queue) {
          q();
        }
        q = null;
      },1000);
    }

  for (var property in api) {
    if (api.hasOwnProperty(property)) {
      let localFunc = api[property];
      api[property] = function(){
        // Store for later if tracking not available yet
        if (typeof utag === "undefined") {
          var nextArgs = arguments;
          queue.push(function(){
            localFunc.apply(this, nextArgs);
          });
          queueWaiting();
        }
        else {
          localFunc.apply(this, arguments);
        }
      };
    }
  }
  this.$get = function() {
    return api;
  };
});