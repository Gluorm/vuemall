import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(Toast)
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)

//element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Select,Input,
  Switch } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Switch)




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')