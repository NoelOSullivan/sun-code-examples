var app = angular.module('sunnation',["preload"]);

window.scrollTo(0,1);

//app.config(function ($facebookProvider, TealiumProvider, ScaleProvider) {
app.config(function (TealiumProvider) {
    TealiumProvider.gameName("egg heads");
})

//---------------------------------------------------------------------------------------------------

var queue;
var seeFacebook = false;
var seeTwitter = false;
var goTo = "";

app.controller("MainController", function($scope, Tealium) {

    Tealium.gameIntroScreen();
    //checkDeviceType();

    var scaleWindow = function () {
        var $window = $(window),
            width = $window.width(),
            height = $window.height(),
            currentWidth = 960,
            currentHeight = 1280,
            scale,
            widthScale = width / currentWidth,
            heightScale = height / currentHeight;

        var newWidth = currentWidth * heightScale;
        var translate = 0;
        translate = (width - newWidth)/2;
        $('#game-container').css('transform', 'translateX('+translate+'px) scale(' + heightScale + ')');
    };

    $(window).resize(function(evt) {
        scaleWindow();
    });

    $scope.changeLeader = function(myLeader) {
      changeLeader(myLeader)
    }

    $scope.shareToFB = function() {
      if(seeFacebook == false) {
        Tealium.gameShareStart("facebook");
        goTo = "facebook";
        openText();
      } else {
        seeFacebook = false;
        $('#see-facebook')[0].style.visibility = "hidden";
        window.open("http://www.facebook.com");
      }
    }

    $scope.shareToTwitter = function() {
      if(seeTwitter == false) {
        Tealium.gameShareStart("twitter");
        goTo = "twitter";
        openText();
      } else {
        seeTwitter = false;
        $('#see-twitter')[0].style.visibility = "hidden";
        window.open("http://www.twitter.com");
      }
    }

    $scope.closeText = function() {
      closeText();
    }

    $scope.post = function() {
      switch (goTo) {
        case "facebook":
          shareToFB();
          break;
        case "twitter":
          shareToTwitter();
          break;
      }
      closeText();
    }

    scaleWindow();
    loadAssets();
    initOffScreen();

});

function openText() {
  $('#text-box').val("");
    if(goTo == "twitter") {
      var stringLeader;
      switch(leader) {
          case 1:
            stringLeader = "Miliband";
            break;
          case 2:
            stringLeader = "Cameron";
            break;
          case 3:
            stringLeader = "Clegg";
            break;
          case 4:
            stringLeader = "Farage";
            break;
          case 5:
            stringLeader = "Bennett";
            break;
          case 6:
            stringLeader = "Sturgeon";
            break;
        }
      var myTimes;
      if(eggCount == 1) {
        myTimes = "time";
      } else {
        myTimes = "times";
      }
      var message = "I egged " + stringLeader + " " + eggCount + " " + myTimes + " at @SunNation: sunnation.co.uk/egg-heads/ #sunnation";
      $('#text-box').val(message);
    }

    $('#ui-hide')[0].style.visibility = "visible";
    $('#text-box')[0].style.visibility = "visible";
    $('#post')[0].style.visibility = "visible";
}

function closeText() {
    $('#ui-hide')[0].style.visibility = "hidden";
    $('#text-box')[0].style.visibility = "hidden";
    $('#post')[0].style.visibility = "hidden";
}

function shareToFB() {
    seeFacebook = true;
    $('#see-facebook')[0].style.visibility = "visible";
    prepareForShare();
    window.sharing.shareToFacebook();
}

function shareToTwitter() {
  seeTwitter = true;
  $('#see-twitter')[0].style.visibility = "visible";
  prepareForShare();
  window.sharing.shareToTwitter();
}

