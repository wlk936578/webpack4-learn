const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js') // 引入配置文件
const complier = webpack(config) // 返回一个编译器，可重新打包代码

const app = express();
app.use(webpackDevMiddleware(complier,{ // 重新运行将会重新编译
    publicPath: config.output.publicPath
}))

app.listen(8082,()=>{
    console.log('server is running')
})