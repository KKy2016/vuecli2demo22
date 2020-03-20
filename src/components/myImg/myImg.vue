<template>
  <div class="myImg">
    <strong>需要开启http://127.0.0.1:8082的服务</strong><br />
    <strong>
      分了两种为 本地图片渲染 和 网络图片渲染<br />
      为什么需要 require ? <br />
      不用 require ，路径会被加载器解析为字符串，所以图片找不到
    </strong>
    <strong>
      1.图片放置再组件文件夹内,这里的图片只有该组件使用<br />
      2.assets中,静态图片,不常更改的图片logo,图片会被编译成base64格式
      3.static,静态图片不会被编译,直接加载
      4.服务器上,经常更换的图片
    </strong>
   <ol>
     <li>
       1<img src="./00.png"  />
     </li>
     <li>
       2<img src="@/assets/qianbao.png"  />
     </li>
     <li>
       3<img src="static/vantLogo.png"  />
     </li>
     <li>
       4<img src="http://localhost:8082/4.png"  />
     </li>
     <li>
      5 <img :src="img5" />
     </li>
     <li>
       6<img :src="'http://127.0.0.1:8082/'+img6" />
     </li>
     <li>
       7<img :src="img7" />
     </li>
     <li>
       15<img :src="img15" />
     </li>
     <li>
      8<img :src="img8" />
     </li>
     <li>
      9<img :src="img9" />
     </li>
     <li>
      10<img :src="img10" />
     </li>
     <li>
      11<img :src="img11" />
     </li>
     <li>
      12<img :src="img12.url" />
     </li>
     <li>
      13<img :src="img13()" />
     </li>
     <li>
      14<img :src="img14" />
     </li>
   </ol>
  </div>
</template>

<script>
import img8 from '@/assets/vantLogo.png'
let img9 = require("@/assets/logo.png");
import img10 from './00.png'
export default {
  name: 'myImg',
  data () {
    return {
      img5:"http://localhost:8082/5.png",
      img6:"6.png",
      img7:require("@/assets/logo.png"),
      img15:require("./00.png"),
      img8,
      img9,
      img10,
      img11:"static/vantLogo.png",
      img12:{
        url:require("@/assets/logo.png"),
      }
    }
  },
  methods: {
    img13 () {
      return require("@/assets/logo.png")
    }
  },
  computed: {
    img14 () {
      return this.img10
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
