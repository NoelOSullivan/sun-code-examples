/* Allows linkage between a controller and the game current screen entity */
function GameScreenService($scope, game) {

  return {
    getScreen: function() {
      return game.currentScreen;
    },

    goToScreen: function(screenName, options) {
      game.goToNamedScreen(screenName, options);
    }
  }

}

export default GameScreenService;