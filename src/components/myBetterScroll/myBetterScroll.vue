<template>
  <div class="myBetterScroll">
    <strong>Better-Scroll案例,在移动端演示</strong>
    <div>
      <button type="button" @click="fn">
        {{this.$root.isShowRouterLink?"隐藏路由":"显示路由"}}
      </button>
    </div>
    <div>
      <router-link v-for="(item,i) in routerLinks" :key="i" :to="item.to" style="display:block">
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
  name: 'myBetterScroll',
  data () {
    return {
      routerLinks:[
        {name: 'Demo0(无滚动效果)', to: '/myBetterScroll/myBetterScrollDemo0'},
        {name: 'Demo1(竖直滚动效果)', to: '/myBetterScroll/myBetterScrollDemo1'},
        {name: 'Demo2(横向滚动效果)', to: '/myBetterScroll/myBetterScrollDemo2'},
        {name: 'Demo3(监听横向滚动效果)', to: '/myBetterScroll/myBetterScrollDemo3'},
        {name: '左右联动', to: '/myBetterScroll/myBetterScrollGoodsList'},
        {name: '地址索引列表', to: '/myBetterScroll/myBetterScrollAddressList'},
      ]
    }
  },
  methods:{
    fn(){
      this.$root.isShowRouterLink = !this.$root.isShowRouterLink;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
