<template>
  <div class="home">
    <Navbar class="center"><div slot="center">购物街</div></Navbar>
    <tabcontrol    :title="['流行','新款','精选']" ref="tabcontrol02"   @tabClick="tabClick" v-show="tabcontentshow"  />
    <scroll class="wrapper"  ref="scroll"  :probe-type='3' :pull-up-load="true" 
      @scroll="contentscroll"
      @pullingUp="loadMore"
     
      >
    <home-swiper :banners=banners   @swiperImageLoad="swiperImageLoad" />
    <Recommend :recommends=recommends />
    <feature/>
    <tabcontrol    :title="['流行','新款','精选']" ref="tabcontrol01"   @tabClick="tabClick"  />
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
import {itemListenerMixin}  from "common/mixin"

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
  mixins:[itemListenerMixin],
  mounted() {
  
  },

  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    
  },

  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()  //保存Y

    this.$bus.$off('itemImageLoad',this.itemImgListener)
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
      this.$refs.tabcontrol01.currentIndex = index
      this.$refs.tabcontrol02.currentIndex = index
    },


    backClick(){
      this.$refs.scroll.scrollTo(0,0)
      
    },  //点击回顶部


    contentscroll(position){
      this.isShowBackTop = (-position.y) >1000
      this.tabcontentshow = (-position.y) >this.offsetTop
    },//利用获取的坐标

    loadMore(){
      this.getHomeGoods(this.currentType)
      
    },

    swiperImageLoad(){
      
      this.offsetTop = this.$refs.tabcontrol01.$el.offsetTop
     
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
      isShowBackTop:false,
      offsetTop:0,
      tabcontentshow:false,
      saveY:0
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
  
  position: relative;
  height: 100vh;
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
.tabcontrol{
  position: relative;
  z-index: 9;
}
</style>
