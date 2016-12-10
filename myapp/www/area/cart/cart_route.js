/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * home 路由
 * 注：需要在主路由中注入
 */
angular.module('cart.route', ['cart.controller', 'cart.services'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('tab.cart', {
        url: '/cart',
        views: {
          'tab-cart': {
            templateUrl: 'area/cart/cart.html',
            controller: 'CartCtrl'
          }
        }
      });

  });
