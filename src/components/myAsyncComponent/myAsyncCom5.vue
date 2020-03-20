<template>
  <div class="myAsyncCom5">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myAsyncCom5',
  data () {
    return {
      msg: 'myAsyncCom5'
    }
  },
  created() {
    console.log("myAsyncCom5");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
