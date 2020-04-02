// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import i18n from './i18n'
import store from './store'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(api)
// eslint-disable-next-line no-undef
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
