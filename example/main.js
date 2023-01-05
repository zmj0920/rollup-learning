requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/', 
  paths: {
    'lib/hello': 'dist/lib/hello',
    'lib/world': 'dist/lib/world',
  }
});

// 定义math.js模块
define(function (require) {
  var demo = require('dist/index');
  demo.init()
});
