<template>
  <el-menu :default-active="$route.path == '/' ? $config.defaultPage.path : $route.path" router class="el-menu-vertical-demo" :collapse="isCollapse">
    <common-aside-item v-for="(menu, index) in menuList" :key="index" :menu="menu"></common-aside-item>
  </el-menu>
</template>

<script>
  import CommonAsideItem from './CommonAsideItem.vue'
  import { mapState, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapState('menu', {
        isCollapse: 'isCollapse'
      }),
      ...mapGetters('menu', {
        menuList: 'menuList'
      })
    },
    components: {
      CommonAsideItem
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
</style>