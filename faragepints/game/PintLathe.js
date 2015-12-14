/*
class BeerLine {

  constructor(rad,top,bottom) {
    this.radius = rad;
    this.top = top;
    this.bottom = bottom;
  }

  radiusAt(y) {

  }

  pointList(count, start, end) {

  }

  toVectors(points){

  }

}
*/

class LiquidLathe extends THREE.LatheGeometry {
  constructor(segments, phiStart, phiLength) {
    var points = [[150,330],[120,-270],[0,-270]];
    var vectors = points.map((p)=>new THREE.Vector3(p[0]/10,0,p[1]/10));
    super(vectors,segments,0,2*Math.PI);// segments, phiStart, phiLength);
  }
}

class PintLathe extends THREE.LatheGeometry {
  constructor(segments, phiStart, phiLength) {
    var points = [[0,-330],[130,-330],[148.6363636364,80],[170,110],[151.3636363636,140], [160,330],[150,330],[120,-270],[0,-270]];
    var vectors = points.map((p)=>new THREE.Vector3(p[0]/10,0,p[1]/10));
    super(vectors,segments,0,2*Math.PI);// segments, phiStart, phiLength);
  }
}

// Just the outer faces
class PintOuterLathe extends THREE.LatheGeometry {
  constructor(segments, phiStart, phiLength) {
    var points = [[0,-330],[130,-330],[148.6363636364,80],[170,110],[151.3636363636,140], [160,330]];
    var vectors = points.map((p)=>new THREE.Vector3(p[0]/10,0,p[1]/10));
    super(vectors,segments,0,2*Math.PI);// segments, phiStart, phiLength);
  }
}

class PintLatheInnerSides extends THREE.LatheGeometry {
  constructor(segments, phiStart, phiLength) {
    var points = [[150,330],[120,-270]];
    var vectors = points.map((p)=>new THREE.Vector3(p[0]/10,0,p[1]/10));
    super(vectors,segments,0,2*Math.PI);// segments, phiStart, phiLength);
  }
}

class PintLatheBase extends THREE.LatheGeometry {
  constructor(segments, phiStart, phiLength) {
    var points = [[120,-270],[0,-270]];
    var vectors = points.map((p)=>new THREE.Vector3(p[0]/10,0,p[1]/10));
    super(vectors,segments,0,2*Math.PI);// segments, phiStart, phiLength);
  }
}

export { PintLathe, PintLatheInnerSides, PintLatheBase, LiquidLathe, PintOuterLathe }; //, BeerLine };