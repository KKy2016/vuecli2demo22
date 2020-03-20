<template>
  <div class="myMintUI">
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
  name: 'myMintUI',
  data () {
    return {
      routerLinks:[
        {name: 'Toast', to: '/myMintUI/myMToast'},
        {name: 'Button', to: '/myMintUI/myMButton'},
        {name: 'Swipe', to: '/myMintUI/myMSwipe'},
        {name: 'LazyLoad', to: '/myMintUI/myMLazyLoad'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
