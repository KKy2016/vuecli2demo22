<template>
  <div class="myMLazyLoad">
    <div>
      <strong>Button</strong>
    </div>
    <div class="box">
      <ul>
        <li v-for="(item,i) in list" :key="i">
          <img v-lazy="item">
        </li>
      </ul>
    </div>
    <div class="box2" id="box2">
      <ul>
        <li v-for="(item,i) in list" :key="i">
          <img v-lazy.box2="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
  name: 'myMLazyLoad',
  data () {
    return {
      f:true,
      list: [
        './static/img/01.jpeg',
        './static/img/02.jpeg',
        './static/img/03.jpeg',
        './static/img/04.jpeg',
        './static/img/05.jpeg',
        './static/img/06.jpeg',
        './static/img/01.jpeg',
        './static/img/02.jpeg',
        './static/img/03.jpeg',
        './static/img/04.jpeg',
        './static/img/05.jpeg',
        './static/img/06.jpeg'
      ]
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
<style>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box img{
  width: 400px;
}

.box2{
  height: 600px;
  overflow: scroll;
  border: 1px solid red;
}
.box2 img{
  width: 400px;
}
</style>
<style>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
