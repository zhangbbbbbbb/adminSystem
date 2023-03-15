<template>
  <el-table-column
    align="right"
    :width="width"
    :min-width="minWidth">
    <template v-slot:header>
      <el-input
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
            @click="handleDelete(scope.$index, scope.row)">{{operaItem.text}}</el-button>
          <el-checkbox-group
            v-else-if="operaItem.type == 'checkboxGroup'"
            :key="`checkboxGroup${index}`"
            v-model="scope.row[operaItem.prop]">
            <el-checkbox
              v-for="checkListItem in operaItem.checkList"
              :key="checkListItem.text"
              :label="checkListItem.text"
              @change="handleCheckboxChange($event, [checkListItem.text, ...(checkListItem.connect || [])], scope.row[operaItem.prop])"></el-checkbox>
          </el-checkbox-group>
        </template>
      </div>
    </template>
  </el-table-column>
</template>

<script>
  import {putListInTargetsOnly, getListOutTargetsAll} from '@/api/tool'
  // opera是操作列配置，tableData是用户数据
  export default {
    props: ['prop', 'label', 'width', 'minWidth', 'opera', 'tableData', 'multipleSelection'],
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
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleCheckboxChange(res, texts, list) {
        // console.log(res, texts, list)        
        if(Array.isArray(texts)){
          let lists = this.multipleSelection.map(obj => {
            return obj.status
          })
          lists.includes(list) || lists.push(list)
          // console.log(lists)
          // console.log(putListInTargetsOnly, getListOutTargetsAll)
          if(res){
            lists.forEach(v => {
              putListInTargetsOnly(texts, v)
            })
          }else{
            // console.log(getListOutTargetsAll('lo'.split(''), 'hello'.split('')))
            lists.forEach(v => {
              getListOutTargetsAll(texts, v)
            })
          }
        }
        // console.log(this.$store.state.main)
      }
    },
    created() {
      // this.putListInTargetsOnly = putListInTargetsOnly
      // console.log(this.putListInTargetsOnly)
      // console.log(this.putListInTargetsOnly(['禁言', '拉黑'], ['拉黑']))
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
</style>