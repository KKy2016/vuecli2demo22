<template>
  <div class="myVToast">
   <div class="box1">
      <van-button type="default" @click="fn1">提示1</van-button>
      <van-button type="primary" @click="fn2">主要按钮</van-button>
      <van-button type="info" @click="fn3">信息按钮</van-button>
      <van-button type="warning" @click="fn4">警告按钮</van-button>
      <van-button type="danger" @click="fn5">危险按钮</van-button>
      <van-button type="default" @click="fn6">关闭提示1</van-button>
   </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast, Button} from 'vant';
Vue.use(Button);
Vue.use(Toast);
export default {
  name: 'myVToast',
  data () {
    return {
      f:true,
      t:undefined,
    }
  },
  methods:{
    fn1 () {
      // 自定义加载图标
      this.t=Toast.loading({
        message: '加载中...',
        //forbidClick: true, //禁用背景点击
        loadingType: 'spinner',
        duration: 0,
        //closeOnClickOverlay: true,
        //overlay: true,
      });
    },
    fn2 () {
      if(this.f){
        Toast.success('成功文案');
      }else{
        Toast.fail('失败文案');
      }
      this.f = !this.f
    },
    fn3 () {
      if(this.f){
       Toast({
        message: '自定义图标',
        icon: 'like-o'
      });
      }else{
        Toast({
          message: '展示图片',
          icon: './static/vantLogo.png'
        });
      }
      this.f = !this.f 
    },
    fn4 () {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '倒计时 3 秒'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
        }
      }, 1000);
    },
    fn5 () {
      this.$toast("哈哈");
    },
    fn6(){
      console.log("this.t:",this.t);
      if(this.t){
        this.t.clear();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.van-toast.van-toast--middle.van-toast--loading{
  color: red;
}
.van-toast__loading{
  color: blue;
}
</style>
