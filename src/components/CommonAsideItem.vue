<template>
  <el-submenu v-if="menu.children" :index="menu.name">
    <template v-slot:title>
      <i :class="`el-icon-${menu.icon}`"></i>
      <span slot="title">{{menu.label}}</span>
    </template>
    <common-aside-item v-for="(item, index) in menu.children" :key="`${index}`" :menu="item"></common-aside-item>
  </el-submenu>
  <el-menu-item v-else :index="menu.path">
    <i :class="`el-icon-${menu.icon}`"></i>
    <span slot="title">{{menu.label}}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'CommonAsideItem',
    props: ['menu']
  }
</script>