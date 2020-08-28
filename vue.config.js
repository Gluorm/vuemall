module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer:  {
      proxy: {
           '/api': {
            target: 'http://127.0.0.1:80',
            changeOrigin: true,
            pathRewrite: {
             '^/api': '/'
            }
           }
          // '/api/v1/**':{
          //     target:'https://cnodejs.org',//你接口的域名
          //     secure:false,
          //     changeOrigin:true,
          // }
      },
      // '/api/v1/**'也可以
  }
}