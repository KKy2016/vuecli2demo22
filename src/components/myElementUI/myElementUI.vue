<template>
  <div class="myElementUI">
    <div>
      <router-link v-for="(item,i) in routerLinks" :key="i" :to="item.to">
        {{item.name}}
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myElementUI',
  data () {
    return {
      routerLinks:[
        {name: 'Layout', to: '/myElementUI/myELayout'},
        {name: 'Button', to: '/myElementUI/myEButton'},
        {name: 'Message', to: '/myElementUI/myEMessage'},
        {name: 'Carousel', to: '/myElementUI/myECarousel'},
        {name: 'Image', to: '/myElementUI/myEImage'},
        {name: 'myEPreview', to: '/myElementUI/myEPreview'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
