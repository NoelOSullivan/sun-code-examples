import Entity from '../../engine/Entity';
import {
  LiquidLathe, PintLathe, PintLatheInnerSides, PintLatheBase, PintOuterLathe
}

from './PintLathe';

/* Animation for the player's pint
 */
class PlayerPint extends Entity {
  create() {
    this.scene = new THREE.Scene();
    this.finished = false;
    this.camera = new THREE.PerspectiveCamera(75, 1280 / 960, 0.1, 200);
    this.isCanvas = true;
    this.frameCount = 0;
    if (Modernizr.webgl) {
      console.log("Webgl renderer");
      try {
        this.renderer = new THREE.WebGLRenderer({
          sortObjects: false,
          alpha: true
        });
        this.isCanvas = false;
        this.numSegments = 16;
      }
      catch(e) {
      }
    }
    if (this.isCanvas) {
      console.log("Canvas renderer");
      this.isCanvas = true;
      this.numSegments = 8;
      this.renderer = new THREE.CanvasRenderer({
        sortObjects: false,
        alpha: true
      });
    }

    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setSize(1280, 960);
    $("#player-pint").empty().append(this.renderer.domElement);
    $("#player-pint").append(this.renderer.domElement);

    var animate = () => {
      if (this.destroyed) return;
      this.render();
      requestAnimationFrame(animate);
    }

    this.gameTexture = new THREE.Texture(this.game.canvas);
    this.gameTexture.minFilter = THREE.LinearFilter;
    this.gameTexture.needsUpdate = true;

    // Create a hidden scene to generate a cube env map from a render target
    if (!this.canvas) {
      this.sceneEnv = new THREE.Scene();
      var skyGeometry = new THREE.BoxGeometry(80, 50, 50);
      var materialArray = [];
      var frontFace = 5;
      for (var i = 0; i < 6; i++)
        materialArray.push(new THREE.MeshBasicMaterial({
          map: i === frontFace ? this.gameTexture : THREE.ImageUtils.loadTexture('3d/env-reflect.jpg'),
          side: THREE.BackSide
        }));
      var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
      var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
      this.sceneEnv.add(skyBox);
      this.refractCamera = new THREE.CubeCamera(0.1, 100, 512);
      this.refractCamera.renderTarget.mapping = THREE.CubeRefractionMapping;
      //this.reflectCamera = new THREE.CubeCamera(0.01, 5000, 512);
      //this.reflectCamera.renderTarget.mapping = THREE.CubeReflectionMapping;
      this.sceneEnv.add(this.refractCamera);
      //this.sceneEnv.add(this.reflectCamera);
    }

    // Set up a blur render pass
    /*
    this.refractRenderer = new THREE.WebGLRenderer({
      sortObjects: false,
      alpha: true
    });
      this.composer = new THREE.EffectComposer( this.refractRenderer );
      this.composer.addPass( new THREE.RenderPass( this.sceneEnv, this.refractCamera ) );

      var effect = new THREE.ShaderPass( THREE.HorizontalBlurShader );
      this.composer.addPass( effect );

      var effect = new THREE.ShaderPass( THREE.VerticalBlurShader );
      effect.renderToScreen = true;
      this.composer.addPass( effect );
*/


    // Compose the beer mesh from various blended layers
    this.mesh = new THREE.Group();
    this.meshes = {};

    // Pregenerate geometries
    this.geometries = {
      outer: new PintOuterLathe(this.numSegments),
      innerSides: new PintLatheInnerSides(this.numSegments),
      liquid: new LiquidLathe(this.numSegments),

    };

    // First render the backside of the outer glass surface w/ refraction
    // Other stuff can get rendered over the top of this
    if (!this.canvas) {

    this.mesh.add(
      this.backsideMesh =
      new THREE.Mesh(this.geometries.outer, new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        envMap: this.refractCamera.renderTarget,
        refractionRatio: 0.98,
        side: THREE.BackSide,
        reflectivity: 0.9
      }))
    );
    // And the inner backside layer
    this.mesh.add(
      this.innerMesh =
      new THREE.Mesh(this.geometries.innerSides, new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        envMap: this.refractCamera.renderTarget,
        refractionRatio: 0.96,
        side: THREE.BackSide,
        reflectivity: 0.9,
        transparent:true,
        opacity:0.8
      }))
    );
    }

    // Now the beer
    this.mesh.add(
    this.meshes.beerBase = new THREE.Mesh(
      this.geometries.liquid,
      new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        map: THREE.ImageUtils.loadTexture('3d/beer-side.png'),
        envMap: this.canvas ? null : this.refractCamera.renderTarget,
        refractionRatio: 0.95,
        transparent: true,
        side: THREE.BackSide,
        //blending:THREE.AdditiveBlending,
        reflectivity:0.3,
        opacity: 0.8
      }))
    );
    // And the head
    this.mesh.add(
    this.meshes.beerHead = new THREE.Mesh(
      this.geometries.liquid,
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: THREE.ImageUtils.loadTexture('3d/beer-side-head.png'),
        transparent: true,
        side: THREE.BackSide
      }))
    );
    // And a circular cap on top
    this.mesh.add(
    this.headMesh =
      new THREE.Mesh(new THREE.CircleGeometry(1,this.numSegments), new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('3d/beer-head-top.png')
      }))
      );
    this.headMesh.scale.set(16, 16, 16);
    this.headMesh.position.set(0, 0, 33);

    // And the last refraction map to go in front
    this.mesh.add(
    this.outerMesh1 = new THREE.Mesh(new PintLathe(this.numSegments),
      this.refractMaterial = new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        envMap: this.canvas ? null : this.refractCamera.renderTarget,
        refractionRatio: 0.96,
        //depthTest:false
        //depthWrite:false,
        transparent: true,
        opacity: 0.2,
        blending:THREE.AdditiveBlending,
        reflectivity: 0.6
      }))
      );
    /*
    this.mesh.add(
    this.outerMesh = new THREE.Mesh(new PintLathe(this.numSegments),
      this.refractMaterial = new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        envMap: this.reflectCamera.renderTarget,
        refractionRatio: 0.99,
        //depthTest:false
        //depthWrite:false,
        transparent: true,
        opacity: 0.1,
        blending:THREE.AdditiveBlending,
        reflectivity: 1
      }))
      );*/
