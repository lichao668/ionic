/// <reference path="../../../../../ts/typings/globals/angular/index.d.ts" />
angular.module('home.controller', [])

.controller('HomeCtrl', function ($scope) {
  getHeaderSlideData();

  // 监听视图完全加载之后的事件
  $scope.$on('$ionicView.afterEnter', function (e) {
    initHeaderSlide();
  });


  // 头部滚动条数据
  function getHeaderSlideData() {
    $scope.headerSlideData = [{
      alt: "双十一预热主场会",
      src: "img/home/home-headerSlide-1.jpg"
    }, {
      alt: "11月11天家电低价不停歇",
      src: "img/home/home-headerSlide-2.jpg"
    }, {
      alt: "家具盛典 好货提前抢",
      src: "img/home/home-headerSlide-3.jpg"
    }, {
      alt: "IT抢券节",
      src: "img/home/home-headerSlide-4.jpg"
    }, {
      alt: "潮流数码 双11爽购攻略",
      src: "img/home/home-headerSlide-5.jpg"
    }];
  }



  // 初始化头部滚动条(轮播图)
  function initHeaderSlide() {
    var headerSwiper = new Swiper('#headerSlider', {
      slidesPerView: 1,
      paginationClickable: true,
      centeredSlides: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 改变自动更新
      observer: true,
      observeParents: true


      //paginationClickable: true,
      //autoplay: 2000,
      //autoplayDisableOnInteraction: false,
      //loop: true,
      //// 如果需要分页器
      //pagination: '.swiper-pagination',
      //// 改变自动更新
      //observer:true,
      //observeParents:true
    });

   
  }





})
