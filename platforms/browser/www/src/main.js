import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

import Vuex from 'vuex'
Vue.use(Vuex)

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
    Cordova.initialize()
  }
})
