<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.menuId + ''">
    <template slot="title">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <MenuTree v-for="item in menu.children" :key="item.menuId" :menu="item"></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="menu.menuId + ''" @click="handleRoute(menu)">
    <i :class="menu.icon"></i>
    <span slot="title">{{menu.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuTree',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleRoute (menu) {
      // 通过菜单URL跳转至指定路由
      this.$router.push('/')
      this.$router.push(menu.url)
    }
  }
}
</script>