function loadAssets() {
  queue = new createjs.LoadQueue(false);
  queue.on("complete", handleComplete, this);
  queue.on("progress", handleProgress);
  queue.loadManifest([
    {id:"homescreen", src:"images/sun-nation-logo.png"},
    {id:"egg-splat", src:"images/egg-splat-1.png"},
    {id:"ui-count", src:"images/ui-count.png"},
    {id:"ui-choose", src:"images/ui-choose.png"},
    {id:"link", src:"images/link.png"},
    {id:"rosette-green-1", src:"images/rosette-green-1.png"},
    {id:"rosette-green-2", src:"images/rosette-green-2.png"},
    {id:"rosette-labour-1", src:"images/rosette-labour-1.png"},
    {id:"rosette-labour-2", src:"images/rosette-labour-2.png"},
    {id:"rosette-libdem-1", src:"images/rosette-libdem-1.png"},
    {id:"rosette-libdem-2", src:"images/rosette-libdem-2.png"},
    {id:"rosette-snp-1", src:"images/rosette-snp-1.png"},
    {id:"rosette-snp-2", src:"images/rosette-snp-2.png"},
    {id:"rosette-tory-1", src:"images/rosette-tory-1.png"},
    {id:"rosette-tory-2", src:"images/rosette-tory-2.png"},
    {id:"rosette-ukip-1", src:"images/rosette-ukip-1.png"},
    {id:"rosette-ukip-2", src:"images/rosette-ukip-2.png"},
    //-----------------------------------------------------------------
    {id:"throw", src:"audio/throw.wav"},
    {id:"splat", src:"audio/splat.wav"},
    //-----------------------------------------------------------------
    {id:"bg-bennett", src:"images/bennett/bg-bennett.jpg"},
    {id:"body-bennett", src:"images/bennett/body-bennett.png"},
    {id:"eyes-bennett", src:"images/bennett/eyes-bennett.png"},
    {id:"head-1-bennett", src:"images/bennett/head-1-bennett.png"},
    {id:"head-2-bennett", src:"images/bennett/head-2-bennett.png"},
    {id:"mask-bennett", src:"images/bennett/mask-bennett.png"},
    //-----------------------------------------------------------------
    {id:"bg-cameron", src:"images/cameron/bg-cameron.jpg"},
    {id:"body-cameron", src:"images/cameron/body-cameron.png"},
    {id:"eyes-cameron", src:"images/cameron/eyes-cameron.png"},
    {id:"head-1-cameron", src:"images/cameron/head-1-cameron.png"},
    {id:"head-2-cameron", src:"images/cameron/head-2-cameron.png"},
    {id:"mask-cameron", src:"images/cameron/mask-cameron.png"},
    //-----------------------------------------------------------------
    {id:"bg-clegg", src:"images/clegg/bg-clegg.jpg"},
    {id:"body-clegg", src:"images/clegg/body-clegg.png"},
    {id:"eyes-clegg", src:"images/clegg/eyes-clegg.png"},
    {id:"head-1-clegg", src:"images/clegg/head-1-clegg.png"},
    {id:"head-2-clegg", src:"images/clegg/head-2-clegg.png"},
    {id:"mask-clegg", src:"images/clegg/mask-clegg.png"},
    //-----------------------------------------------------------------
    {id:"bg-farage", src:"images/farage/bg-farage.jpg"},
    {id:"body-farage", src:"images/farage/body-farage.png"},
    {id:"eyes-farage", src:"images/farage/eyes-farage.png"},
    {id:"head-1-farage", src:"images/farage/head-1-farage.png"},
    {id:"head-2-farage", src:"images/farage/head-2-farage.png"},
    {id:"mask-farage", src:"images/farage/mask-farage.png"},
    //-----------------------------------------------------------------
    {id:"bg-miliband", src:"images/miliband/bg-miliband.jpg"},
    {id:"body-miliband", src:"images/miliband/body-miliband.png"},
    {id:"eyes-miliband", src:"images/miliband/eyes-miliband.png"},
    {id:"head-1-miliband", src:"images/miliband/head-1-miliband.png"},
    {id:"head-2-miliband", src:"images/miliband/head-2-miliband.png"},
    {id:"mask-miliband", src:"images/miliband/mask-miliband.png"},
    //-----------------------------------------------------------------
    {id:"bg-sturgeon", src:"images/sturgeon/bg-sturgeon.jpg"},
    {id:"body-sturgeon", src:"images/sturgeon/body-sturgeon.png"},
    {id:"eyes-sturgeon", src:"images/sturgeon/eyes-sturgeon.png"},
    {id:"head-1-sturgeon", src:"images/sturgeon/head-1-sturgeon.png"},
    {id:"head-2-sturgeon", src:"images/sturgeon/head-2-sturgeon.png"},
    {id:"mask-sturgeon", src:"images/sturgeon/mask-sturgeon.png"}
  ]);
}

function handleProgress() {
  $('#progress-text').text(Math.round(queue.progress*100) + "%");
}

