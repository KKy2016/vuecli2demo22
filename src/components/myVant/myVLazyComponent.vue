<template>
  <div class="myVLazyComponent">
   <div class="box1">
     <img v-for="(img,i) in imageList" v-lazy="img" :key="i" >
   </div>
  </div>
</template>

<script>
export default {
  name: 'myVLazyComponent',
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
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box1 img{
  width: 400px;
}
</style>
