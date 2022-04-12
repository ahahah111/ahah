// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


let proxyObj={}

proxyObj['/']={
  //websocket
  ws:false,
  target:'http://120.78.167.231',
  //发送请求时 host会被设置成target
  changeOrigin:true,
  //不重写请求地址
  pathRewrite:{
    '^/':'/'
  }
}


//跨域
module.exports={
devServer:{
  host:'localhost',
  port:8080,
  proxy: proxyObj//代理接口
}
}




