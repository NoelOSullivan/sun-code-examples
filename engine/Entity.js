class Entity {

  constructor(parent) {
    this.parent = parent;
    this.game = parent.game;
    this.destroyed = false;
  }

  /**
   * Random integer between {start} and {end} inclusive
   */
  random(start,end) {
    return Math.floor(start + Math.random()*(end-start+1));
  }

  destroy() {
    this.destroyed = true;
  }

}

export default Entity;