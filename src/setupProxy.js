const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/eric-api', {  //`api`是需要转发的请求 
      target: 'http://localhost:3009',  // 这里是接口服务器地址
      changeOrigin: true,
    })
  )
}