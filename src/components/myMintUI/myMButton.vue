<template>
  <div class="myMButton">
    <div>
      <strong>Button</strong>
    </div>
    <div>
      改变颜色<br />
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button><br />
      改变大小<br />

      <mt-button size="small">small</mt-button><br /><br />
      <mt-button size="large">large</mt-button><br /><br />
      <mt-button size="normal">normal</mt-button><br />
      <br />
      <br />
      禁用按钮<br />
      <mt-button :disabled="f" @click="fn1">disabled</mt-button><br /><br /><br /><br />
      幽灵按钮<br />

      <mt-button plain>plain</mt-button><br />
      带图标<br />

      <mt-button icon="back">back</mt-button>
      <mt-button icon="more">更多</mt-button><br />
      自定义图标<br />

      <mt-button>
        <img src="./qianbao.png" height="20" width="20" slot="icon">
        带自定义图标1
      </mt-button>
      <mt-button>
        <img src="../../assets/qianbao.png" height="20" width="20" slot="icon">
        带自定义图标2
      </mt-button>
      <br /><br />
      绑定 click 事件   <br />
      <mt-button @click.native="fn1">点击触发 fn1</mt-button>
      <mt-button @click="fn2" @mouseover="fn3">点击触发 fn2</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
  name: 'myMButton',
  data () {
    return {
      f:true
    }
  },
  methods:{
    fn1(){
      console.log("fn1");
    },
    fn2(){
      console.log("fn2");
    },
    fn3(){
      console.log("fn3");
    }
  },
  created(){
    //console.log("this:",this)
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
.mint-button.is-disabled {
  color: red;
  cursor: not-allowed;
}
</style>
