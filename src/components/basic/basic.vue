<template>
  <div class="basic">
<pre>
  1.在页面插入内容用<span v-pre>{{msg}}</span>
  2.在vue中指令有14个
v-html v-text v-on简写@ v-bind简写: v-slot简写# v-model v-for
v-if v-else-if v-else v-show v-once v-pre v-cloak
  3.v-model表单
绑定文本框,文本域,单选下拉列表 v-model="value"
绑定单选框 v-model="value"
单个复选框 v-model="checked值"(true/false) onchange事件
多个复选框,多选下拉列表 v-model="[选中项的value]"(数组)
表单修饰符 .number .lazy .trim
  4.计算属性,methods,watch区别
watch监听,深度监听,取消监听
  5.vue 通过class,style,动态修改样式
  6.事件修饰符 .prievent .stop
  7.生命周期 11个
created,mounted,update activeated,deactivated
  8.自定义指令
  9.过滤器
  10. this.$set();
this.$set(数组,下标,新值)
this.$set(对象,属性名,新值)
  11.组件
1.组件传值 props 自定义事件 $root,$parent,$children,$refs
  12.动态组件 is keep-alive
  13.template,render
  14.递归组件 name
  15.过渡
transition transition-group
  16.extend Vue构造器,创建一个子类,相当于一个组件对象
  17.mixin 混入,
  18.ref,nextTick
  19.路由
1动态路由 2 路由嵌套 3编程式路由 4 命名路由 5 命名视图
6重定向,别名 7 路由传值(meta,动态路由(path),params,query)
8路由模式(hash/history) 9导航守卫(router.beforeEach)
10.路由过渡 11.滚动行为 12 元信息(meta)
13 路由缓存 14 rourter-view传值
  20 vuex
state,getter,mutation,action,module
辅助函数
  21 vue-cli
npm  i @vue/cli -g
vue -V
vue create demo4
cd demo4
npm run serve(默认的)
///切换回版本2
npm i @vue/cli-init
vue init webpack demo2
cd demo2
npm run dev(默认的)


</pre>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre{
  font-size: 16px;
}
</style>
