<template>
  <div class="myBetterScrollDemo3">
    <!-- 
      2.设计 父子容器,父元素高度一定要小于子元素高度
     -->
     <br />
     <strong>
       水平位置:{{x}}<br />
       竖直位置:{{y}}
     </strong>
    <div class="box1" ref="box1">
      <ul class="box2" ref="box2">
        <li v-for="n in 20" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//1引入better-scroll
import BScroll from 'better-scroll'// cnpm i better-scroll --save-dev
export default {
  name: 'myBetterScrollDemo3',
  data () {
    return {
      x:0,
      y:0
    }
  },
  mounted() {
    this.initBS();//初始化better-scroll
    this.stopWheel();
  },
  methods: {
    //具体初始化
    initBS(){
      let box1=this.$refs.box1;//获取滚动元素(父元素)
      let scrollBox1 = new BScroll(box1,{
        scrollY:true,
        click:true,
        probeType:3//派发scroll事件的时机(0,1,2,3)
      });

      scrollBox1.on("scroll",pos=>{
        //console.log("x:",pos.x,"y:",pos.y);
        this.x=pos.x;
        this.y=pos.y;
      })
    },
    stopWheel(){
      let box1=this.$refs.box1;
      box1.onmousewheel=function(){
        return false;
      }
    },
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
