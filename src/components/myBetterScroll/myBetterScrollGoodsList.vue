<template>
  <div class="myBetterScrollGoodsList">
    <div class="box">
      <div class="boxLeft" ref="boxLeft">
        <div class="left">
          <div v-for="(item,i) in goods" :key="i" class="goodsMenu" ref="goodsMenu" :class="{'active':i===currentIndex}" @click="mySelect(i,$event)">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="boxRight" ref="boxRight">
        <div class="right">
          <div v-for="(item,i) in goods" :key="i" ref="goodsType">
           <div class="goodsTypeName">{{item.name}}</div>
           <div v-for="(item2,i2) in item.foods" :key="i2" class="goodsSingle">
             <div>
               <img :src="item2.image" class="img" />
             </div>
             <div class="goodsSingleRight">
                <div class="goodsSingleName">{{item2.name}}</div>
                <div>{{item2.description}}</div>
                <div>月售<span>{{item2.sellCount}}</span>份</div>
                <div>好评率<span>{{item2.rating}}</span>%</div>
                <div>
                   <span class="price">¥{{item2.price}}</span>
                   <span class="oldPrice" v-if="item2.oldPrice">¥{{item2.oldPrice}}</span>
                </div>
                <div>
                  <!--
                    课添加一个加入购物的按钮组件
                  -->
                  <button type="button" class="addCar">+</button>
                </div>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//1引入better-scroll
import BScroll from 'better-scroll'// cnpm i better-scroll --save-dev
// import goodsList from './data/goodsList.json' //适用于本地项目配置文件,不需要ajax请求
export default {
  name: 'myBetterScrollGoodsList',
  data () {
    return {
      goodsList:{},
      goods:[],
      scrollY:0,
      listHeight:[],
      //goodsList2:goodsList
    }
  },
  created() {
    this.getData();
    this.$nextTick(()=>{
      // this.initBS();
    })
  },
  mounted() {
    this.initBS();
  },
  methods: {
    stopWheel(){
      let box1=this.$refs.box1;
      box1.onmousewheel=function(){
        return false;
      }
    },
    getData(){
      this.axios.get("./static/data/goodsList.json").then(res=>{
       // console.log("res:",res);
       // this.goodsList=res.data;
        this.goods=res.data.goods;//等待this.goods中数据渲染完毕,this.$nextTick再执行
        this.$nextTick(()=>{
          this.getHeighs();
        })
      }).catch(err=>{
        console.log("err:",err);
      })
    },
    mySelect(i,event){
      let goodsType = this.$refs.goodsType;
      // console.log("goodsType:",goodsType);
      let el=goodsType[i];
      this.boxRightScroll.scrollToElement(el,300);
    },
    initBS(){
      let boxLeft=this.$refs.boxLeft;
      //console.log("boxLeft:",boxLeft)
      this.boxLeftScroll=new BScroll(boxLeft,{
        click:true,
        scrollY:true,
      })
      let boxRight=this.$refs.boxRight;
      //console.log("boxRight:",boxRight)
      this.boxRightScroll=new BScroll(boxRight,{
        click:true,
        scrollY:true,
        probeType:3
      })
      this.boxRightScroll.on("scroll",pos=>{
        //console.log("x:",pos.x,"y:",pos.y)
        this.scrollY=Math.abs(Math.round(pos.y));
       // console.log("滚动了:",this.scrollY);
      })
    },
    getHeighs(){
      //console.log("0000",this.$refs);
      let goodsType = this.$refs.goodsType;
     // console.log("0000goodsType:",goodsType);
      let h=0;
      this.listHeight.push(h);
      for(let i=0;i<goodsType.length;i++){
        h+=goodsType[i].clientHeight;
        //console.log("我是第",(i+1),"个dom,自身高度",goodsType[i].clientHeight,"累计高度",h);
        this.listHeight.push(h);
      }
     // console.log("所有高度:",this.listHeight);
    }
  },
  computed: {
    currentIndex () {
      for(let i=0,len=this.listHeight.length;i<len;i++){
        let h1=this.listHeight[i];
        let h2=this.listHeight[i+1];
        if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
          let goodsMenu = this.$refs.goodsMenu;
          //console.log("goodsMenu:",goodsMenu);
          let el;
          if(i>=len/2){
            el=goodsMenu[parseInt(len/2)]
          }else{
            el=goodsMenu[0]
          }
          this.boxLeftScroll.scrollToElement(el,300);
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
.box{
  display: flex;
  height: 450px;
  overflow: hidden;
}

/*3.父元素高度一定要小于子元素*/
.box .boxLeft{
  width: 25%;
  background-color: #ddd;
}
.box .boxRight{
  width: 75%;
}
.box .boxLeft .left .goodsMenu{
  height: 30px;
  text-align: center;
  font-size: 12px;
  padding: 20px 10px;
}
.active{
  background-color: blue;
  color: #fff;
  font-size: 14px;
}
.goodsTypeName{
  background: #f3f5f7;
  border-left: 2px solid #d9dde1;
  color: #666;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  padding-left: 14px;
}
.goodsSingle{
  display: flex;
  padding: 10px;
}
.goodsSingle img{
  width: 50px;
  height: 50px;
}
.goodsSingle .goodsSingleRight{
  font-size: 12px;
  padding-left: 10px;
}

.goodsSingleName{
  font-size: 16px;
}

.price {
  font-size: 14px;
  color: red;
}
</style>
