import Toast from './Toast'
const obj = {}

obj.install = function(Vue) {
    const toastContrustor = Vue.extend(Toast) //创建组件构造器
    const toast = new toastContrustor() //创建组件对象
    toast.$mount(document.createElement('div')) //挂载在div上
    document.body.appendChild(toast.$el) //放到body里
    Vue.prototype.$toast = toast;
}


export default obj