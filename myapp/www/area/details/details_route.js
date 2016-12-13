// 首页面
angular.module('details.route', ['details.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('details', {
        url: '/details/:productId',
        templateUrl: 'area/details/details.html',
        controller: 'DetailsCtrl'
      })

  });
