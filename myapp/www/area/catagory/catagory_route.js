/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * home 路由
 * 注：需要在主路由中注入
 */
angular.module('catagory.route', ['catagory.controller', 'catagory.services'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('tab.catagory', {
        url: '/catagory',
        views: {
          'tab-catagory': {
            templateUrl: 'area/catagory/catagory.html',
            controller: 'CatagoryCtrl'
          }
        }
      });

  });
