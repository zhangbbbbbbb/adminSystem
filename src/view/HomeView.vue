<template>
  <p>Home{{ a }}</p>
</template>

<script>
  export default {
    data() {
      return {
        a: 1
      }
    },
    beforeMount() {
      this.a = 2
    },
    beforeUpdate() {
      console.log('update')
    }
  }
</script>