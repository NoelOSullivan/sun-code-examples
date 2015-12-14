//var app = angular.module('sunnation',["ngFacebook","preload"]);
var app = angular.module('sunnation',["preload"]);

window.scrollTo(0,1);
var facebookAppId = '';
var scaleInfo;

//app.config(function ($facebookProvider, TealiumProvider, ScaleProvider) {
app.config(function (TealiumProvider, ScaleProvider) {
    TealiumProvider.gameName("meme generator");
    ScaleProvider.initialize();
    scaleInfo = ScaleProvider.$get();
})

//---------------------------------------------------------------------------------------------------

var queue,queue2,image,photoTaken,isTouchDevice,takePicture,stage,webcam,importedImage,centerShift_x,centerShift_y,ratio,videoStream;
var canvas,context,canvasOp,contextOp,shareScreenCanvas,shareScreenContext,canvasOffScreen,contextOffScreen,canvasTransform,contextTransform;
var sleeveUkip,sleeveTory,sleeveGreen,sleeveLibdem,sleeveLabour;
var ukipOpenLeft,toryOpenLeft,greenOpenLeft,libdemOpenLeft,labourOpenLeft;
var ukipClosedLeft,toryClosedLeft,greenClosedLeft,libdemClosedLeft,labourClosedLeft;
var activeSleeve,activePhotoOp;
var activeEye;
var onRotation,onTranslate,onScale,timer;
var leftHeadPos,topHeadPos,leftHolePos,topHolePos;
var fromCamera;
var leftEyePos,rightEyePos;
var autoScale;
var photoArray = ["photoUkip","photoTory","photoGreen","photoLibdem","photoLabour"];
var imageLoader;
var transformOrigX = 632/2;
var transformOrigY = 632/2;
var ovalMeme = "oval";
var horizRef,autoScale;
var twitterCount;
var twitterMax = 117;
var twitterLink;
var browser;
horizRef = [[50,50]];

app.controller("MainController", function($scope, Tealium) {

  Tealium.gameIntroScreen();
  //loadAssets();
  loadHomeScreen();
  checkDeviceType();

  detectBrowser();

  //photoTaken = false;

  //isTouchDevice = true;

  /*if(isTouchDevice) {
    setUpTouchDevice();
  } else {
    initWebcam();
  }*/

  $scope.freezeImageNG = function() {
    console.log("freezeImageNG");
    freezeImage();
  }
});

// ---------------------------------------------------------------------------------------START SCREEN

app.controller("ScreenStartController", function($scope) {
  $scope.hoverStartButton = function() {
    var button = $('#start-button')[0];
    button.style.opacity = 0;
    button = $('#start-button-hover')[0];
    button.style.opacity = 1;
  }
  $scope.leaveStartButton = function() {
    var button = $('#start-button')[0];
    button.style.opacity = 1;
    button = $('#start-button-hover')[0];
    button.style.opacity = 0;
  }
  $scope.clickStartButton = function() {
    var button = $('#start-button')[0];
    button.style.opacity = 0;
    button = $('#start-button-hover')[0];
    button.style.opacity = 0;
    hideScreenStart();
    goScreenChoice();
  }
});

function hideScreenStart() {
  var screen = $('#screen-start')[0];
  screen.style.visibility = "hidden";
}

// ---------------------------------------------------------------------------------------SCREEN CHOICE PARTY

app.controller("ScreenChoiceController", function($scope) {

  // Listener for file input //
  listenForImage();

  sleeveUkip = $('#ukip-main-sleeve')[0];
  sleeveTory = $('#tory-main-sleeve')[0];
  sleeveGreen = $('#green-main-sleeve')[0];
  sleeveLibdem = $('#libdem-main-sleeve')[0];
  sleeveLabour = $('#labour-main-sleeve')[0];
  ukipOpenLeft = -560;
  toryOpenLeft = -640;
  greenOpenLeft = -720;
  libdemOpenLeft = -800;
  labourOpenLeft = -880;
  ukipClosedLeft = -880;
  toryClosedLeft = -960;
  greenClosedLeft = -1040;
  libdemClosedLeft = -1120;
  labourClosedLeft = -1200;

  $scope.openSleeve = function(sleeve) {
    activeSleeve = sleeve;
    initPhotoState(sleeve);
    manageGetPhotoChoice(0);
    managePickOpText(1);
    sleeveUkip.style.left = ukipClosedLeft + 'px';
    sleeveTory.style.left = toryClosedLeft + 'px';
    sleeveGreen.style.left = greenClosedLeft + 'px';
    sleeveLibdem.style.left = libdemClosedLeft + 'px';
    sleeveLabour.style.left = labourClosedLeft + 'px';
    switch(sleeve) {
      case 1:
        sleeveUkip.style.left = ukipOpenLeft + 'px';
        break;
      case 2:
        sleeveUkip.style.left = ukipOpenLeft + 'px';
        sleeveTory.style.left = toryOpenLeft + 'px';
        break;
      case 3:
        sleeveUkip.style.left = ukipOpenLeft + 'px';
        sleeveTory.style.left = toryOpenLeft + 'px';
        sleeveGreen.style.left = greenOpenLeft + 'px';
        break;
      case 4:
        sleeveUkip.style.left = ukipOpenLeft + 'px';
        sleeveTory.style.left = toryOpenLeft + 'px';
        sleeveGreen.style.left = greenOpenLeft + 'px';
        sleeveLibdem.style.left = libdemOpenLeft + 'px';
        break;
      case 5:
        sleeveUkip.style.left = ukipOpenLeft + 'px';
        sleeveTory.style.left = toryOpenLeft + 'px';
        sleeveGreen.style.left = greenOpenLeft + 'px';
        sleeveLibdem.style.left = libdemOpenLeft + 'px';
        sleeveLabour.style.left = labourOpenLeft + 'px';
        break;
    }
    var pyp = $('#party-text')[0];
    pyp.style.visibility = 'hidden';
  }

  $scope.clickPhotoOp = function(photoOp) {
    managePickOpText(0);
    activePhotoOp = photoOp;
    manageGetPhotoChoice(1);
    initPhotoState(activeSleeve);
    if(photoOp == 1){
      $('#' + photoArray[activeSleeve-1] + '1')[0].style.opacity = "1";
      $('#' + photoArray[activeSleeve-1] + '2')[0].style.opacity = "0.5";
    } else {
      $('#' + photoArray[activeSleeve-1] + '2')[0].style.opacity = "1";
      $('#' + photoArray[activeSleeve-1] + '1')[0].style.opacity = "0.5";
    }
    // SHORT CUT FOR FACEBOOK VALIDATION
    //goScreenShare();
  }

  $scope.clickCameraButton = function() {
    initWebcam();
    //manageEyeInterface(0);
    goScreenCanvas();
    fromCamera = true;

    //$('#take-photo')[0].style.visibility = "visible";

    /*var eyeDiv = $('#eye-div')[0];
    eyeDiv.style.visibility = "visible";*/
  }
});

