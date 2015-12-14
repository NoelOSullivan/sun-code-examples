function MainController($scope, game, Scale, preloader, config) {

  $scope.Modernizr = Modernizr;

  $scope.progress = 0;
  $scope.gameprog = 0;
  $scope.imageprog = 0;

  function checkprog() {
    $scope.progress = ($scope.gameprog + $scope.imageprog) / 2;
    if ($scope.progress >= 1 && !$scope.preloaded) {
      game.preloadComplete();
      $scope.preloaded = true;
    }
  }

  $scope.game = game;
  game.scope = $scope;

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

    preloader.preloadImages(config.preload).then( ()=>{
        $scope.imageprog = 1;
        checkprog();
      }, (error)=>{
        console.error(error);
      }, (ev)=>{
        $scope.imageprog = ev.percent / 100;
        checkprog();
      });

    game.uiReady();

}

export default MainController;