// 基本 rollup.js编译配置
const path = require("path");

// const buble = require("@rollup/plugin-buble");

const { babel } = require("@rollup/plugin-babel");

// 删除指定目录
const del = require("rollup-plugin-delete");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

module.exports = {
  input: resolveFile("src/index.js"),
  output: {
    file: resolveFile("dist/index.js"),
    format: "umd", // iife,
    sourcemap: true, // 生成开发调试的sourceMap文件
  },
  // plugin: [buble()],
  plugins: [
    del({ targets: "dist/*" }),
    babel({
      presets: ["@babel/preset-env"],
    }),
  ],
};
