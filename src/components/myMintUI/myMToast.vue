<template>
  <div class="myToast">
    <div>
      <strong>toast</strong>
    </div>
    <div>
      <button type="button" @click="fn1">按钮1</button>
      <button type="button" @click="fn2">按钮2</button>
      <button type="button" @click="fn3">关闭提示</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'myToast',
  data () {
    return {
      t:"",
    }
  },
  methods:{
    fn1 () {
      Toast('提示信息')
    },
    fn2 () {
      this.t = Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000,
        iconClass: 'icon icon-success',
        className: 'kky',
        duration: -1
      });
    },
    fn3 () {
      console.log("t:",this.t);
      console.log("Toast:",Toast);
      if(this.t){
        this.t.close();
      }else{
        console.log("没有提示框");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-toast-icon.icon.icon-success{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 100%;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
