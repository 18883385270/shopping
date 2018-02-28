import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

import animate from './utils/animate.css'

import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(animate)

//引入vue2 filter
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

//安装自定义filter
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

//引入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'



const FastClick = require('fastclick')
FastClick.attach(document.body)

sync(store, router)



// Load Vue instance
new Vue({
  router,
  store,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件,且子组件能通过 this.$store 访问到
  el: '#app',
  render: h => h(App),
  mounted() {
    Cordova.initialize();
  }
})
