<template>
<swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="swiperLoad">
        </a>
          
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: 'homeswiper',
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    swiperLoad(){
      if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
      }
     
    }
  },
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isLoad:false
    }
  }}
</script>

<style  scoped>

</style>
