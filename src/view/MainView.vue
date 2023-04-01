<template>
	<el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-main ref="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default{
  components: {
    CommonAside,
    CommonHeader
  },
  methods: {
    getMainContentWidth() {
      const mainDom = this.$refs['main'].$el
      let mainDomPadding = 0
      if(window.getComputedStyle) {
        mainDomPadding = parseInt(window.getComputedStyle(mainDom, null).padding)
      }else if(mainDom.currentStyle) {
        mainDomPadding = parseInt(mainDom.currentStyle.padding)
      }
      this.$store.commit('main/setMainContentWidth', mainDom.clientWidth - mainDomPadding*2)
      // console.log(this.$store.state.main.mainContentWidth)
    }
  },
  mounted() {
    this.getMainContentWidth()
    window.addEventListener("resize",this.getMainContentWidth)
  }
}
</script>

<style lang="less">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }
  
  #app > .el-container {
/*    margin-bottom: 40px;*/
    height: 100vh;
    min-width: 600px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>