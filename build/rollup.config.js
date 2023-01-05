// 基本 rollup.js编译配置
const path = require("path");

// const buble = require("@rollup/plugin-buble");

const { babel } = require("@rollup/plugin-babel");

// 删除指定目录
const del = require("rollup-plugin-delete");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env"],
};

module.exports = [
  {
    input: resolveFile("src/index.js"),
    output: {
      file: resolveFile("dist/index.js"),
      format: "umd", // iife,
      // sourcemap: true, // 生成开发调试的sourceMap文件 会生成源码文件 ./dist/index.js.map 和 ./dist/lib.js.map
    },
    // plugin: [buble()],
    plugins: [babel(babelOptions)],
  },
  {
    input: resolveFile("src/lib/index.js"),
    output: {
      file: resolveFile("dist/lib.js"),
      format: "cjs",
    },
    plugins: [babel(babelOptions)],
  },
];
