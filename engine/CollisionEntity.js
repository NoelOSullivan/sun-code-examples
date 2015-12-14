import { Polygon, Vector } from './Collisions';
import Entity from './Entity';

class CollisionEntity extends Entity {

  constructor(parent) {
    this.root = {x:0,y:0};
    super(parent);
  }

  create() {
    this.polygons = this.createCollisionPolygons();
  }

  createCollisionPolygons() {
    return [];
  }

  /**
   * Broad phase  collision occurs before actually checking any polygons.
   * A good place to optimise for a specfic game.
   */
  collideBroadPhase(other) {
    // By default assume all collisions will be checked.
    return true;
  }

  collideNarrowPhase(other) {
    for (var pa of this.polygons) {
      if (debug)
        this.game.debug.geom(new Phaser.Rectangle(pa.bounds.min.x,pa.bounds.min.y,pa.bounds.max.x-pa.bounds.min.x,pa.bounds.max.y-pa.bounds.min.y));
      for (var pb of other.polygons) {
        if (debug)
          this.game.debug.geom(new Phaser.Rectangle(pb.bounds.min.x,pb.bounds.min.y,pb.bounds.max.x-pb.bounds.min.x,pb.bounds.max.y-pb.bounds.min.y));
        if (pa.collides(pb)) return true;
      }
    }
  }

  onCollide(other) {

  }

  /**
   * Helper method to create polygon shapes from the physics data exported by PhysicsEditor
   */
  polygonsFromPhysics(key, object) {
    var data = this.game.cache.getPhysicsData(key, object);
    var polygons = [];
    for (var part of data) {
      var vertices = [];
      for (var i = 0; i < part.shape.length; i+=2) {
        vertices.push(new Vector(part.shape[i],part.shape[i+1]));
      }
      polygons.push(new Polygon(vertices));
    }
    return polygons;
  }

}

export default CollisionEntity;