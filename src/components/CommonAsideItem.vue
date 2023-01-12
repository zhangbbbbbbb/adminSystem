<template>
  <el-submenu v-if="menu.children" :index="`${index}`">
    <template v-slot:title>
      <i :class="`el-icon-${menu.icon}`"></i>
      <span slot="title">{{menu.label}}</span>
    </template>
    <common-aside-item v-for="(menu, idx) in menu.children" :key="`${index}-${idx}`" :menu="menu" :index="`${index}-${idx}`"></common-aside-item>
  </el-submenu>
  <el-menu-item v-else :index="`${index}`">
    <i :class="`el-icon-${menu.icon}`"></i>
    <span slot="title">{{menu.label}}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'CommonAsideItem',
    props: ['menu', 'index']
  }
</script>