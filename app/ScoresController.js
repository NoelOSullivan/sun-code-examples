function ScoresController($rootScope,$scope,$facebook,config, Tealium) {
  // To test leaderboard layout use an array with the following format:
  var data = [
    { user: { name: "Pete" }, score: 123456 },
    { user: { name: "Bob" }, score: 123456 },
    { user: { name: "Jane" }, score: 123456 },
    { user: { name: "Mark" }, score: 123456 },
    { user: { name: "Hue" }, score: 123456 }
  ];

  Tealium.gameLeaderboardScreen();

  $scope.scores = [];
  var mapscores = function(data) {
    var n = 0;
    $scope.scores = data.map((item)=>{
      return {
        position: ++n,
        name: item.user.name,
        score: item.score
      }
    });
  }
  $scope.fbconnect = function() {
    $facebook.login().then(function(response){
      $scope.fbConnected = $rootScope.fbConnected = true;
      if ($scope.fbConnected) {
        $scope.saveScore();
      }
    },
    function(error){
      console.error(error);
    });
  };

  $scope.getScores = function() {
    $facebook.api("/" + config.facebookAppId + "/scores").then(function(response){
      mapscores(response.data);
    });
  }

  $scope.saveScore = function() {
    $facebook.api("/me/scores", "post", { score: $rootScope.score })
      .then(function(response){
        $scope.getScores();
      },function(err){
        console.error(err);
        $scope.getScores();
      });
  }


    $facebook.api("/me").then(
      function(response) {
        $scope.fbConnected = true;
        $scope.saveScore();
      },
      function(err) {
        $scope.fbConnected = false;
      }
    );

}

export default ScoresController;