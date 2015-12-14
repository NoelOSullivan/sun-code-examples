import app from './app';

app.controller("GameController", function($rootScope, $scope, $facebook, game, $interval, Tealium, $element) {
    Tealium.gameInstructionsScreen();
    game.start();

    $scope.begingame = function() {
      $(document).off("keydown", $scope.begingame);
      Tealium.gameClickOnPlay();
      Tealium.gameStarted();
      game.go();
      $scope.started = true;
    }

    angular.element(document).on("keydown", $scope.begingame);

    $interval(function(){
      $scope.score = game.score;
      $scope.clock = game.clock;
    }, 1000);
  });