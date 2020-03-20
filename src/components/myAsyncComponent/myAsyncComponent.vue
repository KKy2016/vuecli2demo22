<template>
  <div class="myAsyncComponent">
    <myAsyncCom1></myAsyncCom1>
    <myAsyncCom2></myAsyncCom2>
    <myAsyncCom3></myAsyncCom3>
    <myAsyncCom4></myAsyncCom4>
    <myAsyncCom5></myAsyncCom5>
    <myCom></myCom>
  </div>
</template>

<script>
/**
 * 使用() => import('./myAsyncCom2')
 * 替代示例中的import myAsyncCom1 from './myAsyncCom1'
 * Vue一旦请求渲染将会延迟加载该组件。
 * 
 * 当我们访问我们项目首页的时候，
 * app.js会被加载，加载完成后，
 * 访问其它页面app.js文件不会加载，
 * 因为已经加载好放在内存里了，
 * 直接拿来用就好了。因为app.js存放的是项目中所有页面的逻辑代码
 * ，所以当我们的项目变大时候，比如app.js就会很大的时候，
 * 项目的加载速度会变慢，这时候推荐使用异步组件按需加载，
 * 意思就是访问这个页面的时候只加载这个页面所需要的js文件，
 * 访问另一个页面的时候再加载另一个页面所需要的js文件，
 * 怎么做呢？只需要在router下面的index.js修改就可以了。
 * 
 * 废除的方法
 * const register = r => require.ensure([], () => r(require('@views/common/register')), 'index')
 * require.ensure()三个参数
第一个参数的依赖关系是一个数组，代表了当前需要进来的模块的一些依赖; 
第二个参数回调就是一个回调函数其中需要注意的是，这个回调函数有一个参数要求，
  通过这个要求就可以在回调函数内动态引入其他模块值得注意的是，
  虽然这个要求是回调函数的参数，理论上可以换其他名称，
  但是实际上是不能换的，否则的的的的WebPack就无法静态分析的时候处理它; 
第三个参数errorCallback比较好理解，就是处理错误的回调; 
第四个参数chunkName则是指定打包的组块名称。
 * 
 */

import myLoading from './myLoading'
import myError from './myError'

// 复杂组件
let myCom = () =>({
  component: import('./myCom'),//加载成功时的组件
  loading:myLoading,//加载过程中的组件
  error:myError,//加载失败时的组件
  timeout:5000, //超时(超过该时长就加载error组件)
  delay:100 //延迟加载
})



import myAsyncCom1 from './myAsyncCom1' //加载组件方式1,步骤1
let myAsyncCom3= ()=> import('./myAsyncCom3')//异步加载组件 加载组件方式2
let myAsyncCom5= resolve =>require(['./myAsyncCom5'],resolve)//异步加载组件 加载组件方式3

export default {
  name: 'myAsyncComponent',
  data () {
    return {
      msg: 'myAsyncComponent'
    }
  },
  components:{
    myAsyncCom1,// //加载组件方式1,步骤2,
    myAsyncCom2:() => import ('./myAsyncCom2'),//异步加载组件 加载组件方式2
    myAsyncCom3,
    myAsyncCom4:resolve=>require(['./myAsyncCom4'],resolve),//异步加载组件 加载组件方式3
    myAsyncCom5,
    myCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