function listenForImage() {
  if(isTouchDevice) {
    imageLoader = $('#imageLoaderTouch')[0];
    imageLoader.addEventListener('change', handleImage, true);
  } else {
    imageLoader = $('#imageLoader')[0];
    imageLoader.addEventListener('change', handleImage, true);
  }
}

function goScreenChoice() {
  var screen = $('#screen-choice')[0];
  screen.style.visibility = "visible";
  managePickOpText(0);
  manageGetPhotoChoice(0);
  hideShareSleeves();
  if(isTouchDevice) {
    $('#camerabutton')[0].style.visibility = "hidden";
    $('#disk')[0].style.visibility = "hidden";
    $('#existing-text')[0].style.visibility = "hidden";
  } else {
    $('#touchphoto')[0].style.visibility = "hidden";
    if(browser == "Explorer") {
      $('#camerabutton')[0].style.visibility = "hidden";
      $('#take-text')[0].style.visibility = "hidden";
    }
  }
}

function hideScreenChoice() {
  var screen = $('#screen-choice')[0];
  screen.style.visibility = "hidden";
}

// ---------------------------------------------------------------------------------------SCREEN CANVAS

app.controller("ScreenCanvasController", function($scope,$interval) {

  $scope.clickArrowUpSCC = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
        clearCanvas();
        context.translate(0,-5);
        transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
      context.translate(0,-10);
      transformToCanvas();
    }
  }

  $scope.clickArrowLeftSCC = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
        clearCanvas();
        context.translate(-5,0);
        transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
      context.translate(-10,0);
      transformToCanvas();
    }
  }

  $scope.clickArrowRightSCC = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
        clearCanvas();
        context.translate(10,0);
        transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
      context.translate(10,0);
      transformToCanvas();
    }
  }

  $scope.clickArrowDownSCC = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
        clearCanvas();
        context.translate(0,10);
        transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
      context.translate(0,10);
      transformToCanvas();
    }
  }

  $scope.stopTranslate = function() {
    $interval.cancel(timer);
    timer = undefined;
  }

  $scope.turnAnticlockwise = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
          contextTransform.clearRect(0, 0, 632, 632);
          translateBeforeTransform();
          contextTransform.rotate(-1*Math.PI/180);
          translateAfterTransform();
          if(!fromCamera) {
            contextTransform.drawImage(importedImage, 0, 0, importedImage.width, importedImage.height, centerShift_x, centerShift_y, importedImage.width * ratio, importedImage.height * ratio);
          } else {
            contextTransform.drawImage(canvasOffScreen, 0, 0, importedImage.width, importedImage.height);
          }
          transformToCanvas();
        },50);
      }
    } else {
      contextTransform.clearRect(0, 0, 632, 632);
        translateBeforeTransform();
        contextTransform.rotate(-5*Math.PI/180);
        translateAfterTransform();
        if(!fromCamera) {
          contextTransform.drawImage(importedImage, 0, 0, importedImage.width, importedImage.height, centerShift_x, centerShift_y, importedImage.width * ratio, importedImage.height * ratio);
        } else {
          contextTransform.drawImage(canvasOffScreen, 0, 0, importedImage.width, importedImage.height);
        }
        transformToCanvas();
    }
  }

  $scope.turnClockwise = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
          contextTransform.clearRect(0, 0, 632, 632);
          translateBeforeTransform();
          contextTransform.rotate(1*Math.PI/180);
          translateAfterTransform();
          if(!fromCamera) {
            contextTransform.drawImage(importedImage, 0, 0, importedImage.width, importedImage.height, centerShift_x, centerShift_y, importedImage.width * ratio, importedImage.height * ratio);
          } else {
            contextTransform.drawImage(canvasOffScreen, 0, 0, importedImage.width, importedImage.height);
          }
          transformToCanvas();
        },50);
      }
    } else {
        contextTransform.clearRect(0, 0, 632, 632);
        translateBeforeTransform();
        contextTransform.rotate(5*Math.PI/180);
        translateAfterTransform();
        if(!fromCamera) {
          contextTransform.drawImage(importedImage, 0, 0, importedImage.width, importedImage.height, centerShift_x, centerShift_y, importedImage.width * ratio, importedImage.height * ratio);
        } else {
          contextTransform.drawImage(canvasOffScreen, 0, 0, importedImage.width, importedImage.height);
        }
        transformToCanvas();
    }
  }

  $scope.stopRotation = function() {
    $interval.cancel(timer);
    timer = undefined;
  }

  $scope.clickPlusSCC = function() { 
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
          clearCanvas();
          context.translate(transformOrigX, transformOrigY);
          context.scale(1.02,1.02);
          context.translate(-1*transformOrigX, -1*transformOrigY);
          transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
        context.translate(transformOrigX, transformOrigY);
        context.scale(1.1,1.1);
        context.translate(-1*transformOrigX, -1*transformOrigY);
        transformToCanvas();
    }
  }

  $scope.clickMinusSCC = function() {
    if(!isTouchDevice) {
      if(timer==undefined) {
        timer=$interval(function(){
          clearCanvas();
          context.translate(transformOrigX, transformOrigY);
          context.scale(0.98,0.98);
          context.translate(-1*transformOrigX, -1*transformOrigY);
          transformToCanvas();
        },50);
      }
    } else {
      clearCanvas();
        context.translate(transformOrigX, transformOrigY);
        context.scale(0.9,0.9);
        context.translate(-1*transformOrigX, -1*transformOrigY);
        transformToCanvas();
    }
  }

  $scope.stopScale = function() {
    $interval.cancel(timer);
    timer = undefined;
  }

  $scope.inverseOvalMeme = function() { 
    if(ovalMeme == "oval") {
      ovalMeme = "meme";
      hideOvals();
      $('#button-oval')[0].style.visibility = "visible";
      $('#button-meme')[0].style.visibility = "hidden";
      $('#canvas-op')[0].style.visibility = "visible";
    } else {
      ovalMeme = "oval";
      showOval();
      $('#button-oval')[0].style.visibility = "hidden";
      $('#button-meme')[0].style.visibility = "visible";
      $('#canvas-op')[0].style.visibility = "hidden";
    }
  }

  $scope.clickTickSCC = function() { 
    goScreenShare();
  }

  $scope.restartSCC = function() {
    restart();
  }
});

