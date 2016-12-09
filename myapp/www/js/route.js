/// <reference path="../../../../ts/typings/globals/angular/index.d.ts" />
/**
 * 路由模块
 */
angular.module('route', ['home.route' ,'starter.controllers', 'starter.services'])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', { //路由名称
    url: '/tab',
    abstract: true, //定义为抽象路由
    templateUrl: 'templates/tabs.html' //页面模板
  })

  .state('tab.dash', {
    url: '/dash',
    views: { 
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl' //页面控制器
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  //如果上面匹配不成功则回退到指定页面。
  $urlRouterProvider.otherwise('/tab/home');

});
