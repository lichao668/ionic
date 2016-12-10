/// <reference path="../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * 路由模块
 */
angular.module('route', ['tabs.route', 'home.route','catagory.route','cart.route','account.route'])
  .config(function ($urlRouterProvider) {

    //如果已经定义的路由匹配不成功则回退到指定页面。
    $urlRouterProvider.otherwise('/tab/home');
  });
