// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'

// 全局添加mint ui
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 全局添加vant
// import Vant from 'vant';
import 'vant/lib/index.css';
// Vue.use(Vant);

// 全局添加ElementUI
//import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//  Vue.use(ElementUI);

// axios
import axios from './api'

Vue.prototype.axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    isShowRouterLink:true,
  },
  router,
 // components: { App },
  components:{
    'App':()=> import ('./App')
  },
  template: '<App/>'
})
