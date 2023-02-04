<template>
  <el-row :gutter="20">
    <el-col :span="4"><h3>后台管理系统</h3></el-col>
    <el-col :span="16">
      <el-button type="primary" :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="setIsCollapse(!isCollapse)"></el-button>
    </el-col>
    <el-col :span="4">头像</el-col>
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
  }
</style>