<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :sortable="sortable"
    :filters="filters"
    :filter-method="filter"
    filter-placement="bottom-end"
    :width="width"
    :min-width="minWidth"
    show-overflow-tooltip>
  </el-table-column>
</template>

<script>
  export default {
    props: ['prop', 'label', 'sortable', 'filters', 'width', 'minWidth'],
    methods: {
      filter(value, row) {
        return row[this.prop] == value;
      }
    }
  }
</script>