/*
    this.mesh.add(
      this.innerMesh =
      new THREE.Mesh(new PintOuterLathe(), new THREE.MeshPhongMaterial({
        color: 0xfafaff,
        envMap: this.refractCamera.renderTarget,
        refractionRatio: 0.96,
        side: THREE.BackSide,
        reflectivity: 0.9
      }))
    );
*/
      //this.mesh.add(
        /*
    this.pintMesh =
      new THREE.Mesh(new LiquidLathe(), new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('3d/beer-side-with-head.png'),
        transparent: true,
        //  opacity:0.8,
        //        blending: THREE.AdditiveBlending, 
        side: THREE.BackSide,
        depthTest: false,
        //        envMap: this.refractCamera.renderTarget,
        //        refractionRatio: 0.96,
      }))*/
      //        );

// TODO: re-add bubbles
    //this.mesh.add(
      /*
      this.innerMesh1 =
      new THREE.Mesh(new PintLatheInnerSides(), new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('3d/bubbles-floating.png'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      }))
    //);
    //this.mesh.add(
      this.innerMesh2 =
      new THREE.Mesh(new PintLatheInnerSides(), new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('3d/bubbles-floating1.png'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      }))
    //);
    //this.mesh.add(
      this.baseMesh =
      new THREE.Mesh(new PintLatheBase(), new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('3d/bubbles-base.png'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      }))
*/
    //);

    this.scene.add(this.mesh);

    this.light = new THREE.PointLight(0xefefef, 1, 2000);
    this.light.position.set(40, 100, 300);
    this.scene.add(this.light);
    this.firstRun = true;

    // Set up the tween
    this.timeline = PlayerPint.Timeline;
    this.resetTween();
    animate();
  }

  render() {
    if (!this.canvas) {
      this.frameCount++;
      // Update cube map every few frames
      if (this.frameCount % 4 === 0) {
        this.refractCamera.updateCubeMap( this.renderer, this.sceneEnv );
    // this.reflectCamera.updateCubeMap( this.renderer, this.sceneEnv );
      }
    }
    //this.composer.render();
    this.renderer.render(this.scene, this.camera);
    this.gameTexture.needsUpdate = true;
  }

  destroy() {
    this.destroyed = true;
  }

  update() {
    this.checkTween();

    if (typeof this.mesh !== "undefined") {
      this.mesh.position.set(this.meshParams.meshX, this.meshParams.meshY, this.meshParams.meshZ);
      this.mesh.rotation.set(-Math.PI / 2, 0, 0); //this.game.time.time/1000);
      this.mesh.rotation.set(-Math.PI * (1 - this.meshParams.pintRotate) / 2, 0, 0); //this.game.time.time/1000);
      //this.innerMesh1.material.map.offset.set(0, -this.game.time.time / 1000 + 0.3);
      //this.innerMesh2.material.map.offset.set(0.5, -this.game.time.time / 1000 / 2);

      // Update beer emptiness
      var beerDrunk = 1 - this.meshParams.pintHeight;
      this.meshes.beerHead.material.map.repeat.set(1, 2);
      this.meshes.beerBase.material.map.repeat.set(1, 2);
      this.meshes.beerHead.material.map.offset.set(0, -beerDrunk);
      this.meshes.beerBase.material.map.offset.set(0, -beerDrunk);
      this.headMesh.position.z = 33 - beerDrunk * 60 - 1;
      var headScale = 15 - 3 * beerDrunk;
      this.headMesh.scale.set(headScale, headScale, headScale);
    }
  }

  resetTween() {
    this.meshParams = this.shallowCopy(this.timeline[0].values);
    this.lastWaypoint = 0;
  }

  checkTween() {
    if (this.parent.buttons.pintFinished || this.parent.scores.waiting) return;
    var frac = this.parent.pintProgress;
    // Handle end of sequence
    if (frac < this.lastWaypoint) {
      frac = 1;
    }
    for (var node of this.timeline) {
      if (node.at <= frac && this.lastWaypoint < node.at) {
        this.lastWaypoint = node.at;
        if (typeof this.meshTween !== 'undefined') {
          this.meshTween.stop();
        }
        this.meshTween = node.tween(this.game, this.meshParams);
        if (node.hasOwnProperty("sound") && node.sound === "gulp") {
          var n = Math.floor(Math.random() * 6);
          this.parent.slurpSounds[n].play();
        }
        if (node.at === 1) {
          this.meshTween.onComplete.add(()=>{
            this.resetTween();
          });
        }
      }
    }
  }
  shallowCopy(oldObj) {
      var newObj = {};
      for(var i in oldObj) {
          if(oldObj.hasOwnProperty(i)) {
              newObj[i] = oldObj[i];
          }
      }
      return newObj;
  }
}

