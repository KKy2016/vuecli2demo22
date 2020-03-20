<template>
  <div class="myEMessage">
   <div>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
   </div>
   <div>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
   </div>
   <div>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
   </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  name: 'myEMessage',
  data () {
    return {
      msg: 'myEMessage'
    }
  },
  methods:{
      open() {
        //this.$message('这是一条消息提示');
        Message('这是一条消息提示');
      },
      openVn() {
        const h = this.$createElement;
        Message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },
      // open1() {
      //   this.$message('这是一条消息提示');
      // },
      open1() {
        Message({
          showClose: true,
          center: true,
          message: '这是一条消息提示'
        });
      },
      open2() {
        Message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open3() {
        Message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open4() {
        Message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error',
          center: true
        });
      },
       openHTML() {
       Message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>',
          center: true
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
