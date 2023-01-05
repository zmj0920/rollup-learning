// 基本 rollup.js编译配置
const path = require("path");

// const buble = require("@rollup/plugin-buble");

const { babel } = require("@rollup/plugin-babel");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env"],
};

const plugins = [babel(babelOptions)];

module.exports = [
  {
    input: resolveFile("src/index.js"),
    output: {
      file: resolveFile("dist/index.js"),
      format: "amd", // iife, umd,amd
      // sourcemap: true, // 生成开发调试的sourceMap文件 会生成源码文件 ./dist/index.js.map 和 ./dist/lib.js.map
    },
    // plugin: [buble()],
    external: ["lib/hello", "lib/world"],  // 表示哪些模块是外部引用, 即使开启了 resolve 这里面的模块仍然是外部引用
    plugins,
  },
  {
    input: resolveFile("src/lib/hello.js"),
    output: {
      file: resolveFile("dist/lib/hello.js"),
      format: "amd",
      amd: {
        id: "lib/hello",
      },
    },
    plugins,
  },
  {
    input: resolveFile("src/lib/world.js"),
    output: {
      file: resolveFile("dist/lib/world.js"),
      format: "amd",
      amd: {
        id: "lib/world",
      },
    },
    plugins,
  },
];
