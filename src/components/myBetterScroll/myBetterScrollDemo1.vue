<template>
  <div class="myBetterScrollDemo1">
    <!-- 
      2.设计 父子容器,父元素高度一定要小于子元素高度
     -->
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
  name: 'myBetterScrollDemo1',
  data () {
    return {
      
    }
  },
  mounted() {
    this.initBS();//4.初始化better-scroll
    this.stopWheel();
  },
  methods: {
    //5.具体初始化
    initBS(){
      let box1=this.$refs.box1;//获取滚动元素(父元素)
      let scroll = new BScroll(box1,{
        scrollY:true,
        click:true,
      });
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
/*
3.父元素高度一定要小于子元素高度
*/
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
