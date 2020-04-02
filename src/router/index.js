import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Intro from '@/views/Intro'
import Menu from '@/views/SysMng/Menu'
import User from '@/views/SysMng/User'
import Role from '@/views/SysMng/Role'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {path: '/', component: Intro, name: '系统介绍'},
        {path: '/user', component: User, name: '用户管理'},
        {path: '/Menu', component: Menu, name: '菜单管理'},
        {path: '/role', component: Role, name: '角色管理'}
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
      next()
    }
  }
})
export default router
