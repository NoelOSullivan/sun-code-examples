function ToolbarController($scope,game,config, Tealium) {

  $scope.muted = game.isMuted;

  $scope.muteAudio = function(e){
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    $scope.muted = game.toggleAudio();
  };

  $scope.goFullscreen = function(e){
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    if ($scope.iOS) {
      // iOS handled via outer page
      parent.postMessage("fullscreen","*");
    }
    else {
      game.toggleFullscreen();
    }
  };
  
  $scope.goBack = function(){
    Tealium.gameClickOnExit();
    setTimeout(function(){
      window.location = config.shareLink;
    },1);      
  };
  
  $scope.iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

}

export default ToolbarController;