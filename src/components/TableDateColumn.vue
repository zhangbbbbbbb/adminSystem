<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :sortable="sortable"
    :width="width"
    :min-width="minWidth">
  </el-table-column>
</template>

<script>
  export default {
    props: ['prop', 'label', 'sortable', 'filters', 'width', 'minWidth']
  }
</script>