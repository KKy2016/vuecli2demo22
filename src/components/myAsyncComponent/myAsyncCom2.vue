<template>
  <div class="myAsyncCom2">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myAsyncCom2',
  data () {
    return {
      msg: 'myAsyncCom2'
    }
  },
  created() {
    console.log("myAsyncCom2");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
