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