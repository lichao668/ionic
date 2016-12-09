/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * home 路由
 * 注：需要在主路由中注入
 */
angular.module('home.route', ['home.controller', 'home.services'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'area/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      });

  });