function translateBeforeTransform() {
  contextTransform.translate(transformOrigX, transformOrigY);
}

function translateAfterTransform() {
  contextTransform.translate(-1*transformOrigX, -1*transformOrigY);
}

function clearCanvas() {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, 632, 632);
  context.restore();
}

// function stopInterval() {
//   $interval.cancel(timer);
//   timer = undefined;
// }

// ---------------------------------------------------------------------------------------EYE DIV

/*app.controller("EyeDivController", function($scope) {

  $("#left-eye, #right-eye").draggable({

    drag: function( event, ui ) {
      //console.log("scaleInfo.globalScale",scaleInfo.globalScale);
      //console.log("Y",event.clientY);
      //console.log("cY",event.clientY / scaleInfo.globalScale);
     
      ui.position.left = (event.clientX / scaleInfo.globalScale) - 32;
      ui.position.top = (event.clientY / scaleInfo.globalScale) - 18;
     
      //ui.position.top = (event.clientY / scaleInfo.globalScale);
    }
  });

  $scope.gotoAdjustSCC = function() {
    gotoAdjust();
  }
});*/

function gotoAdjust() {
  manageAdjustInterface(1);
  updateImportCanvas();
  if(ovalMeme == "oval") {
      $('#button-oval')[0].style.visibility = "hidden";
      $('#button-meme')[0].style.visibility = "visible";
      $('#canvas-op')[0].style.visibility = "hidden";
      showOval();
    } else {
      $('#button-oval')[0].style.visibility = "visible";
      $('#button-meme')[0].style.visibility = "hidden";
      $('#canvas-op')[0].style.visibility = "visible";
      hideOvals();
    }
}

function showOval() {
  hideOvals();
  if(activePhotoOp==1) {
    $('#small-oval')[0].style.visibility = "visible";
    if(activeSleeve == 3) {
      $('#small-oval')[0].style.left = "899px"; 
      $('#small-oval')[0].style.top = "460px";
    } else {
      $('#small-oval')[0].style.left = "686px"; 
      $('#small-oval')[0].style.top = "480px";
    }
  } else {
    $('#large-oval')[0].style.visibility = "visible";
    if(activeSleeve == 1) {
      $('#large-oval')[0].style.left = "630px"; 
      $('#large-oval')[0].style.top = "360px";
    } else {
      $('#large-oval')[0].style.left = "890px";
      $('#large-oval')[0].style.top = "360px";
    }
  }
}

function hideOvals() {
  $('#small-oval')[0].style.visibility = "hidden";
  $('#large-oval')[0].style.visibility = "hidden";
}

///green 1 left: 377px; top: 315px;
// labour 1 left: 164px;  top: 331px;

// ---------------------------------------------------------------------------------------SCREEN SHARE SAVE

