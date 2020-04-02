import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Intro from '@/views/Intro'
// import Menu from '@/views/Sys/Menu'
// import User from '@/views/Sys/User'
// import Role from '@/views/Sys/Role'
import { isURL } from '@/utils/validate'
import api from '@/http/api'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {path: '', component: Intro, name: '系统介绍'}
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 登陆界面成功之后会把用户信息存储到会话，
  // 存在时间会会话周期，页面关闭即会失效
  let user = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 判断如何是登陆界面，如果信息用户存在，那么证明登陆过，直接跳转首页
    if (user) {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    // 如果是其他页面，user信息不存在，那么就证明是未登录，跳转到未登陆
    if (!user) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      next({ path: '/login'})
    } else {
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes()
      next()
    }
  }
})
/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes () {
  if (store.state.app.menuRouteLoaded) {
    console.log('动态菜单和路由已经存在')
    return
  }
  api.menu.findMenuTree()
    .then((res) => {
      store.commit('setMenuTree', res.data)
      // 添加动态路由
      let dynamicRoutes = addDynamicRoutes(res.data)
      router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
      router.addRoutes(router.options.routes)
      // 保存加载状态
      store.commit('menuRouteLoaded', true)
    })
    .catch(function (res) {
      alert(res)
    })
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes (menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      // 创建路由配置
      var route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          menuId: menuList[i].menuId,
          title: menuList[i].name,
          isDynamic: true,
          isTab: true,
          iframeUrl: ''
        }
      }
      // url以http[s]://开头, 通过iframe展示
      if (isURL(menuList[i].url)) {
        route['path'] = menuList[i].url
        route['name'] = menuList[i].name
        route['meta']['iframeUrl'] = menuList[i].url
      } else {
        try {
          // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
          // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
          let array = menuList[i].url.split('/')
          let url = array[0].substring(0, 1).toUpperCase() + array[0].substring(1) + '/' + array[1].substring(0, 1).toUpperCase() + array[1].substring(1)
          route['component'] = resolve => require([`@/views/${url}`], resolve)
        } catch (e) {}
      }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
    console.log(routes)
  }
  return routes
}
export default router