function handleComplete() {
  $('#preloader')[0].style.visibility = "hidden";
  hasardInit();
  initTiming();

  createjs.Sound.alternateExtensions = ["ogg"];
  createjs.Sound.registerSound("audio/throw.wav", "throw");
  createjs.Sound.registerSound("audio/splat.wav", "splat");
}

//---------------------------------------------------------------------------------

var leader;
var leaderArray = ["miliband","cameron","clegg","farage","bennett","sturgeon"];
var eggCount;

function hasardInit() {
  leader=Math.floor(Math.random()*5) + 1;
  createCanvas();
  initCanvas();
  initStartScreen();
  initRosettes();
  selectedRosette();
  eggCount = 0;
}

function changeLeader(myLeader) {
    console.log("changeLeader");
    leader = myLeader;
    initCanvas();
    initRosettes();
    selectedRosette();
    eggCount = 0;
}

//---------------------------------------------------------------------------------

function initStartScreen() {
    //$('#start-screen')[0].style.visibility = "visible";
    $('#ui-choose')[0].style.visibility = "visible";
    $('#ui-change')[0].style.visibility = "visible";
    $('#rosette-miliband-1')[0].style.visibility = "visible";
    $('#rosette-miliband-2')[0].style.visibility = "visible";
    $('#rosette-cameron-1')[0].style.visibility = "visible";
    $('#rosette-cameron-2')[0].style.visibility = "visible";
    $('#rosette-clegg-1')[0].style.visibility = "visible";
    $('#rosette-clegg-2')[0].style.visibility = "visible";
    $('#rosette-farage-1')[0].style.visibility = "visible";
    $('#rosette-farage-2')[0].style.visibility = "visible";
    $('#rosette-bennett-1')[0].style.visibility = "visible";
    $('#rosette-bennett-2')[0].style.visibility = "visible";
    $('#rosette-sturgeon-1')[0].style.visibility = "visible";
    $('#rosette-sturgeon-2')[0].style.visibility = "visible";
}

function manageRosettes() {
    initRosettes();
    selectedRosette();
}

function initRosettes() {
    for(var i=0;i<leaderArray.length;i++) {
        $("#rosette-" + leaderArray[i] + "-1")[0].style.visibility = "visible";
        $("#rosette-" + leaderArray[i] + "-2")[0].style.opacity = "0";
    }
}

function selectedRosette() {
    $('#rosette-' + leaderArray[leader-1] + '-1')[0].style.visibility = "hidden";
    $('#rosette-' + leaderArray[leader-1] + '-2')[0].style.opacity = "1";
}

//---------------------------------------------------------------------------------

var stage,canvas,context,canvasOffScreen,contextOffScreen;
var background,logo,body,eyes,head1,head2;
var clickSurface,eggs,eggSplats,mask;

function createCanvas() {
  canvas = $('#canvas-game')[0];
  canvas.width = 960;
  canvas.height = 1280;
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver();
  $('#canvas-game')[0].style.visibility = "visible";
  createjs.Touch.enable(stage);
}

function initOffScreen() {
  canvasOffScreen = $('#canvas-off-screen')[0];
  canvasOffScreen.width = 480;
  canvasOffScreen.height = 640;
  contextOffScreen = canvasOffScreen.getContext("2d");
}

function prepareForShare() {
  eyes.x = centreEye;
  contextOffScreen.drawImage(canvas, 0, 0, 480, 640);
  var link = new Image;
  link.src = ("images/link.png");
  contextOffScreen.drawImage(link,0, 580);
}

function initCanvas(){
  initBackground();
  initLogo();
  initBody();
  initEyes();
  initHead1();
  initClickSurface();
  initHead2();
  initEggSplatContainer();
  initEggContainer();
}

var bodyArray = [[277,712],[232,706],[232,706],[258,706],[284,712],[270,712]];
var head1Array = [[237,106],[261,110],[250,100],[244,113],[226,100],[231,120]];
var head2Array = [[237,106],[261,110],[250,100],[244,113],[226,100],[231,120]];
var eyesArray = [[340,380],[335,382],[355,397],[304,392],[332,368],[286,383]];
var clickArray = [[232,100],[230,105],[230,100],[230,100],[225,100],[230,120]];

function initBackground() {
  background = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/bg-" + leaderArray[leader-1] + ".jpg");
  background.addChild(bitmap);
  stage.addChild(background);
  stage.update();
}

