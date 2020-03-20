<template>
  <div class="myCom">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myCom',
  data () {
    return {
      msg: '我是一个复杂的结构'
    }
  },
  created() {
    console.log('我是一个复杂的结构')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
