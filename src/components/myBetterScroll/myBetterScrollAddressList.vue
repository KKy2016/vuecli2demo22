<template>
  <div class="myBetterScrollAddressList" v-if="addressList2.length>0">
    <div class="title">
      <strong>索引列表</strong>
    </div>
    <div class="nowAddress">
      当前城市:{{nowCity}}
    </div>
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <div v-for="(item,i) in addressList2" :key="i" class="addressBox" ref="addressBox">
          <div class="addName">{{item.name}}</div>
          <div v-for="(item2,i2) in item.cities" :key="i2" class="addCity" @click="fn(item2)">
            {{item2.name}}{{currentIndex}}
          </div>
        </div>
      </div>
    </div>
    <div class="addressIndex">
      <div v-for="(item,i) in addressList2" :key="i" :class="{active:i===currentIndex}" @click="mySelect(i,$event)">
        {{item.name | mySub}}
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import addressList from './data/addressList.json'
export default {
  name: 'myBetterScrollAddressList',
  data () {
    return {
      addressList2:addressList,
      nowCity:"北京市",
      scrollY:0,
      heights:[0]
    }
  },
  mounted() {
    this.stopWheel();
    console.log("addressList:",addressList);
    this.initBs();
    this.$nextTick(()=>{
      this.getHeights();
    })
  },
  methods: {
    stopWheel(){
      let box1=this.$refs.box1;
      box1.onmousewheel=function(){
        return false;
      }
    },
    initBs(){
     let box1=this.$refs.box1;
     this.box1bs=new BScroll(box1,{
       click:true,
       scrollY:true,
       probeType:3
     });

     this.box1bs.on("scroll",pos=>{
       //console.log("x:",pos.x,"y:",pos.y);
       this.scrollY=Math.abs(Math.round(pos.y));
       console.log("scrollY:",this.scrollY);
     })
    },
    getHeights(){
      let addressBox = this.$refs.addressBox;
      //console.log("addressBox:",addressBox);
      let h=0;
      for(let i=0,len=addressBox.length;i<len;i++){
        h+=addressBox[i].clientHeight;
        this.heights.push(h);
      }
      console.log("所有高度:",this.heights);
    },
    mySelect(i,event){
      let addressBox=this.$refs.addressBox;
      //console.log("999addressBox:",addressBox);
      let el=addressBox[i];
      this.box1bs.scrollToElement(el,300)
    }
  },
  filters:{
    mySub(value){
      return value.substr(0,1)
    }
  },
  computed: {
    addressList3(){
      return addressList
    },
    currentIndex(){
      console.log("0000this.heights:",this.heights);
      for(let i=0,len=this.heights.length;i<len;i++){
        let h1=this.heights[i];
        let h2=this.heights[i+1];
        console.log("此时:i",i,"h1:",h1,"h2:",h2,"scrollY",this.scrollY);
        if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
          return i;
        }
      }
      return 0;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  color: blue;
  text-align: center;
}
.nowAddress{
  padding: 14px 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}
.box1{
  height: 400px;
  overflow: hidden;
}

.addName{
  padding: 16px 16px 10px 16px;
  line-height: 1;
  font-size: 14px;
  color: #999;
  background: #f7f7f7;
}
.addCity{
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
}

.addressIndex{
  position: fixed;
  right: 15px;
  top: 50%;
}
.addressIndex>div{
  width: 25px;
  height: 25px;
  margin: 2px;
  text-align: center;
  line-height: 25px;
  border-radius: 100%;
}

.active{
  background-color: red;
  color: #fff;
}
</style>
