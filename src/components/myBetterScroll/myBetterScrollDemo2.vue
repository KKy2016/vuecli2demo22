<template>
  <div class="myBetterScrollDemo1">
    <div>
      x==>{{x}}<br />
      y==>{{y}}
    </div>
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <div v-for="n in 10" :key="n">{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'// cnpm i better-scroll --save-dev
export default {
  name: 'myBetterScrollDemo1',
  data () {
    return {
      x:0,
      y:0
    }
  },
  mounted() {
    this.initBS();
    this.stopWheel();
  },
  methods: {
    initBS(){
      let box1=this.$refs.box1;
      let scroll = new BScroll(box1,{
        scrollX:true,
        click:true,
        probeType:3
      });
      scroll.on("scroll",pos=>{
        this.x = pos.x;
        this.y = pos.y;
      })
    },
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
  overflow: scroll;
  background-color: blue;
}

.box2 {
  width: 700px;
}

.box2 div{
  height: 50px;
  width: 50px;
  margin: 5px;
  display: inline-block;
  background-color: red;
}
</style>
