<template>
  <el-menu :default-active="$route.path == '/' ? defaultPage.path : $route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <common-aside-item v-for="(menu, index) in menuList" :key="index" :menu="menu"></common-aside-item>
  </el-menu>
</template>

<script>
  import CommonAsideItem from './CommonAsideItem.vue'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      ...mapState('menu', {
        defaultPage: 'defaultPage',
        menuList: 'menuList'
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
</style>