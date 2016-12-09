/// <reference path="../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * 入口模块
 */

angular.module('starter', ['ionic', 'route', 'global', 'config'])

.run(function ($ionicPlatform ) {
  $ionicPlatform.ready(function () {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



