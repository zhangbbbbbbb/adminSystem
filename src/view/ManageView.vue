<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @filter-change="filterChange">
      <el-table-column
        v-if="config.selection"
        type="selection"
        :width="getWidth(config.selection)"
        :min-width="getMinWidth(config.selection)">
      </el-table-column>
      <table-date-column 
        v-if="config.date" 
        v-bind="{prop, label, sortable} = config.date"
        :width="getWidth(config.date)"
        :min-width="getMinWidth(config.date)"></table-date-column>
      <table-column 
        v-for="column in config.columns" 
        :key="`${type}-${column.prop}`" 
        v-bind="{prop, label, sortable, filters} = column"
        :width="getWidth(column)"
        :min-width="getMinWidth(column)"></table-column>
      <table-tags-column 
        v-if="config.tags" 
        v-bind="{prop, label} = config.tags"
        :width="getWidth(config.tags)"
        :min-width="getMinWidth(config.tags)"
        :tags="$store.state.main[`${type}Tags`]"></table-tags-column>
      <table-opera-column
        :width="getWidth(config.opera)"
        :min-width="getMinWidth(config.opera)"
        :opera="config.opera"
        :tableData="tableData"
        :multipleSelection="multipleSelection"></table-opera-column>
    </el-table>
    <div>1</div>
  </div>

</template>

<script>
  import TableColumn from '@/components/TableColumn.vue';
  import TableTagsColumn from '@/components/TableTagsColumn.vue';
  import TableDateColumn from '@/components/TableDateColumn.vue';
  import TableOperaColumn from '@/components/TableOperaColumn.vue';
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        isShowTooltip: false,
        tableData: [],
        multipleSelection: []
      }
    },
    computed: {
      ...mapState('main', {
        mainContentWidth: 'mainContentWidth'
      }),
      jpx() {
        // console.log(this.mainContentWidth)
        if(this.minWidth){
          // 单位可变宽度对应的px = （table宽度-固定宽度之和）/可变宽度之和，el-table的width单位长度对应1px
          // min-width功能，最小宽度
          let jpx = ((this.mainContentWidth - this.width) / this.minWidth) 
          // console.log(this.$refs['multipleTable'].$el.clientWidth)
          // console.log(this.$refs['multipleTable'].padding)
          return jpx > 1 ? jpx : 1
        }
        return 0
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val
        console.log(val)
      },
      filterChange(filters) {
        console.log(filters)
      },
      filterTag(value, row) {
        return row.tags.find(v => v == value);
      },
      getWidth(obj) {
        // console.log(this.jpx) 
        // 使组件模板产生thiss.jpx的依赖
        let minWidth = obj.minWidth*this.jpx
        if(this.customizeWidth) {
          return obj.width || minWidth
        }
        return obj.width
      },
      getMinWidth(obj) {
        // console.log(this.jpx) 
        if(this.customizeWidth) {
          return false
        }
        return obj.minWidth
      }
    },
    props: ['type'],
    components: {
      TableColumn,
      TableTagsColumn,
      TableDateColumn,
      TableOperaColumn
    },
    created() {
      this.config = this.$config.manageView[this.type]
      this.tableData = this.$store.state.main[`${this.type}Data`]
      // console.log(this.width, this.minWidth)

      // 判断是否使用自定义适应性宽度，现在只固定一种配置比例，后续要实现大中小屏不同配置比例，
      // 只需要将width和minWidth加上前缀，判断屏幕大小动态获取对应前缀就好了，
      // 总width和minWidth缓存，根据对应前缀判断是否已经计算过，没计算过的加入缓存
      if(this.$config.manageView.customizeWidth){
        // 设置使用自定义适应性宽度，并且进行缓存才启动自定义适应性宽度
        this.customizeWidth = true
        this.width = 0
        this.minWidth = 0
        // 遍历每一项配置
        Object.keys(this.config).forEach(key => {
          if(key == 'columns') {
            this.config.columns.forEach(v => {
              v.width ? (this.width += v.width) : (v.minWidth && (this.minWidth += v.minWidth))
            })
          }else{
            this.config[key].width ? this.width += this.config[key].width : (this.minWidth += this.config[key].minWidth || 0)
          }
        })
      }
    },
    mounted() {
      // console.log(document.defaultView)
      
    },
    updated() {
      // console.log('updated')
    },
    destroyed() {
      // console.log('destroyed')
      
    },
    activated() {
      // console.log('activated')
      
    }
  }
</script>