<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :filters="tags"
    :filter-method="filter"
    filter-placement="bottom-end"
    :column-key="prop"
    :width="width"
    :min-width="minWidth">
    <template slot-scope="scope">
      <el-tooltip placement="top" :disabled="!isShowToolTip[`tagsRow${scope.row.id}`]">
        <div slot="content">{{scope.row[prop].map(v => tagsObj[v].text).join(',')}}</div>
        <div 
          :ref="`tagsRow${scope.row.id}`" 
          class="ellipsis" 
          @mouseover="showToolTip(`tagsRow${scope.row.id}`)" 
          @click="$emit('click')">
          <el-tag
            disable-transitions
            v-for="tag in scope.row[prop]"
            :key="tag"
            :color="tagsObj[tag].color"
            :style="`color:${tagsObj[tag].font}`"
            class="tag">{{tagsObj[tag].text}}</el-tag>
        </div>
      </el-tooltip>
    </template>
  </el-table-column>
</template>

<script>
  export default {
    props: ['prop', 'label', 'width', 'minWidth', 'tags'],
    emits: ['click'],
    data() {
      return {
        isShowToolTip: {}
      }
    },
    computed: {
      tagsObj() {
        let obj = {}
        this.tags.forEach(v => {
          obj[v.value] = v
        })
        // console.log(obj)
        return obj
      }
    },
    methods: {
      filter(value, row) {
        return row[this.prop].find(v => v == value);
      },
      showToolTip(ref){
        // console.dir(this.$refs[ref].offsetWidth)
        // console.dir(this.isShowToolTip[ref])
        if(this.isShowToolTip[ref] == undefined){
          let range = document.createRange()
          range.selectNodeContents(this.$refs[ref])
          // console.dir(range.getBoundingClientRect().width)
          if(range.getBoundingClientRect().width > this.$refs[ref].offsetWidth) {
            // 给对象添加新属性时需要使用this.$set使新属性具备响应式
            this.$set(this.isShowToolTip, ref, true)
          }else{
            this.$set(this.isShowToolTip, ref, false)
          }
        }
      }
    },
    created() {
      // console.log(this.allowChange)
    }
  }
</script>

<style scoped>
  .ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag{
    margin-right: 5px;
  }
</style>