<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    :default-sort="{prop: 'date', order: 'descending'}">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          disable-transitions
          v-for="tag in scope.row.tags"
          :key="tag"
          :type="tag === '家' ? 'primary' : 'success'">{{tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapState('main', {
        tableData: state => {
          return state.fansData
        }
      })
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      filterTag(value, row) {
        return row.tags.find(v => v == value);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    props: ['type']
  }
</script>