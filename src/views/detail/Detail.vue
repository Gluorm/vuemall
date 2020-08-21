<template>
  <div class="detail">
    <detail-navbar  class="detail-nav" />
    <scroll class="content" ref="scroll">
    <detail-swiper  :top-images="topImages"  />
    <detail-base-info :detailInfo="goods"  />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detailInfo="detailInfo"  @imageLoad="imageLoad" />
    <detail-param-info :paramInfo="paramInfo" @parLoad="parLoad"/>
    <detail-comment-info :commentInfo="commentInfo"/>
    <goods-list :goods="goods1" />
    </scroll>
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
import {itemListenerMixin}  from "common/mixin"
import goodsList from "components/content/goods/goodsList"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

import Scroll from "components/common/scroll/Scroll"

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
    goodsList
  },
  mixins:[itemListenerMixin],
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
      goods1:[]
    }
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      
    },
    parLoad(){
      this.$refs.scroll.refresh()
    },
 
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
    )

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
  height: calc(100% - 44px);  
}
/* 注意空格 100% - 44中间 */
.detail-nav{
  position:relative;
  z-index:9;
  background-color: #fff;
}
</style>
