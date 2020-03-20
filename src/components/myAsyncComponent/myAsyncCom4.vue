<template>
  <div class="myAsyncCom4">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myAsyncCom4',
  data () {
    return {
      msg: 'myAsyncCom4'
    }
  },
  created() {
    console.log("myAsyncCom4");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
