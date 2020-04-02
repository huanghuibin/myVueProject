import Vue from 'vue'
import Vuex from 'vuex'

import AppStore from './modules/appStore'
import Menu from './modules/Menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: AppStore,
    menu: Menu
  }
})
export default store
