<template>
  <div class="container" :class="$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'">
    <!-- 导航收缩 -->
    <span class="hamburger-container">
      <Hamburger :toggleClick="collapse" :isActive="$store.state.app.collapse"></Hamburger>
    </span>
    <!-- 导航菜单 -->
    <span class="nav-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#545c64"
               text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="selectNavBar()">
        <el-menu-item index="1" @click="$router.push('/')">{{$t("common.home")}}</el-menu-item>
        <el-menu-item index="2">{{$t("common.doc")}}</el-menu-item>
        <el-menu-item index="3">{{$t("common.msgCenter")}}</el-menu-item>
      </el-menu>
    </span>
    <span class="tool-bar">
      <!-- 语言切换 -->
      <LangSelector class="lang-selector"></LangSelector>
      <!-- 用户信息 -->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link"><img :src="this.userAvatar" /> {{username}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{$t("common.myMsg")}}</el-dropdown-item>
          <el-dropdown-item>{{$t("common.config")}}</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">{{$t("common.logout")}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>// eslint-disable-next-line no-unused-vars
import mock from '@/mock/index.js'
import LangSelector from '@/components/LangSelector'
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Hamburger,
    LangSelector
  },
  data () {
    return {
      isCollapse: false,
      username: 'Louis',
      userAvatar: '',
      activeIndex: '1'
    }
  },
  methods: {
    selectNavBar (key, keyPath) {
      console.log(key, keyPath)
    },
    // 折叠导航栏
    collapse: function () {
      // this.isCollapse = !this.isCollapse
      this.$store.commit('collapse')
    },
    // 退出登录
    logout: function () {
      // eslint-disable-next-line no-unused-vars
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem('user')
          this.$router.push('/login')
        })
        .catch(() => {})
    }
  },
  mounted () {
    this.sysName = 'I like Kitty'
    var user = sessionStorage.getItem('user')
    if (user) {
      this.userName = user
      this.userAvatar = require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    position: absolute;
    left: 200px;
    right: 0px;
    height: 60px;
    line-height: 60px;
    background: #545c64;
    .hamburger-container {
      width: 40px;
      float: left;
      /*cursor: pointer;*/
      /*border-color: rgba(111, 123, 131, 0.8);*/
      border-color: rgba(80, 124, 133, 0.747);
      border-left-width: 1px;
      border-left-style: solid;
      border-right-width: 1px;
      border-right-style: solid;
      /*color: white;*/
      /*background: #504e6180;*/
      background: #545c64;
    }
    .nav-bar {
      margin-left: auto;
      float: left;
      .el-menu {
        background: #504e6180;
      }
    }
    .tool-bar {
      float: right;
      .theme-picker {
        padding-right: 10px;
      }
      .lang-selector {
        padding-right: 10px;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
      }
      .user-info-dropdown {
        font-size: 20px;
        padding-right: 20px;
        color: #fff;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
  }
  .menu-bar-width {
    left: 200px;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
</style>
