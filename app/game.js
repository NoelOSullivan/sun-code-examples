import BaseController from './BaseController';
import ToolbarController from './ToolbarController';
import ScoresController from './ScoresController';

var app = angular.module("sunnation");

app.config(($stateProvider, $urlRouterProvider, $facebookProvider, $locationProvider, config, TealiumProvider, ScaleProvider) => {

    // Facebook app ID
    $facebookProvider.setAppId(config.facebookAppId).setVersion('v2.2')
      .setPermissions("email,user_friends,publish_actions");

    TealiumProvider.gameName(config.gameName);

    ScaleProvider.initialize(); 

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

  });

app
.controller("ToolbarController", ToolbarController)
.controller("BaseController", BaseController);

var firstTimeHome = true;
app.controller("HomeController", function($rootScope, $scope, $state, $facebook, Tealium) {

  if (firstTimeHome) {
    Tealium.gameIntroScreen();
    firstTimeHome = false;
  }

  $scope.subTemplate = $rootScope.subTemplate || 'views/home-logo.html';

})
  .controller("GameOverController", function($rootScope, $scope, $facebook, Tealium) {
    Tealium.gameScoreScreen();
    Tealium.gameEnded($scope.winning, $scope.totalTime/1000);
    $scope.playagain = function(){
      $scope.startgame();
    }
  })
  .controller("ScoresController", ScoresController)
  .controller("ProgressController", function($scope, $rootScope){
  })
  //.controller("ShareController", ShareController);
  function minsec(ms) {
      var sec = Math.floor(ms / 1000);
      var min = Math.floor(sec / 60);
      sec = sec % 60;
      var text = sec + "secs";
      if (min > 0) {
        text = min + "min " + text;
      }
      return text;
    };
  app.filter("minsec", function() {
    return minsec;
  })
  .filter("percent", function(){
    return function(frac) {
      return Math.floor(frac * 100);
    }
  })
;

import './GameController';
import './TealiumProvider';
import './ScaleProvider';
