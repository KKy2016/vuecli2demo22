<template>
  <div class="myBetterScrollDemo0">
    <div class="box1" ref="box1">
      <ul class="box2" ref="box2">
        <li v-for="n in 10" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myBetterScrollDemo0',
  data () {
    return {
      
    }
  },
  mounted() {
    this.stopWheel();
  },
  methods: {
    stopWheel(){
      let box1=this.$refs.box1;
      box1.onmousewheel=function(){
        return false;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1{
  height: 300px;
  overflow: scroll;
  background-color: blue;
}

.box2 li{
  height: 50px;
  margin: 5px;
  background-color: red;
}
</style>
