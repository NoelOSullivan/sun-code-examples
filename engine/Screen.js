
class Screen {

  constructor(parent, properties) {
    this.parent = parent;
    this.properties = properties;
    this.game = parent.game;
  }

  create() {

  }

  destroy() {

  }

  transitionIn(from, done) {
    done();
  }

  transitionOut(to, done) {
    done();
  }

  setTemplate(url) {
    this.parent.screenTemplate = url;
    if(!this.parent.scope.$$phase) {
      this.parent.scope.$digest();
    }
  }

  addEntity(entity) {
    this.parent.addEntity(entity);
  }

}

export default Screen;