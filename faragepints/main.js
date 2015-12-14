var debug = false;

import FaragePintsGame from './game/FaragePintsGame';
import FarageInit from './game/FarageInit';

var game = new FaragePintsGame();
game.initialize(new FarageInit(game));

window.scrollTo(0,1);

export default game;
