<template>
  <div class="myVSwipe">
    <div>
      <strong>基础用法</strong>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in colorArr" :key="i" :style="{backgroundColor:colorArr[i]}">
          {{i}}===>{{item}}
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <strong>懒加载</strong>
      <van-swipe :autoplay="30000000" class="my-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-swipe :autoplay="3000"  class="my-swipe" @change="onChange">
        <van-swipe-item v-for="(item,i) in colorArr" :key="i" :style="{backgroundColor:colorArr[i]}">
          {{i}}===>{{item}}
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/4
        </div>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem)
Vue.use(Lazyload);
export default {
  name: 'myVSwipe',
  data () {
    return {
      colorArr:["red","#f90","yellow","green","blue"],
      images: [
        './static/img/apple-1.jpg',
        './static/img/apple-2.jpg',
        './static/img/01.jpeg',
        './static/img/02.jpeg',
        './static/img/03.jpeg',
        './static/img/04.jpeg',
        './static/img/05.jpeg',
        './static/img/06.jpeg',
      ],
      current:0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-swipe__indicator--active{
  width: 10px;
  height: 10px;
}

.my-swipe .van-swipe-item {
  height: 100px;
}
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 100px;
}
</style>
