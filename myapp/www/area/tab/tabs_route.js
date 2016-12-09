/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * 导航抽象路由模块
 * 
 */
angular.module('tabs.route', ['tabs.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', { //路由名称
        url: '/tab',
        abstract: true, //定义为抽象路由
        templateUrl: 'area/tab/tabs.html', //页面模板
        controller: 'TabsCtrl'
      })


  });
