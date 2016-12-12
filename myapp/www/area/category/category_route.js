/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * home 路由
 * 注：需要在主路由中注入
 */
angular.module('category.route', ['category.controller', 'category.services'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'area/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      });

  });