app.controller("ScreenShareController", function($scope, Tealium) {
  $scope.shareToFB = function() {
    Tealium.gameShareStart("facebook");
    $('#share-text')[0].style.visibility = "hidden";
    $('#share-again')[0].style.visibility = "visible";
    $('#see-facebook')[0].style.visibility = "visible";
    $('#go-to-facebook')[0].style.visibility = "visible";
    window.sharing.shareToFacebook();
  }

  $scope.shareToTwitter = function() {
    Tealium.gameShareStart("twitter");
    if(twitterCount >= 0) {
      //$('#share-text')[0].style.visibility = "hidden";
      //$('#share-again')[0].style.visibility = "visible";
      //$('#see-twitter')[0].style.visibility = "visible";
      //$('#go-to-twitter')[0].style.visibility = "visible";
      window.sharing.shareToTwitter();
    } else {
      //
    }
  }

  $scope.goToFacebook = function() {
    console.log("GO TO FACEBOOK");
    window.open("http://www.facebook.com");
  }

  $scope.goToTwitter = function() {
    console.log("GO TO TWITTER");
    window.open(window.sharing.twitterLink);
  }

  $scope.restartSSC = function() {
    restart();
  }

  $scope.saveImage = function() {

    var data = canvasOffScreen.toDataURL("image/jpg");

    if (!window.ActiveXObject) {
      //CHROME - OPERA - IPAD
      var save = document.createElement('a');
      save.href = data;
      save.target = '_blank';
      save.download = "mymeme.jpg" || 'unknown';

      var event = document.createEvent('Event');
      event.initEvent('click', true, true);
      save.dispatchEvent(event);
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    } else {
      if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(data, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, "mymeme.jpg" || data)
        _window.close();
      }
    }
  }

  $scope.countChars = function () {
    var length = $('#text-box').val().length;
    twitterCount = twitterMax - length;
    $('#char-count').text(twitterCount);
    if(twitterCount >= 0) {
      $('#char-count')[0].style.backgroundColor = "#dddddd";
      $('#char-count')[0].style.color = "black";
      $('#twitter-button')[0].style.opacity = "1";
    } else {
      $('#char-count')[0].style.backgroundColor = "red";
      $('#char-count')[0].style.color = "white";
      $('#twitter-button')[0].style.opacity = "0.4";
    }
  };
});

function restart() {
    $('#canvas-op-wrapper')[0].style.visibility = "hidden";
    $('#canvas-op')[0].style.visibility = "hidden";
    $('#button-meme')[0].style.visibility = "hidden";
    $('#button-oval')[0].style.visibility = "hidden";
    $('#screen-canvas')[0].style.visibility = "hidden";
    hideOvals();
    manageAdjustInterface(0);
    ovalMeme = "oval";
    hideScreenShare();
    hideEyeSleeves();
    listenForImage();
    $('#take-photo')[0].style.visibility = "hidden";
    webcam = $('#webcam')[0];
    webcam.style.visibility = "hidden";
    if(importedImage!==undefined) {
      importedImage.src = "";
      imageLoader.value = "";
    }
    resetCanvas();
    resetTransformCanvas();
    resetOpCanvas();
    resetOffScreenCanvas();
    initPhotoState(activeSleeve);
    $('#text-box').val('');
    goScreenChoice();
}

//---------------------------------------------------------------------------------------------------

function initPhotoState(sleeve) {
  switch(sleeve) {
      case 1:
          $('#photoUkip1')[0].style.opacity = "0.8";
          $('#photoUkip2')[0].style.opacity = "0.8";
        break;
      case 2:
          $('#photoTory1')[0].style.opacity = "0.8";
          $('#photoTory2')[0].style.opacity = "0.8";
        break;
      case 3:
          $('#photoGreen1')[0].style.opacity = "0.8";
          $('#photoGreen2')[0].style.opacity = "0.8";
        break;
      case 4:
          $('#photoLibdem1')[0].style.opacity = "0.8";
          $('#photoLibdem2')[0].style.opacity = "0.8";
        break;
      case 5:
          $('#photoLabour1')[0].style.opacity = "0.8";
          $('#photoLabour2')[0].style.opacity = "0.8";
        break;
    }
}

//---------------------------------------------------------------------------------------------------

function goScreenCanvas() {
  hideScreenChoice();
  manageGetPhotoChoice(0)
  hideEyeSleeves();
  showEyeSleeve();
  var screen = $('#screen-canvas')[0];
  screen.style.visibility = "visible";
  var btnPhoto = $('#take-photo')[0];
  btnPhoto.style.visibility = "hidden";
  if(canvas == undefined) {
    createCanvas();
    createCanvasOp();
  } else {
    var screen = $('#screen-canvas')[0];
    screen.style.visibility = "visible";
  }
  manageAdjustInterface(0);
  //$('#canvas-op-wrapper')[0].style.visibility = "hidden";


  /*var eyeDiv = $('#eye-div')[0];
  eyeDiv.style.visibility = "visible";*/

}

function hideEyeSleeves() {
  var sleeve;
  sleeve = $('#sleeve-eye-ukip')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-eye-tory')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-eye-green')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-eye-libdem')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-eye-labour')[0];
  sleeve.style.visibility = "hidden";
}

