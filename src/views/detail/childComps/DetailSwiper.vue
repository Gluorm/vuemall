<template>
  <swiper  class="swiper-img">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'detailswiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }
  }}
</script>

<style  scoped>
.swiper-img{
  height:300px;
  overflow: hidden;
}
</style>
