import Vue from 'vue'
import Vuex from 'vuex'

import AppStore from './modules/appStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: AppStore
  }
})
export default store
