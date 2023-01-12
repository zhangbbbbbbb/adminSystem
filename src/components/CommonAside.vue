<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <common-aside-item v-for="(menu, index) in menuList" :key="index" :menu="menu" :index="index"></common-aside-item>
  </el-menu>
</template>

<script>
  import CommonAsideItem from './CommonAsideItem.vue'
  export default {
    data() {
      return {
        isCollapse: true,
        menuList: [
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon:'s-home',
            url: 'Home/Home'
          },
          {
            path: '/mall',
            name: 'mall',
            label: '商品管理',
            icon:'s-goods',
            url: 'MallManage/MallManage'
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon:'user',
            url: 'UserManage/userManage'
          },
          {
            label: '其他',
            icon: 'more',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon:'setting',
                url: 'other/Pageone'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon:'setting',
                url: 'other/Pageotwo'
              }
            ]
          }
        ]
      };
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