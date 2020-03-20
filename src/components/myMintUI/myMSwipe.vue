<template>
  <div class="myMSwipe">
    <div>
      <strong>Swipe</strong>
    </div>
    <div class="box1">
      <mt-swipe :auto="5000" :speed="5000" :defaultIndex="2">
        <mt-swipe-item v-for="(item,i) in colorArr" :key="i" :style="{backgroundColor:colorArr[i]}">
          {{i}}===>{{item}}
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'myMSwipe',
  data () {
    return {
      colorArr:["red","#f90","yellow","green","blue"]
    }
  },
  methods:{
   
  },
  created(){
    //console.log("this:",this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<style>
.mint-swipe-items-wrap {
  min-height: 200px;
  color: #fff;
  line-height: 200px;
  text-align: center;
  font-size: 20px;
}
.mint-swipe-indicator.is-active{
  width: 12px;
  height: 12px;
}
</style>