PlayerPint.Timeline = [
  // Setup values
  {
    at:0,
    values: {
      pintHeight: 1,
      pintRotate: 0,
      meshX: 0,
      meshY: -120,
      meshZ: -80
    }
  },{
  // Lift pint up
  at: 0.05,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -30,
      meshZ: -44
    }, 2500, "Elastic", true)
  }
}, {
  // Take a gulp
  at: 0.3,
  sound: "gulp",
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -29,
      meshZ: -44,
      pintRotate: 0.15,
      pintHeight: 0.8
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.4,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -29,
      meshZ: -44,
      pintRotate: 0.1,
      pintHeight: 0.8
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.45,
  sound: "gulp",
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -27,
      meshZ: -46,
      pintRotate: 0.3,
      pintHeight: 0.6
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.55,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -27,
      meshZ: -46,
      pintRotate: 0.25,
      pintHeight: 0.6
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.6,
  sound: "gulp",
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -25,
      meshZ: -48,
      pintRotate: 0.45,
      pintHeight: 0.3
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.7,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -25,
      meshZ: -48,
      pintRotate: 0.4,
      pintHeight: 0.3
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.75,
  sound: "gulp",
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -20,
      meshZ: -50,
      pintRotate: 0.6,
      pintHeight: 0.02
    }, 1000, "Cubic", true)
  }
}, {
  // Take a gulp
  at: 0.85,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      meshX: 0,
      meshY: -20,
      meshZ: -50,
      pintRotate: 0.55,
      pintHeight: 0.02
    }, 1000, "Elastic", true)
  }
}, {
  // Take out of view
  at: 0.9,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      pintRotate: 0.5,
      meshX: 0,
      meshY: -100,
      meshZ: -60,
      pintHeight: 0
    }, 500, "Cubic", true)
  }
},{
  at: 1,
  tween: function(game, meshParams) {
    return game.add.tween(meshParams).to({
      pintRotate: 0.5,
      meshX: 0,
      meshY: -100,
      meshZ: -60,
      pintHeight: 0
    }, 500, "Cubic", true)
  }
}, ];

export default PlayerPint;