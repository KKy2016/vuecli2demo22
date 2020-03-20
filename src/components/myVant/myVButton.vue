<template>
  <div class="myVButton">
    <strong>Button</strong>
    <div class="box1">
      按钮类型
      支持default、primary、info、warning、danger五种类型，默认为default
      <br />
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="box2">
      朴素按钮
      通过plain属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
      <br />
      <van-button plain type="primary">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
    </div>
    <div class="box3">
      细边框
      设置hairline属性可以开启 0.5px 边框，基于伪类实现
      <br />
      <van-button plain hairline type="primary">细边框按钮</van-button>
      <van-button plain hairline type="info">细边框按钮</van-button>
    </div>
    <div class="box4">
      禁用状态
      通过disabled属性来禁用按钮，禁用状态下按钮不可点击
      <br />
      <van-button disabled type="primary">禁用状态</van-button>
      <van-button disabled type="info">禁用状态</van-button>
    </div>
    <div class="box5">
      加载状态
      通过loading属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过loading-text设置加载状态下的文字
      <br />
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading type="info" loading-text="加载中..." />
    </div>
    <div class="box6">
      按钮形状
      通过square设置方形按钮，通过round设置圆形按钮
      <br />
      <van-button square type="primary">方形按钮</van-button>
      <van-button round type="info">圆形按钮</van-button>
    </div>
    <div class="box7">
      图标按钮
      通过icon属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL
       <br />
      <van-button icon="star-o" type="primary" />
      <van-button icon="star-o" type="primary">按钮</van-button>
      <van-button icon="./static/vantLogo.png" type="info">按钮</van-button>
      <!-- <img src="./vantLogo.png" style="width:50px" />
      <img src="../../assets/vantLogo.png" style="width:50px" />
      <img :src="'./vantLogo.png'" style="width:50px" /> -->

    </div>
    <div class="box8">
      按钮尺寸
      支持large、normal、small、mini四种尺寸，默认为normal
       <br />

      <van-button type="primary" size="large">大号按钮</van-button>
      <van-button type="primary" size="normal">普通按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="mini">迷你按钮</van-button>
    </div>
    <div class="box9">
      块级元素
      按钮在默认情况下为行内块级元素，通过block属性可以将按钮的元素类型设置为块级元素
       <br />

      <van-button type="primary" block>块级元素</van-button>
    </div>
    <div class="box10">
      页面导航
      可以通过url属性进行 URL 跳转，或通过to属性进行路由跳转
      <br />
      <van-button type="primary" url="./static/css/my.css">URL 跳转到百度</van-button>
      <van-button type="primary" to="/myVant/myVToast">路由跳转 toast</van-button>
    </div>
    <div class="box11">
      自定义颜色
      通过color属性可以自定义按钮的颜色
      <br />
      <van-button color="#7232dd">单色按钮</van-button>
      <van-button color="#7232dd" plain>单色按钮</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  name: 'myVButton',
  data () {
    return {
      msg: 'myVButton'
    }
  },
  created(){
    console.log("this:",this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myVButton>div{
  padding: 10px;
  margin: 10px;
  border: 1px solid red;
}
</style>
