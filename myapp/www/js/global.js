/// <reference path="../../../../ts/typings/globals/angular/index.d.ts" />

/**
 * 全局变量
 * 使用时只需要注入 GlobalVariable 到相应模块
 * GlobalVariable.VERSION 即可使用。
 */

angular.module('global', [])
  //constant 中定义的属性为常量
  .constant('GlobalVariable',{
    SERVER_PATH: '127.0.0.1',
    VERSION: '1.1.1'
  });



