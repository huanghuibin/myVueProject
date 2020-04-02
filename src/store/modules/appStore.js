export default {
  state: {
    appName: 'la ji', // 应用名称
    collapse: false, // 导航栏收缩状态,
    menuRouteLoaded: false // 菜单和路由是否加载
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
    },
    menuRouteLoaded (state, menuRouteLoaded) {
      state.menuRouteLoaded = menuRouteLoaded
    }
  },
  actions: {

  }
}
