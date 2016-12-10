/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * home 路由
 * 注：需要在主路由中注入
 */
angular.module('account.route', ['account.controller', 'account.services'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'area/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      });

  });
