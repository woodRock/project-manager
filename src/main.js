import Vue from 'vue'
import App from './App.vue'
import { NavbarPlugin } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Router from '@/router/index'

Vue.use(VueRouter)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(NavbarPlugin)

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
