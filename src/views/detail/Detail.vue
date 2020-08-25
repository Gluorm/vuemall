<template>
  <div class="detail">
    <detail-navbar  class="detail-nav"  @NavbarClick="NavbarClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="getindex" :probeType="3">
    <detail-swiper  :top-images="topImages"  />
    <detail-base-info :detailInfo="goods"  />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detailInfo="detailInfo"  @imageLoad="imageLoad" />
    <detail-param-info :paramInfo="paramInfo" @parLoad="parLoad" ref="params"/>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
    <goods-list :goods="goods1" ref="recommend" />
    </scroll>
    <detail-bottom-bar class="bottombar" @addTocart="addTocart"/>
    <back-top  @click.native="backClick"  v-show="isShowBackTop"/>
    <!-- <toast :message="message" :toastshow="toast" /> -->
  </div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import {itemListenerMixin,backTopMixin}  from "common/mixin"
import {debouce} from "common/utils"


import goodsList from "components/content/goods/goodsList"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

import Scroll from "components/common/scroll/Scroll"


// import Toast from "components/common/toast/Toast"

export default {
  name:'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodsList,
    DetailBottomBar,
    // Toast
  },
  mixins:[itemListenerMixin,backTopMixin],
  props: {},
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      goods1:[],
      getThemeTopY:null,
      themeTopYs:[],
      currentIndex:0,
      // message:'',
      // toast:null
    }
  },
  methods:{
    imageLoad(){
     this.refresh()
     this.getThemeTopY()
    },
    parLoad(){
      this.refresh()
    },
    NavbarClick(index){
     
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    getindex(position){
      const positionY = -position.y
      for(let i=0;i<this.themeTopYs.length-1;i++ ){
        if(this.currentIndex !== i && (positionY>=this.themeTopYs[i]&& positionY<=this.themeTopYs[i+1])){
            this.currentIndex = i ;
           this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      
      // for(let i=0;i<this.themeTopYs.length;i++){
      //   if(this.currentIndex !== i &&((i<this.themeTopYs.length-1 && positionY>=this.themeTopYs[i]
      //    && positionY<=this.themeTopYs[i+1]) ||(i===this.themeTopYs.length-1 && positionY>=this.themeTopYs[i]))){
      //      this.currentIndex = i ;
      //      this.$refs.nav.currentIndex = this.currentIndex
      //    }
      // }

      //bar-top
      this.listenShowBackTop(position)

    },
    addTocart(){
      const product={};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch('addCart',product).then(
        res=>{
         
          this.$toast.Tshow(res,2000)
          
          // this.message = res;
          // this.toast = true
          // setTimeout(() => {
          //   this.toast = false
          // }, 2000);
        }
      )
    }

  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      const data = res.result;
      this.topImages = data.itemInfo.topImages  //商品信息轮播图
      
      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)  //店铺信息

      this.detailInfo = data.detailInfo     //展示图片

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule) //尺码

      if(data.rate.cRate !== 0 ){
        this.commentInfo = data.rate.list[0]
      } //评论信息
    })


    getRecommend().then(
      res=>{
        this.goods1 = res.data.list
      }
    ) //推荐图
    this.$nextTick(()=>{

      this.getThemeTopY = debouce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },50)
    })

    



  },
   mounted() { 
  },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)  //出去取消全局监听事件
    },
  }
</script>

<style  scoped>
.detail{
  position:relative;
  z-index:9;
  background-color: #fff;
  height:100vh;
}
.content{
  height: calc(100% - 44px - 58px); 
  overflow: hidden;
}
/* 注意空格 100% - 44中间 */
.detail-nav{
  position:relative;
  z-index:9;
  background-color: #fff;
}
</style>