function showEyeSleeve() {
  var sleeve;
  switch (activeSleeve) {
    case 1:
      sleeve = $('#sleeve-eye-ukip')[0];
      break;
    case 2:
      sleeve = $('#sleeve-eye-tory')[0];
      break;
    case 3:
      sleeve = $('#sleeve-eye-green')[0];
      break;
    case 4:
      sleeve = $('#sleeve-eye-libdem')[0];
      break;
    case 5:
      sleeve = $('#sleeve-eye-labour')[0];
      break;
  }
  sleeve.style.visibility = "visible";
}

function manageEyeInterface(show) {
  if(show==0) {
    $('#eye-interface')[0].style.visibility = "hidden";
    $('#left-eye')[0].style.visibility = "hidden";
    $('#right-eye')[0].style.visibility = "hidden";
  } else {
    $('#eye-interface')[0].style.visibility = "visible";
    $('#left-eye')[0].style.visibility = "visible";
    $('#right-eye')[0].style.visibility = "visible";
  }
}

function manageAdjustInterface(show) {
  if(show==0) {
    $('#adjust-interface')[0].style.visibility = "hidden";
  } else {
    $('#adjust-interface')[0].style.visibility = "visible";
  }
}

function managePickOpText(show) {
  if(show==0) {
    $('#pick-op-text')[0].style.visibility = "hidden";
  } else {
    $('#pick-op-text')[0].style.visibility = "visible";
  }
}

function manageGetPhotoChoice(show) {
  if(show==0) {
    $('#get-photo-choice')[0].style.visibility = "hidden";
  } else {
    $('#get-photo-choice')[0].style.visibility = "visible";
  }
}

function hideScreenShare() {
  $('#screen-share')[0].style.visibility = "hidden";
  $('#share-again')[0].style.visibility = "hidden";
  $('#see-twitter')[0].style.visibility = "hidden";
  $('#see-facebook')[0].style.visibility = "hidden";
  $('#go-to-twitter')[0].style.visibility = "hidden";
  $('#go-to-facebook')[0].style.visibility = "hidden";
}

function goScreenShare() {
  hideScreenChoice();
  $('#screen-share')[0].style.visibility = "visible";
  $('#share-again')[0].style.visibility = "hidden";
  $('#see-twitter')[0].style.visibility = "hidden";
  $('#see-facebook')[0].style.visibility = "hidden";
  $('#go-to-twitter')[0].style.visibility = "hidden";
  $('#go-to-facebook')[0].style.visibility = "hidden";
  $('#twitter-button')[0].style.opacity = "1";
  if(browser == "Explorer" || browser=="Firefox") {
    $('#download-button')[0].style.visibility = "hidden";
  }
  hideShareSleeves();
  showShareSleeve();
  createShareCanvas();
  copyCanvasToShareScreen();
  twitterCount = twitterMax;
  $('#char-count').text(twitterMax);
}

function hideShareSleeves() {
  var sleeve;
  sleeve = $('#sleeve-share-ukip')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-share-tory')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-share-green')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-share-libdem')[0];
  sleeve.style.visibility = "hidden";
  sleeve = $('#sleeve-share-labour')[0];
  sleeve.style.visibility = "hidden";
}

function showShareSleeve() {
  var sleeve;
  switch (activeSleeve) {
    case 1:
      sleeve = $('#sleeve-share-ukip')[0];
      break;
    case 2:
      sleeve = $('#sleeve-share-tory')[0];
      break;
    case 3:
      sleeve = $('#sleeve-share-green')[0];
      break;
    case 4:
      sleeve = $('#sleeve-share-libdem')[0];
      break;
    case 5:
      sleeve = $('#sleeve-share-labour')[0];
      break;
  }
  sleeve.style.visibility = "visible";
}

function drawOpToCanvas(superImpose) {
  // SuperImpose = 1 for quick submission version. 
  var image;
  image = new Image();
  switch(activeSleeve) {
      case 1:
          if(activePhotoOp == 1){
            image.src = "images/photo-ops/photo-ukip-1.png";
          } else {
            image.src = "images/photo-ops/photo-ukip-2.png";
          }
        break;
      case 2:
          if(activePhotoOp == 1){
            image.src = "images/photo-ops/photo-tory-1.png";
          } else {
            image.src = "images/photo-ops/photo-tory-2.png";
          }
        break;
      case 3:
          if(activePhotoOp == 1){
            image.src = "images/photo-ops/photo-green-1.png";
          } else {
            image.src = "images/photo-ops/photo-green-2.png";
          }
        break;
      case 4:
          if(activePhotoOp == 1){
            image.src = "images/photo-ops/photo-libdem-1.png";
          } else {
            image.src = "images/photo-ops/photo-libdem-2.png";
          }
        break;
      case 5:
          if(activePhotoOp == 1){
            image.src = "images/photo-ops/photo-labour-1.png";
          } else {
            image.src = "images/photo-ops/photo-labour-2.png";
          }
        break;
    }
    //context.drawImage(image,0,0,canvas.width,canvas.height);
    image.onload = function() {
      if(superImpose == 0) {
        contextOp.drawImage(image, 0, 0,canvasOp.width,canvasOp.height);
      } else {
        context.drawImage(image, 0, 0,canvas.width,canvas.height);
      }
    }
    //shareScreenContext.drawImage(image, 0, 0,shareScreenCanvas.width,shareScreenCanvas.height);
  //shareScreenContext.drawImage(canvas, 0, 0);
}

