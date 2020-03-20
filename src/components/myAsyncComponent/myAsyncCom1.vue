<template>
  <div class="myAsyncCom1">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myAsyncCom1',
  data () {
    return {
      msg: 'myAsyncCom1'
    }
  },
  created() {
    console.log("myAsyncCom1");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
