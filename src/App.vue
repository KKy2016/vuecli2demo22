<template>
  <div id="app">
    <div v-show="this.$root.isShowRouterLink">
      <div v-for="(item,i) in routerLinks" :key="i">
        <router-link :to="item.to" >
          {{item.name}}
        </router-link>
      </div>
    </div>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      routerLinks:[
        {name: 'vue基础', to: '/basic'},
        {name: 'myMintUI', to: '/myMintUI'},
        {name: 'myVant', to: '/myVant'},
        {name: 'myElementUI', to: '/myElementUI'},
        {name: 'myBetterScroll', to: '/myBetterScroll'},
        {name: '异步组件', to: '/myAsyncComponent'},
        {name: 'vue图片', to: '/myImg'}
      ]
    }
  }
}
</script>

<style>
.lac{
  background-color: red;
  color: #fff;
  font-size: 20px;
}
.routerView{
  border: 1px solid red;
  padding: 10px;
}
</style>