function copyCanvasToShareScreen() {
  shareScreenContext.drawImage(canvas, 0, 0, shareScreenCanvas.width, shareScreenCanvas.height);
  shareScreenContext.drawImage(canvasOp, 0, 0, shareScreenCanvas.width, shareScreenCanvas.height);

  contextOffScreen.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  contextOffScreen.drawImage(canvasOp, 0, 0, canvas.width, canvas.height);
}

/*function restart() {
  console.log("RESTART")
  hideScreenShare();
  goScreenChoice();
  manageAdjustInterface(0);
  hideEyeSleeves();
  var screen = $('#screen-canvas')[0];
  screen.style.visibility = "hidden";
  listenForImage();
}*/

// function managePickOpText(show) {
//   var pickOp;
//   if(show==0) {
//     $('#pick-op-text')[0].style.visibility = "hidden";
//   } else {
//     $('#pick-op-text')[0].style.visibility = "visible";
//   }
// }

//---------------------------------------------------------------------------------------------------

function loadHomeScreen() {
  queue = new createjs.LoadQueue(true);
  queue.on("complete", doneHomeScreen, this);
  queue.loadManifest([
    {id:"homescreen", src:"images/screen-start/home-screen.png"},
    {id:"orientation", src:"images/overlay-orientation.png"}
    ]);
}


function doneHomeScreen() {
  var homescreen = $('#photo-booth')[0];
  homescreen.style.backgroundImage = "url(images/screen-start/home-screen.png)";
  loadAssets();
}


function loadAssets() {
  queue = new createjs.LoadQueue(true);
  queue.on("complete", handleComplete, this);
  queue.loadManifest([
    {id:"start-button", src:"images/screen-start/start-button.png"},
    {id:"start-button-hover", src:"images/screen-start/start-button-hover.png"},
    //----------------------
    {id:"photo_1_1_thumb", src:"images/photo-ops/photo-ukip-1-thumb.jpg"},
    {id:"photo_1_2_thumb", src:"images/photo-ops/photo-ukip-2-thumb.jpg"},
    {id:"photo_2_1_thumb", src:"images/photo-ops/photo-tory-1-thumb.jpg"},
    {id:"photo_2_2_thumb", src:"images/photo-ops/photo-tory-2-thumb.jpg"},
    {id:"photo_3_1_thumb", src:"images/photo-ops/photo-green-1-thumb.jpg"},
    {id:"photo_3_2_thumb", src:"images/photo-ops/photo-green-2-thumb.jpg"},
    {id:"photo_4_1_thumb", src:"images/photo-ops/photo-libdem-1-thumb.jpg"},
    {id:"photo_4_2_thumb", src:"images/photo-ops/photo-libdem-2-thumb.jpg"},
    {id:"photo_5_1_thumb", src:"images/photo-ops/photo-labour-1-thumb.jpg"},
    {id:"photo_5_2_thumb", src:"images/photo-ops/photo-labour-2-thumb.jpg"},    
    //----------------------
    {id:"take-text", src:"images/screen-choice/take-text.png"},
    {id:"existing-text", src:"images/screen-choice/existing-text.png"},
    {id:"drag-text", src:"images/screen-canvas/drag-text.png"},
    {id:"eye", src:"images/screen-canvas/eye.png"},
    {id:"rotation", src:"images/screen-canvas/rotation.png"},
    {id:"clockwise", src:"images/screen-canvas/clockwise.png"},
    {id:"anticlockwise", src:"images/screen-canvas/anticlockwise.png"},

    {id:"adjust-text", src:"images/screen-canvas/adjust-text.png"},
    {id:"arrow-down", src:"images/screen-canvas/arrow-down.png"},
    {id:"arrow-left", src:"images/screen-canvas/arrow-left.png"},
    {id:"arrow-right", src:"images/screen-canvas/arrow-right.png"},
    {id:"arrow-up", src:"images/screen-canvas/arrow-up.png"},
    {id:"button-minus", src:"images/screen-canvas/button-minus.png"},
    {id:"button-plus", src:"images/screen-canvas/button-plus.png"},
    {id:"cross", src:"images/screen-canvas/cross.png"},
    {id:"position", src:"images/screen-canvas/position.png"},
    {id:"tick", src:"images/screen-canvas/tick.png"},
    {id:"zoom", src:"images/screen-canvas/zoom.png"},

    //----------------------
    {id:"back", src:"images/screen-share/back.png"},
    {id:"back-button", src:"images/screen-share/back-button.png"},
    {id:"download", src:"images/screen-share/download.png"},
    {id:"facebook", src:"images/screen-share/facebook.png"},
    {id:"post-to-wall", src:"images/screen-share/post-to-wall.png"},
    {id:"restart", src:"images/screen-share/restart.png"},
    {id:"restart-button", src:"images/screen-share/restart-button.png"},
    {id:"share", src:"images/screen-share/share.png"},
    {id:"share-again", src:"images/screen-share/share-again.png"},
    {id:"see-facebook", src:"images/screen-share/see-facebook.png"},
    {id:"see-twitter", src:"images/screen-share/see-twitter.png"},
    {id:"twitter", src:"images/screen-share/twitter.png"}
  ]);
}

function handleComplete() {
  loadOtherAssets();
  applyPhotoOps();
  var startButton = $('#start-button')[0];
  startButton.style.opacity = 1;
}

