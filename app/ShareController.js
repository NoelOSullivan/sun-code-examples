function ShareController($rootScope,$scope,$filter, config, Tealium, game) {
    var gamelink = config.shareLink;
    var tweetText;
    tweetText = config.twitterTemplate($scope.score);
    $scope.twitterLink = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=SunNation&via=SunNation&url=${gamelink}`;
    $scope.twitterClicked = function() {
      Tealium.gameShareStart("twitter");
    };
    $scope.shareFacebook = function() {
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

  }

export default ShareController;