rollup 模块是 rollup.js 编译的核心模块

@rollup/plugin-buble 模块是 rollup 的 ES6 编译插件功能和 babel 类似，是简化版的 babel 由于是简化版，编译速度比 babel 快一些
对于更加复杂的 ES6+(包括 ES7,ES8)等语法，就需要@rollup/plugin-babel 插件结合 babel 原生编译插件去处理

@rollup/plugin-babel 模块是 rollup.js 支持 babel 官方编译插件模块
@babel/core 是官方 babel 编译核心模块
@babel/preset-env 是官方 babel 编译解析 ES6+ 语言的扩展模块



步骤4: 编译结果
在项目目录下执行开发模式 npm run dev
在项目目录下执行生产模式 npm run build
编译结果在目录 ./dist/ 下
编译结果分成
ES5代码文件 ./dist/index.js
生产模式 ES5代码的生成会被uglify混淆压缩
开发模式 会生成源码的sourceMap 文件 ./dist/index.js.map
插件服务启动了3001 端口


```
## 安装 rollup.js 基础模块
npm i --save-dev rollup 


## 安装 rollup.js 编译ES6+的 babel 模块
npm i --save-dev @rollup/plugin-babel @babel/core @babel/preset-env


## 安装 rollup.js 编译本地开发服务插件
npm i --save-dev rollup-plugin-serve

## 安装 rollup.js 编译代码混淆插件
npm i --save-dev rollup-plugin-uglify

## 安装 rollup-plugin-delete 删除指定目录
npm i --save-dev rollup-plugin-delete
```

一般项目中的js文件都有IIFE, AMD, CommonJS，UMD，四种模块化格式，具体的解释如下

* IIFE Imdiately Invoked Function Expression 立即执行函数
* AMD Asynchronous Module Definition 异步模块规范
* CommonJS CommonJS规范，是Node.js的官方模块化规范
* UMD， Universal Module Definition 通用模块规范

## AMD

AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，
都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

AMD规范的模块化：用require.config()指定引用路径等，用define()定义模块，用require()加载模块。

首先我们需要引入require.js文件和一个入口文件main.js。main.js中配置require.config()并规定项目中

```
/** 网页中引入require.js及main.js **/
 <script data-main="main" src="https://cdn.bootcss.com/require.js/2.3.5/require.js"></script>

/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
    'lib/hello': 'dist/lib/hello',
    'lib/world': 'dist/lib/world',
  }
});

// 定义math.js模块
define(function (require) {
  var demo = require('dist/index');
  demo.init()
});


// 引用模块，将模块放在[]内
require(['jquery', 'math'],function($, math){
  var sum = math.add(10,20);
  $("#sum").html(sum);
});
```


## CommonJS
CommonJS 规范，是JavaScript 模块化的规范，目的是为了解决 JavaScript 的作用域和模块化的问题。

主要内容是，模块必须通过 module.exports或exports 导出模块对外的变量或接口，

通过require 来导入其他模块的输出到当前模块作用域中。

因为目前Node.js还没完全支持和兼容ES6+的import/exports模块化规范

所以CommonJS目前是Node.js最安全通用的模块化方案。

如果用ES6+的import/exports模块化规范开发Node.js代码，就需要编译成Node.js目前完全支持的CommonJS模块。