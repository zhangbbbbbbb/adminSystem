<template>
  <el-row :gutter="20">
    <el-col :span="4" :lg="3" :xl="2"><h3>后台管理系统</h3></el-col>
    <el-col :span="16" :lg="18" :xl="20">
      <el-button type="primary" :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="setIsCollapse(!isCollapse)"></el-button>
      <el-breadcrumb separator-class="el-icon-caret-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="4" :lg="3" :xl="2">头像</el-col>
  </el-row>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapState('menu', {
        isCollapse: 'isCollapse'
      })
    },
    methods: {
      ...mapMutations('menu', ['setIsCollapse'])
    }
  }
</script>

<style lang="less" scoped>
  .el-row {
    text-align: left;

    .el-col:last-child {
      text-align: right;
    }

    .el-breadcrumb {
      display: inline-block;
      margin-left: 20px;
    }
  }
</style>