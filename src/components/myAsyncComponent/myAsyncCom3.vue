<template>
  <div class="myAsyncCom3">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myAsyncCom3',
  data () {
    return {
      msg: 'myAsyncCom3'
    }
  },
  created() {
    console.log("myAsyncCom3");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