function initLogo() {
  logo = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/sun-nation-logo.png");
  logo.addChild(bitmap);
  logo.x = 260;
  logo.y = 40;
  stage.addChild(logo);
  stage.update();
}

function initBody() {
  body = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/body-" + leaderArray[leader-1] + ".png");
  body.addChild(bitmap);
  body.x = bodyArray[leader-1][0];
  body.y = bodyArray[leader-1][1];
  stage.addChild(body);
  stage.update();
}

var centreEye,minEyeX,maxEyeX;
var maxXRange = 20;

function initEyes() {
  eyes = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/eyes-" + leaderArray[leader-1] + ".png");
  eyes.addChild(bitmap);
  eyes.x = eyesArray[leader-1][0];
  eyes.y = eyesArray[leader-1][1];
  centreEye = eyes.x;
  minEyeX = eyes.x - maxXRange;
  maxEyeX = eyes.x + maxXRange;
  stage.addChild(eyes);
  stage.update();
}

function initHead1() {
  head1 = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/head-1-" + leaderArray[leader-1] + ".png");
  head1.addChild(bitmap);
  head1.x = head1Array[leader-1][0];
  head1.y = head1Array[leader-1][1];
  stage.addChild(head1);
  stage.update();
}

function initHead2() {
  head2 = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/head-2-" + leaderArray[leader-1] + ".png");
  head2.addChild(bitmap);
  head2.x = head2Array[leader-1][0];
  head2.y = head2Array[leader-1][1];
  head2.visible = false;
  stage.addChild(head2);
  stage.update();
}

//---------------------------------------------------------------------------------

function initClickSurface() {
  clickSurface = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/" + leaderArray[leader-1] + "/mask-" + leaderArray[leader-1] + ".png");
  clickSurface.addChild(bitmap);
  clickSurface.x = clickArray[leader-1][0];
  clickSurface.y = clickArray[leader-1][1];
  clickSurface.alpha = 0.01;
  stage.addChild(clickSurface);
  stage.update();
  clickSurface.cursor = "pointer";
  clickSurface.on("click", function(evt) {
    createjs.Sound.play("throw");
    $('#ui-choose')[0].style.visibility = "hidden";
    $('#ui-share-rect')[0].style.visibility = "visible";
    $('#ui-share-now')[0].style.visibility = "visible";
    $('#facebook-share')[0].style.visibility = "visible";
    $('#twitter-share')[0].style.visibility = "visible";
    $('#ui-share-now')[0].style.visibility = "visible";
    initEgg(evt.stageX,evt.stageY);
    head1.visible = true;
    head2.visible = false;
    handleEyes();

    seeFacebook = false;
    $('#see-facebook')[0].style.visibility = "hidden";
    seeTwitter = false;
    $('#see-twitter')[0].style.visibility = "hidden";
  });
}

function initEggContainer() {
  eggs = new createjs.Container();
  eggs.width = 960;
  eggs.height = 1280;
  stage.addChild(eggs);
}

function initEggSplatContainer() {
  eggSplats = new createjs.Container();
  eggSplats.width = 960;
  eggSplats.height = 1280;
  stage.addChild(eggSplats);
}

function initTiming () {
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", loop);
  createjs.Ticker.setFPS(24);
}

function loop (event) {
  handleEyes();
  stage.update(event);
}

function handleEyes() {
  var percentX = Math.floor(stage.mouseX/960*100);
  if(percentX!==0) {
    eyes.x = minEyeX + ((maxEyeX-minEyeX)/100*percentX);
  }
}

function initEgg(clickX,clickY) {
  var egg = new Egg(clickX,clickY);
  eggs.addChild(egg.container);
  egg.animate(animationFinished);
}

function animationFinished() {
  this.visible = 0;
  initEggSplat(this.x,this.y);
}

function initEggSplat(splatX,splatY) {
  eggCount = eggCount + 1;
  createjs.Sound.play("splat");
  var eggSplat = new createjs.Container();
  var bitmap = new createjs.Bitmap("images/egg-splat-1.png");
  eggSplat.regX = 103;
  eggSplat.regY = 98;
  eggSplat.rotation = Math.floor(Math.random()*360) + 1;
  eggSplat.addChild(bitmap);
  eggSplat.x = splatX;
  eggSplat.y = splatY;
  eggSplats.addChild(eggSplat);
  head1.visible = false;
  head2.visible = true;
  stage.update();
}

import '../app/TealiumProvider';