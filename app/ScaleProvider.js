import viewport from '../engine/viewport';

var app = angular.module("sunnation");
app.provider("Scale", function(){

  var scaleInfo = {
    globalScale: 1,
    orientationWarning: false
  }
  var rescale = function(){
          // Figure out the best aspect ratio to use to fit in the viewport
      var view = viewport();
      // Prevent a div-by-zero
      if (view[0] === 0 || view[1] === 0) return;

      // Best-case for somewhere between 4:3 and 16:9
      var hscale = view[0]/1280;
      var theight = 960 * hscale;
      var crop = (theight - view[1]) / 2;
      var left = 0;
      if (crop < 0) {
        // Portrait aspects - display a message and crop the sides
        crop = 0;
        scaleInfo.orientationWarning = true;
        hscale = view[1]/960;
        left = (view[0] - hscale*1280) / 2;
      }
      else {
        scaleInfo.orientationWarning = false;
      }
      // Wider than widescreen - limit at 16:9 and center up
      if (crop > (120*hscale)) {
        hscale = view[1]/720; 
        crop = (120*hscale);
        left = (view[0] - hscale*1280) / 2;
      }
      scaleInfo.globalScale = hscale;

      var overlay = $("#view-overlay, #game-container > canvas");
      var container = $("#game-container");
      overlay.css("transform", "scale(" + hscale + ")");
      overlay.css("transform-origin", "0 0");
      container.css("height", 960 * hscale + "px")
      if (crop > 0) {
        container.css("top", "-" + crop + "px");
      }
      else {
        container.css("top", "0");
      }
      container.css("left", left + "px");

      window.scrollTo(0,1);
  }
  scaleInfo.rescale = rescale;
  
  this.initialize = function(width,height) {
    rescale();
    $(window).resize(rescale);
  }

  this.$get = function() {
    return scaleInfo;
  }

});
