import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
Vue.config.productionTip = false
Vue.use(Toast)
Vue.prototype.$bus = new Vue()



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')