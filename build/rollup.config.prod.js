// 生产模式配置
// 生产模式 就是项目正式上线的模式，前端代码生产模式主要有以下几点要素：
// 保证代码混淆，编译结果不可读 体积压缩 信息脱敏
// 因此，rollup.js 的在生产模式下编译后的代码要有以下几点要求：

// npm run build 启动执行 生产模式
// npm run dev 启动执行 开发模式

// 编译代码混淆插件
const { uglify } = require("rollup-plugin-uglify");
const config = require("./rollup.config");

config.output.sourcemap = false; // 关闭 sourceMap
// 代码 uglify
config.plugins = [...config.plugins, ...[uglify()]];
