<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'">
      <img :src="this.logo" /> <div>{{collapse?'':appName}}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'" :collapse="collapse" @open="handleopen" @close="handleclose" @select="handleselect" >
<!--      <el-submenu index="1">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">{{$t("sys.sysMng")}}</span>-->
<!--        </template>-->
<!--        <el-menu-item index="1-1" @click="$router.push('user')">{{$t("sys.userMng")}}</el-menu-item>-->
<!--        <el-menu-item index="1-2" @click="$router.push('dept')">{{$t("sys.deptMng")}}</el-menu-item>-->
<!--        <el-menu-item index="1-3" @click="$router.push('role')">{{$t("sys.roleMng")}}</el-menu-item>-->
<!--        <el-menu-item index="1-4" @click="$router.push('menu')">{{$t("sys.menuMng")}}</el-menu-item>-->
<!--        <el-menu-item index="1-5" @click="$router.push('log')">{{$t("sys.logMng")}}</el-menu-item>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">{{$t("sys.sysMonitor")}}</span>-->
<!--        </template>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3" disabled>-->
<!--        <i class="el-icon-document"></i>-->
<!--        <span slot="title">{{$t("sys.nav3")}}</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="4">-->
<!--        <i class="el-icon-setting"></i>-->
<!--        <span slot="title">{{$t("sys.nv4")}}</span>-->
<!--      </el-menu-item>-->
      <menuTree v-for="item in menuTree" :key="item.menuId" :menu="item"></menuTree>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import menuTree from '@/components/MenuTree'
export default {
  data () {
    return {
      isCollapse: false,
      sysName: '',
      logo: ''
    }
  },
  components: {
    menuTree
  },
  computed: {
    ...mapState({
      // 如果一个文件内引用过多，嫌引用路劲又长又臭，可以使用 mapState、mapGetter、mapActions 工具进行简化。
      // 如 MenuBar.vue 中引用较多，我们用 mapState 简化对属性的引用。如下图，给状态赋予别名
      appName: state => state.app.appName,
      collapse: state => state.app.collapse,
      menuTree: state => state.menu.menuTree
    })
  },
  methods: {
    handleopen () {
      console.log('handleopen')
    },
    handleclose () {
      console.log('handleclose')
    },
    handleselect (a, b) {
      console.log('handleselect')
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-bar-container {
    .el-menu {
      position:absolute;
      top: 60px;
      bottom: 0px;
      text-align: left;
    }
    .logo {
      position:absolute;
      top: 0px;
      height: 60px;
      line-height: 60px;
      background: #4b5f6e;
      img {
        width: 40px;
        height: 40px;
        border-radius: 0px;
        margin: 10px 10px 10px 10px;
        float: left;
      }
      div {
        font-size: 22px;
        color: white;
        text-align: left;
      }
    }
  }
  .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
</style>
