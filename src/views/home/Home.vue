<template>
  <div class="home">
    <Navbar class="center"><div slot="center">购物街</div></Navbar>

    <scroll class="wrapper"  ref="scroll"  :probe-type='3' :pull-up-load="true" 
      @scroll="contentscroll"
      @pullingUp="loadMore"
      >
    <home-swiper :banners=banners  />
    <Recommend :recommends=recommends />
    <feature/>
    <tabcontrol  class="tabcontrol"  :title="['流行','新款','精选']" @tabClick="tabClick" />
    <goodsList  :goods="showGoods" />
    </scroll>

    <back-top  @click.native="backClick"  v-show="isShowBackTop"/>
    
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from 'network/home.js'  //网络请求


import Navbar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import tabcontrol from "components/content/tabControl/TabControl"
import goodsList from "components/content/goods/goodsList"
import backTop from "components/content/backtop/backTop"


import homeSwiper from './childComps/HomeSwiper'
import Recommend from "./childComps/RecommendView"
import Feature from "./childComps/FeatureView"
export default {
  name: 'home',
  components: {
    Navbar,
    homeSwiper,
    Recommend,
    Feature,
    tabcontrol,
    goodsList,
    Scroll,
    backTop
  },
  props: {},
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  
  methods:{
    //执行函数
    tabClick(index){
      switch(index){
        case 0:
          this.currentType ='pop';
          break
        case 1:
          this.currentType ='new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
    },


    backClick(){
      this.$refs.scroll.scrollTop(0,0)
    },


    contentscroll(position){
      this.isShowBackTop = (-position.y) >1000
    },

    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },


    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
          })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;    
      getHomeGoods(type,page).then(res=>{  
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page ++
        this.$refs.scroll.finishPullUp()
      });
      
    }
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  
  
  }
</script>

<style  scoped>
.center{
  background-color:var(--color-tint);
  text-align: center;
  color:#fff;
}
.home{
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.tabcontrol{
  position:sticky;
  top:44px;
  z-index: 9;
}
.wrapper{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .wrapper{
    height:calc(100%-93px);
    overflow: hidden;
    margin-top: 44px;
} */

</style>
