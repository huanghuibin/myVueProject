<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <MenuBar></MenuBar>
    <!-- 头部区域 -->
    <HeadBar></HeadBar>
    <!-- 主内容区域 -->
    <Main></Main>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import mock from '@/mock/index.js'
import HeadBar from './HeadBar/HeadBar'
import Main from './Main/Main'
import MenuBar from './MenuBar/MenuBar'
export default {
  components: {
    HeadBar,
    Main,
    MenuBar
  }
}
</script>
<style scoped lang="scss">
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #4b5f6e;
  }
</style>