function loadOtherAssets() {
  queue2 = new createjs.LoadQueue(true);
  queue2.loadManifest([
    {id:"photo_1_1", src:"images/photo-ops/photo-ukip-1.png"},
    {id:"photo_1_2", src:"images/photo-ops/photo-ukip-2.png"},
    {id:"photo_2_1", src:"images/photo-ops/photo-tory-1.png"},
    {id:"photo_2_2", src:"images/photo-ops/photo-tory-2.png"},
    {id:"photo_3_1", src:"images/photo-ops/photo-green-1.png"},
    {id:"photo_3_2", src:"images/photo-ops/photo-green-2.png"},
    {id:"photo_4_1", src:"images/photo-ops/photo-libdem-1.png"},
    {id:"photo_4_2", src:"images/photo-ops/photo-libdem-2.png"},
    {id:"photo_5_1", src:"images/photo-ops/photo-labour-1.png"},
    {id:"photo_5_2", src:"images/photo-ops/photo-labour-2.png"}
  ]);
}

function applyPhotoOps() {
  var photoUkip1 = $('#photoUkip1')[0];
  photoUkip1.style.backgroundImage = "url(images/photo-ops/photo-ukip-1-thumb.jpg)";
  var photoUkip2 = $('#photoUkip2')[0];
  photoUkip2.style.backgroundImage = "url(images/photo-ops/photo-ukip-2-thumb.jpg)";

  var photoTory1 = $('#photoTory1')[0];
  photoTory1.style.backgroundImage = "url(images/photo-ops/photo-tory-1-thumb.jpg)";
  var photoTory2 = $('#photoTory2')[0];
  photoTory2.style.backgroundImage = "url(images/photo-ops/photo-tory-2-thumb.jpg)";

  var photoGreen1 = $('#photoGreen1')[0];
  photoGreen1.style.backgroundImage = "url(images/photo-ops/photo-green-1-thumb.jpg)";
  var photoGreen2 = $('#photoGreen2')[0];
  photoGreen2.style.backgroundImage = "url(images/photo-ops/photo-green-2-thumb.jpg)";

  var photoLibdem1 = $('#photoLibdem1')[0];
  photoLibdem1.style.backgroundImage = "url(images/photo-ops/photo-libdem-1-thumb.jpg)";
  var photoLibdem2 = $('#photoLibdem2')[0];
  photoLibdem2.style.backgroundImage = "url(images/photo-ops/photo-libdem-2-thumb.jpg)";

  var photoLabour1 = $('#photoLabour1')[0];
  photoLabour1.style.backgroundImage = "url(images/photo-ops/photo-labour-1-thumb.jpg)";
  var photoLabour2 = $('#photoLabour2')[0];
  photoLabour2.style.backgroundImage = "url(images/photo-ops/photo-labour-2-thumb.jpg)";
}

//---------------------------------------------------------------------------------------------------

function checkDeviceType() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  isTouchDevice = Modernizr.touch;
}

//---------------------------------------------------------------------------------------------------

function setUpTouchDevice() {
  console.log("SET UP TOUCH DEVICE");
  //loadAssets();
  var buttonTP = $('#takephoto')[0];
  buttonTP.style.visibility = "hidden";
}

//---------------------------------------------------------------------------------------

function handleImage(e) {
  goScreenCanvas();
  var reader = new FileReader();
    reader.onload = function(event){
        importedImage = new Image();

        importedImage.onload = function(){
          fitImage();
          drawImportedImage();
          gotoAdjust();
          //$('#canvas-op')[0].style.visibility = "visible";
        }
        importedImage.src = event.target.result;
    }
    console.log("e.target.files[0]",e.target.files[0]);
    if(e.target.files[0] == undefined) {
      restart();
    } else {
      reader.readAsDataURL(e.target.files[0]);
      fromCamera = false;
    }
    //gotoAdjust();
}

function fitImage() {
  var hRatio = canvas.width  / importedImage.width    ;
  var vRatio =  canvas.height / importedImage.height  ;
  ratio  = Math.min ( hRatio, vRatio );
  centerShift_x = ( canvas.width - importedImage.width*ratio ) / 2;
  centerShift_y = ( canvas.height - importedImage.height*ratio ) / 2;
}

function drawImportedImage() {
  if(!fromCamera) {
    console.log("NOT HERE");
    context.drawImage(importedImage, 0,0, importedImage.width, importedImage.height,
    centerShift_x,centerShift_y,importedImage.width*ratio, importedImage.height*ratio);
  } else {
    console.log("CAME HERE");
    context.drawImage(canvasOffScreen, 0,0, importedImage.width, importedImage.height);
  }
}

function canvasToTransform() {
  contextTransform.clearRect(0,0,632,632);
  contextTransform.drawImage(canvas, 0,0, canvas.width, canvas.height);
}

function transformToCanvas() {
  context.clearRect(0,0,632,632);
  context.drawImage(canvasTransform, 0,0, canvas.width, canvas.height);
}

function resetTransform() {
  //contextTransform.restore();
  contextTransform.setTransform(1, 0, 0, 1, 0, 0);
  //contextTransform.restore();
  contextTransform.clearRect(0, 0, 632, 632);
  //contextTransform.drawImage(canvas, 0,0, canvas.width, canvas.height);
}

function resetCanvas() {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, 632, 632);
}

function resetTransformCanvas() {
  contextTransform.setTransform(1, 0, 0, 1, 0, 0);
  contextTransform.clearRect(0, 0, 632, 632);
}

