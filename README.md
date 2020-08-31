# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 笔记
### 1.搭建tabbar组件 配置基本路由  完成页面基本框架

### 2. 首页 完成数据请求与数据展示
  1.滚动功能使用better-scroll完成 这里需要处理许多bug （让图片加载完再重新计算高度），这里另外封装一个防抖函数
  2.轮播图封装
  3.上拉加载更多  通过触发better-scroll 上拉触底监听函数 请求新数据
  4.回到顶部组件封装
### 3.详情页  完成数据请求与数据展示
  1. 详情页进入购物车功能 封装一个弹出框功能Toast组件，封装成插件，在全局可以直接使用

    const toastContrustor = Vue.extend(Toast) //创建组件构造器
    const toast = new toastContrustor() //创建组件对象
    toast.$mount(document.createElement('div')) //挂载在div上
    document.body.appendChild(toast.$el) //放到body里
    Vue.prototype.$toast = toast;

### 4.分类页展示
  1.封装GridView框架 可用来方便设置展示n列数据，及边距布局的设置

### 5.个人页
  1.登陆注册
    1.mysql+php，封装mysql+php 登陆注册与服务器接口
    2.把请求到的token 放到vuex 和localStorage 判断其是否登录
  2.退出
    把请求到的token清除
    

### 6.跨域问题绝决
 ```
 proxy: {
           '/api': {
            target: '（ip）',
            changeOrigin: true,
            pathRewrite: {
             '^/api': '/'
            }
```
            
### 7.fastclick 解决移动端300ms延迟问题

安装->导入->
    FastClick.attach(document.body)

### 8.postcss-px-to-viewport 自动转px为vw 使其可以自动适应宽高

安装
```
  "postcss-px-to-viewport": {
            viewportWidth: 375, //视口的宽度，对应的时设计稿的宽度/2，一般为750
            viewportHeight: 667, //视口的高度，对应的是设计稿的高度（也可以不配置）
            unitPrecision: 5, //指定‘px’转换为视口单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', //指定需要转换成的视口单位，建议使用vw
            selectorBlankList: ['ignore', 'tab-bar'], //指定不需要转换的类
            minPixelValue: 1, //小于或等于‘1px’不转换为视口单位
            mediaQuery: false, //允许在媒体查询中转换为‘px’
            exclude: [/Tabbar/] //不需要转化的组件文件名正则，必须是正则表达式
        }
```
 ### 9.图片懒加载插件 vue-lazyload
 安装->导入->use-> '''<img :v-lazy="">'''
 
 ### 10.服务器部署
  宝塔面板部署 LNMP 环境
