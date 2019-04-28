const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.config')

module.exports = {
  mode: "development", // 模式 development | production
  entry: "./src/index.js", // 需要打包的文件
  output: {
    filename: "bundle.js", //打包后的 js 文件
    path: path.resolve(__dirname, "dist") // 打包后的文件夹
  },
  module: {
    // 模块配置项
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(gif|png|jpg)$/, // 正则
        use: {
          // loader: 'file-loader', // 适用于图片或文件较大的情况
          loader: "url-loader",
          // url-loader 使用的是base64转换后直接放到打包后的文件，
          // 若文件较小，可使用limit，效果等同于file-loader
          options: {
            name: "[name].[ext]", // file-loader 相关配置
            // [name] 资源的基本名称
            // [ext] 资源扩展名
            outputPath: "images/", // 打包后的目录
            limit: 2048
            // 限制图片大小，大于该值将会直接打包到对应文件夹下,
            // 否则会直接打包到bundle.js中
          }
        }
      },
      {
        test: /\.scss$/, // ps: loader执行顺序为 从右到左，从下到上
        use: [
          {
            loader: "style-loader" // 将打包后的样式表挂载到页面上
          },
          {
            loader: "css-loader", // 分析多个 css 样式表的关系，最终合并成一段css
            options: {
              importLoaders: 2, // 通过@import 引入的也要执行下面的loader
              modules: true // 开启 css 模块化打包(非全局引用，属于局部样式) 多用于解耦
            }
          },
          {
            loader: "postcss-loader"
            // 自动添加各厂商兼容的 css 样式,需要先建一个postcss.config.js
            // 需在 sass-loader 之后调用
          },
          {
            loader: "sass-loader" // 编译 sass 样式 转为 普通 css
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/, // 校检字体
        use: {
          loader: "file-loader" // 可以打包图片和字体文件
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
