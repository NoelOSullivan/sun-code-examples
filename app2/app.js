var app = angular.module("sunnation", ["ngFacebook", "preload", "ngAnimate", "ngStorage"]);
  
import TealiumProvider from '../app/TealiumProvider';
import ScaleProvider from '../app/ScaleProvider';
import ToolbarController from '../app/ToolbarController';
import ShareController from '../app/ShareController';

import MainController from './MainController';
import ProgressController from './ProgressController';
import GameScreenService from './GameScreenService';

import init from './init';

app.config(init);

app.controller("MainController", MainController);
app.controller("ToolbarController", ToolbarController);
app.controller("ShareController", ShareController);
app.controller("ProgressController", ProgressController);
app.factory("GameScreenService", GameScreenService);

app.filter("percent", function(){

  return function(value) {
    return Math.floor(value * 100);
  }

});

app.filter("zeropad", function(){

  return function(value,zerocount) {
    value = value.toString();
    while (value.length < zerocount) {
      value = '0'+value;
    }
    return value;
  }

});


export default app;