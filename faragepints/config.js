var config = {
  /* Production */
  gameName:"Nigel Farage Drinking Game",
  facebookAppId: '422512764575494',
  shareLink: 'http://www.sunnation.co.uk/can-you-beat-nigel-farage-in-our-fun-drinking-game/',
  twitterTemplate: (score)=>{ return `I just drank ${score} pints on the Nigel Farage Drinking Game. Can you beat me?`; },
  facebookShare: function($scope, cb) {
    FB.ui({
        method: 'share_open_graph',
        action_type: 'sn-nfdrinking:drink',
        action_properties: JSON.stringify({
//          time: Math.floor($scope.gametime / 1000),
          player_pints: $scope.score,
          //nigel: 'http://samples.ogp.me/422525934574177'
          //pints: 'http://www.rekdev.com/thesun/faragepints/'
          pints: 'http://www.sunnation.co.uk/can-you-beat-nigel-farage-in-our-fun-drinking-game/'
        })
    }, function(result){
      cb(null,result);
    }, function(err) {
      console.error(err);
      cb(err);
    });
  },

  preload: [
      "beer-cutout",
      "beer-empty",
      "beer-fill",
      "facebookConnect",
      "gameOverBack",
      "home-background",
      "icon-audio-muted-hover",
      "icon-audio-muted",
      "icon-audio-unmuted-hover",
      "icon-audio-unmuted",
      "icon-back-hover",
      "icon-back",
      "icon-full-screen-hover",
      "icon-full-screen",
      "leaderboardBack",
      "overlay-instructions-desktop",
      "overlay-instructions",
      "overlay-orientation",
      "playAgain",
      "playIcon",
      "preload-logo",
      "showScores",
      "drink-responsibly"
    ].map((name)=>"ui/"+name+".png")
    .concat([
'3d/beer-side.png',
'3d/beer-side-head.png',
'3d/beer-head-top.png',
'3d/env-reflect.jpg'
      ])
}

export default config;