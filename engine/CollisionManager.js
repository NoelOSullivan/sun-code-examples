import Entity from './Entity';
import CollisionEntity from './CollisionEntity';

class CollisionManager extends Entity {

  create() {

  }

  // Here's where all the collisions are checked
  postUpdate() {
    var colliders = [];
    // First get a list of collidable entities
    // TODO: Perf improvement would be to maintain this list
    // proactively by hooking into entity creation/removal events
    for (var e of this.parent.entities) {
      if (!e.destroyed && e instanceof CollisionEntity) {
        colliders.push(e);
      }
    }

    var narrowPhase = [];

    // Perform the broad phase sweep to find out what
    // pairs of entities will actually be tested. Check every possible pair
    // and test broad phase both ways round.
    for (var i=0; i<colliders.length; i++) {
      var a = colliders[i];
      var ib = i+1;
      if (ib === colliders.length) break; // Last pair has been done (or only one entity)
      for (var j = ib; j < colliders.length; j++) {
        var b = colliders[j];
        if (!a.collideBroadPhase(b) || !b.collideBroadPhase(a)) {
          continue;
        }
        narrowPhase.push([a,b]);
      }
    }
    // Now execute the narrow phase
    for (var ab of narrowPhase) {
      // Narrow phase is only tested one-way. Since there is currently no scenario where the test would be different
      if (ab[0].collideNarrowPhase(ab[1])) {
        ab[0].onCollide(ab[1]);
        ab[1].onCollide(ab[0]);
      }
    }
  }

}

export default CollisionManager;