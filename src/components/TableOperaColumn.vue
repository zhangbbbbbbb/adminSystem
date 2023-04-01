<template>
  <el-table-column
    ref="colunn"
    align="right"
    :width="width"
    :min-width="minWidth">
    <template v-slot:header>
      <el-input
        ref="search"
        v-if="opera.search"
        v-model="search"
        size="mini"
        :placeholder="opera.search.placeholder"/>
    </template>
    <template slot-scope="scope">
      <div class="opera-content">
        <template v-for="operaItem,index in opera.content">
          <el-button
            v-if="operaItem.type == 'button'"
            :key="`button${index}`"
            size="mini"
            type="danger"
            v-throttle
            @click="handleDelete(scope.$index, scope.row)">{{operaItem.text}}</el-button>
          <el-checkbox-group
            v-else-if="operaItem.type == 'checkboxGroup'"
            :key="`checkboxGroup${index}`"
            v-model="scope.row[operaItem.prop]">
            <el-checkbox
              v-for="checkListItem in operaItem.checkList"
              :key="checkListItem.text"
              :label="checkListItem.text"></el-checkbox>
          </el-checkbox-group>
          <el-select 
            v-else-if="operaItem.type == 'select'" 
            collapse-tags
            v-model="scope.row[operaItem.prop]" 
            multiple placeholder="请选择" 
            :key="`select${index}`">
            <el-option
              v-for="item in operaItem.checkList"
              :key="item.text"
              :label="item.text"
              :value="item.text">
            </el-option>
          </el-select>
        </template>
      </div>
    </template>
  </el-table-column>
</template>

<script>
  // opera是操作列配置，tableData是用户数据
  export default {
    props: ['prop', 'label', 'width', 'minWidth', 'opera', 'multipleSelection'],
    data() {
      return {
        search: ''
      }
    },
    watch: {
      search() {
        console.log(this.search)
      }
    },
    methods: {
      searchInput() {
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleCheckboxChange(res, text, list, connect, disabled, opera) {
        // console.log(res, text, list, connect, disabled, opera)        
        
        let lists = this.multipleSelection.map(obj => {
          return obj[opera.prop]
        })
        lists.includes(list) || lists.push(list)
        // console.log(lists)

        if(res){
          // console.log(lists)
          lists.forEach(list => {
            list[0].includes(text) || list[0].push(text)
            if(connect) {
              connect.forEach(v => {
                this.conectCheck(v, list, opera.checkList)
                list[1].includes(v) || list[1].push(v)
              })
            }
            if(disabled) {
              disabled.forEach(v => {
                list[1].includes(v) || list[1].push(v)
              })
            }
          })
        }else{
          // console.log(lists)
          lists.forEach(list => {
            let index = list[0].indexOf(text)
            index != -1 && list[0].splice(index, 1)
            if(connect) {
              connect.forEach(v => {
                this.conectUnckeck(v, list, opera.checkList)
                this.conectAbled(v, list, opera.checkList)
              })
            }
            if(disabled) {
              disabled.forEach(v => {
                this.conectAbled(v, list, opera.checkList)
              })
            }
          })
        }
        
        // console.log(this.$store.state.main)
      },
      handleSelectChange(e, id, list, opera, row) {
        console.log(e, id, list, opera, row)
        this.handleSelectChange[opera.prop] || (this.handleSelectChange[opera.prop] = {})
        
        let text = e[e.length-1]
        let {connect, disabled} = this.getTextObj(text, opera.checkList)
        this.handleCheckboxChange(true, text, list, connect, disabled, opera)
      },
      handleRmvSelectTag(e) {
        console.log(e)
      },
      conectCheck(text, list, checkList){
        // 设为禁选，避免取消
        if(!list[0].includes(text)) {
          list[0].push(text)
          // 获取必选和禁选
          let {connect, disabled} = this.getTextObj(text, checkList)
          if(connect) {
            connect.forEach(v => {
              this.conectCheck(v, list, checkList)
            })
          }
          if(disabled) {
            disabled.forEach(v => {
              list[1].includes(v) || list[1].push(v)
            })
          }
        }
      },
      conectUnckeck(text, list, checkList){
        // 获取该元素位置
        let index = list[0].indexOf(text)
        // index != -1 && list.splice(index, 1)
        if(index != -1) {
          // 在选中列表查找connect包含text的元素，存在这样的元素则不需进行处理
          let includeText = list[0].find(v => {
            //获取list中每个元素的对应配置对象，用于判断其connect是否包含text
            let connect = this.getTextObj(v, checkList).connect
            if(connect) {
              return connect.includes(text)
            }else{
              return false
            }
          })

          if(includeText == undefined ) {
            list[0].splice(index, 1)
            let connect = this.getTextObj(text, checkList).connect
            if(connect) {
              connect.forEach(v => {
                this.conectUnckeck(v, list, checkList)
              })
            }
          }
        }
      },
      conectAbled(text, list, checkList) {
        // 获取该元素位置
        let index = list[1].indexOf(text)
        // index != -1 && list.splice(index, 1)
        if(index != -1) {
          // 在选中列表查找connect包含text的元素，存在这样的元素则不需进行处理
          let includeText = list[0].find(v => {
            //获取list中每个元素的对应配置对象，用于判断其connect是否包含text
            let {connect,disabled} = this.getTextObj(v, checkList)
            if(connect) {
              return connect.includes(text)
            }else if(disabled) {
              return disabled.includes(text)
            }else{
              return false
            }
          })

          if(includeText == undefined ) {
            list[1].splice(index, 1)
          }
        }
      },
      getTextObj(text, checkList){
        // 在一个对象数组中找到对象中属性text为指定值的对象
        return checkList.find(obj => {
          return obj.text == text
        })
      }
    },
    directives: {
      throttle: {
        bind: (el, binding) => {
          let throttleTime = binding.value; // 防抖时间
          if (!throttleTime) { // 用户若不设置防抖时间，则默认2s
            throttleTime = 2000;
          }
          let cbFun;
          el.addEventListener('click', event => {
            if (!cbFun) { // 第一次执行
              cbFun = setTimeout(() => {
                cbFun = null;
              }, throttleTime);
            } else {
              event && event.stopImmediatePropagation();
            }
          }, true);
        },
      }
    },
    created() {
      // this.putListInTargetsOnly = putListInTargetsOnly
      // console.log(this.putListInTargetsOnly)
      // console.log(this.putListInTargetsOnly(['禁言', '拉黑'], ['拉黑']))
      // this.$nextTick(()=>{console.log('created')})
    },
    mounted() {
      // console.log('mounted')
    }
  }
</script>

<style lang="less" scoped>
  .opera-content{
    display: flex;
    justify-content: flex-end;
  }
  .opera-content>*:nth-child(n){
    margin-left: 50px;
  }

  .opera-content>*:first-child{
    margin-left: 0px;
  }

  .el-checkbox-group{
    white-space: nowrap;
    // overflow: scroll;
  }
</style>