function resetOpCanvas() {
  contextOp.setTransform(1, 0, 0, 1, 0, 0);
  contextOp.clearRect(0, 0, 632, 632);
}

function resetOffScreenCanvas() {
  contextOffScreen.setTransform(1, 0, 0, 1, 0, 0);
  contextOffScreen.clearRect(0, 0, 632, 632);
}




//---------------------------------------------------------------------------------------

function updateImportCanvas() {
 /* context.clearRect(0, 0, 632, 632);

  var leftEyeLeft = parseInt($("#left-eye").position().left,10);
  var leftEyeTop = parseInt($("#left-eye").position().top,10);

  var rightEyeLeft = parseInt($("#right-eye").position().left,10);
  var rightEyeTop = parseInt($("#right-eye").position().top,10);

  var originX = (rightEyeLeft - leftEyeLeft) / 2;
  var originY = (rightEyeTop - leftEyeTop) / 2

  var angleDeg = Math.atan2(leftEyeTop - rightEyeTop, rightEyeLeft - leftEyeLeft) * 180 / Math.PI;

  console.log("ANGLE:",angleDeg);

  context.translate(canvas.width/2,canvas.width/2);
  context.rotate(angleDeg*Math.PI/180);
  context.translate(-1*canvas.width/2,-1*canvas.width/2);


  console.log("LEFT",leftEyeLeft,leftEyeTop);
  console.log("RIGHT",rightEyeLeft,rightEyeTop);

  var lengthOp = 60;
  var lengthUser = Math.sqrt( ((rightEyeLeft-=leftEyeLeft)*rightEyeLeft + (rightEyeTop-=leftEyeTop)*rightEyeTop)  / scaleInfo.globalScale );

  console.log("lengths",lengthOp,lengthUser);

  var autoScale = lengthOp/lengthUser;

  console.log("autoScale:",autoScale);

  //context.translate(originX-520, originY-160);
  context.scale(autoScale,autoScale);
  //context.translate((originX-520)*-1, (originY-160)*-1);*/

  drawImportedImage();

  canvasToTransform();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, 632, 632);
  transformToCanvas();

  drawOpToCanvas(0);
}

//---------------------------------------------------------------------------------------

function createCanvas(){
	canvas = $('#canvas')[0];
	canvas.width = 632;
  canvas.height = 632;
  context = canvas.getContext("2d");

  canvasOffScreen = $('#canvas-off-screen')[0];
  canvasOffScreen.width = 632;
  canvasOffScreen.height = 632;
  contextOffScreen = canvasOffScreen.getContext("2d");

  canvasTransform = $('#canvas-transform')[0];
  canvasTransform.width = 632;
  canvasTransform.height = 632;
  contextTransform = canvasTransform.getContext("2d");
  contextTransform.save();

}

function createCanvasOp(){
  canvasOp = $('#canvas-op')[0];
  canvasOp.width = 632;
  canvasOp.height = 632;
  contextOp = canvasOp.getContext("2d");
}

function createShareCanvas(){
  shareScreenCanvas = $('#share-canvas')[0];
  shareScreenCanvas.width = 400;
  shareScreenCanvas.height = 400;
  shareScreenContext = shareScreenCanvas.getContext("2d");
}

function updateCameraImage() {
  
  //stage.addChild(webcam);
  if(!isTouchDevice) {
    context.drawImage(webcam, 0, 0, 632, 632);
  } else {

    context.drawImage(takePicture, 0, 0, 632, 632);
  }

  context.drawImage(image,0,0);
  //stage.addChild(image);
 	//stage.update();
}

function freezeImage() {
  context.drawImage(webcam, 0, 0);

  importedImage = new Image();
  importedImage = context.getImageData(0, 0, 632, 632);

  contextOffScreen.drawImage(canvas,0,0,632,632);
  //contextTransform.drawImage(canvas,0,0,632,632);

  photoTaken = true;
  videoStream.stop();
  webcam.style.visibility = "hidden";

  var btnPhoto = $('#take-photo')[0];
  btnPhoto.style.visibility = "hidden";

  
  //fitImage();
  drawImportedImage();
  gotoAdjust();
  //$('#canvas-op')[0].style.visibility = "visible";

  //manageEyeInterface(1);
}

function initWebcam() {
  webcam = $('#webcam')[0];
  webcam.style.visibility = "visible";
   navigator.getUserMedia = (navigator.getUserMedia || 
                             navigator.webkitGetUserMedia || 
                             navigator.mozGetUserMedia || 
                             navigator.msGetUserMedia);
   if (navigator.getUserMedia) {
      navigator.getUserMedia(
         {
            video:true,
            audio:false
         },        
         function(stream) {
            videoStream = stream;
            var url = window.URL || window.webkitURL;
            webcam.src = url ? url.createObjectURL(stream) : stream;
            webcam.play();
            $('#take-photo')[0].style.visibility = "visible";
            //loadAssets();
         },
         function(error) {
            restart();
            alert('There is a problem with your camera');
            return;
         }
      );
   }
   else {
      alert('Sorry, the browser you are using doesn\'t support getUserMedia');
      return;
   }
 }

 function detectBrowser() {
  var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
        ]

    };
    BrowserDetect.init();
    browser = BrowserDetect.browser;
    console.log("BROWSER",BrowserDetect.browser);
 }

//------------------------------------------------------------------------------

import '../app/TealiumProvider';
import '../app/ScaleProvider';
import '../app/ShareController';
