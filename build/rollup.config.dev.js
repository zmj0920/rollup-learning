// 开发模式配置

const path = require("path");
// 本地开发的HTTP服务
const serve = require("rollup-plugin-serve");
const config = require("./rollup.config");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};
const PORT = 3001;

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    serve({
      port: PORT,
      contentBase: [resolveFile("example"), resolveFile("dist")],
    }),
  ],
];

module.exports = config;
