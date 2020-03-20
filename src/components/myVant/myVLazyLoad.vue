<template>
  <div class="myVLazyLoad">
    <strong>图片懒加载</strong>
    <div>
      基础用法  将v-lazy指令的值设置为你需要懒加载的图片
      <br />
      <img v-for="(img,i) in imageList" v-lazy="img" :key="i" >
    </div>
    <div class="box2">
      背景图懒加载<br/>
      和图片懒加载不同，<br/>
      背景图懒加载需要使用v-lazy:background-image，<br/>
      值设置为背景图片的地址，需要注意的是必须声明容器高度。
      <br />
      <!-- <img v-for="(img,i) in imageList" v-lazy="img" :key="i" > -->
      <div v-for="(img,i) in imageList" v-lazy:background-image="img" :key="i" />
    </div>
    <div>
      组件懒加载<br />
      将需要懒加载的组件放在myVLazyComponent标签中，即可实现组件懒加载。<br />
      // 注册时设置myVLazyComponent选项<br />
      <myVLazyComponent></myVLazyComponent>
    </div>
  </div>
</template>



<script>
import myVLazyComponent from './myVLazyComponent'
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  myVLazyComponent: true
});
export default {
  name: 'myVLazyLoad',
  data () {
    return {
      imageList: [
        'static/img/01.jpeg',
        'static/img/02.jpeg',
        'static/img/03.jpeg',
        'static/img/04.jpeg',
        'static/img/05.jpeg',
        'static/img/06.jpeg'
      ]
    }
  },
  created(){
    //console.log("this:",this);
  },
  components:{
    myVLazyComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box2>div{
  height: 300px;
}
img{
  width: 400px;
}
</style>
