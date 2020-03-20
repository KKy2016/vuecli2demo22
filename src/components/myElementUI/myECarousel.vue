<template>
  <div class="myECarousel">
    <div class="box1">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block kky">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel  :interval="4000" trigger="click" height="150px" indicator-position="outside" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="box2">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui';
// Vue.component(Carousel.name, Carousel);
// Vue.component(CarouselItem.name, CarouselItem);
export default {
  name: 'myECarousel',
  data () {
    return {
      msg: 'myECarousel'
    }
  },
  components: {
    [Carousel.name]:Carousel,
    [CarouselItem.name]:CarouselItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
<style>
 .box1 .kky .el-carousel__indicator button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: blue;
    opacity:1
 }
  .box1 .kky .el-carousel__indicator.is-active button {
    
    background-color: red;
  }
</style>
