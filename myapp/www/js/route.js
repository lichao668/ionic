/// <reference path="../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * 路由模块
 */
angular.module('route', ['tabs.route', 'home.route'])
  .config(function ($urlRouterProvider) {
    //如果上面匹配不成功则回退到指定页面。
    $urlRouterProvider.otherwise('/tab/home');

  });
