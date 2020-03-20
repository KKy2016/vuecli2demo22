<template>
  <div class="myVant">
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
  name: 'myVant',
  data () {
    return {
      routerLinks:[
        {name: 'Button', to: '/myVant/myVButton'},
        {name: 'Toast', to: '/myVant/myVToast'},
        {name: 'Swipe', to: '/myVant/myVSwipe'},
        {name: 'LazyLoad', to: '/myVant/myVLazyLoad'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
