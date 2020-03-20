<template>
  <div class="myEImage">
   <div>
     <strong>基础用法</strong>
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"></el-image>
    </div>
   </div>
   <div>
     <strong>占位内容</strong>
     <div class="block">
        <span class="demonstration">默认</span>
        <el-image :src="src"></el-image>
      </div>
      <div class="block">
        <span class="demonstration">自定义</span>
        <el-image :src="src">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
   </div>
   <div class="box3">
     <strong>加载失败</strong>
      <div class="block err1">
        <span class="demonstration">默认</span>
        <el-image></el-image>
      </div>
      <div class="block err1">
        <span class="demonstration">自定义</span>
        <el-image>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
   </div>
   <div>
     <strong>懒加载</strong>
      <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
   </div>
   <div>
     <strong>大图预览 可通过 previewSrcList 开启预览大图的功能。</strong>
     <br />
     <el-image 
        style="width: 100px; height: 100px"
        :src="url2" 
        :preview-src-list="srcList">
    </el-image>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'element-ui';
export default {
  name: 'myEImage',
  data () {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'static/img/eleImg.jpeg',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      url2: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  components: {
    [Image.name]: Image
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box3 .err1 {
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
</style>
