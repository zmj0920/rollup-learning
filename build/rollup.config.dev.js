// 开发模式配置

const path = require("path");
// 本地开发的HTTP服务
const serve = require("rollup-plugin-serve");
// const config = require("./rollup.config");
// 多文件编译
const configList = require("./rollup.config");
const PORT = 3001;
// 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};
// const devSite = `http://127.0.0.1:${PORT}`;
// const devPath = path.join("example", "index.html");
// const devUrl = `${devSite}/${devPath}`;

// setTimeout(() => {
//   console.log(`[dev]: ${devUrl}`);
// }, 1000);

configList.map((config, index) => {
  config.output.sourcemap = true;
  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('')],
        }),
      ],
    ];
  }

  return config;
});

module.exports = configList;
