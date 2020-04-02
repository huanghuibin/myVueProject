export default {
  state: {
    appName: 'la ji', // 应用名称
    collapse: false // 导航栏收缩状态
  },
  getters: {
    collapse (state) {
      // eslint-disable-next-line no-undef
      return collapse
    }
  },
  mutations: {
    collapse (state) { // 改变收缩状态
      state.collapse = !state.collapse
    }
  },
  actions: {

  }
}
