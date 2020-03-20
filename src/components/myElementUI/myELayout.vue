<template>
  <div class="myELayout">
    <div class="box1">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            这是elementui
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">AAA</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">BBB</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">CCC</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </div>
    <br />
    <br />
    <br />
    <div class="box2">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Row, Col } from 'element-ui';
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
export default {
  name: 'myELayout',
  data () {
    return {
      msg: 'myELayout'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .box1 .el-row {
    margin-bottom: 20px;
  }
  .box1 .el-row:last-child {
      margin-bottom: 0;
  }

  .box1 .el-col {
    border-radius: 4px;
  }
  .box1 .bg-purple-dark {
    background: #99a9bf;
  }
  .box1 .bg-purple {
    background: #d3dce6;
  }
  .box1 .bg-purple-light {
    background: #e5e9f2;
  }
  .box1 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .box1 .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .box2 .el-row {
    margin-bottom: 20px;
  }
  .box2 .el-row:last-child {
    margin-bottom: 0;
  }
  .box2 .el-col {
    border-radius: 4px;
  }
  .box2 .bg-purple-dark {
    background: #99a9bf;
  }
  .box2 .bg-purple {
    background: #d3dce6;
  }
  .box2 .bg-purple-light {
    background: #e5e9f2;
  }
  .box2 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .box2 .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
