<template>
 
    <tabbar>
        <baritem path="/home" > 
         <img slot="itemIcon" src="~assets/img/tabbar/home.png" alt="">
         <img slot="iconActive" src="~assets/img/tabbar/home_active.png" alt="">
         <div slot="itemtext"> 首页</div>
       </baritem>
        <baritem path="/category">
         <img slot="itemIcon" src="~assets/img/tabbar/category.png" alt="">
         <img slot="iconActive" src="~assets/img/tabbar/category_active.png" alt="">
         <div slot="itemtext"> 分类</div>
       </baritem>
      
      <baritem path="/cart">
          <img slot="itemIcon" src="~assets/img/tabbar/cart.png" alt="">
          <img slot="iconActive" src="~assets/img/tabbar/cart_active.png" alt="">
          <div slot="itemtext"> 购物车</div>
        </baritem>

         <baritem path="/profile">
          <img slot="itemIcon" src="~assets/img/tabbar/profile.png" alt="">
          <img slot="iconActive" src="~assets/img/tabbar/profile_active.png" alt="">
          <div slot="itemtext"> 个人</div>
        </baritem>
      </tabbar>
 
</template>

<script>
import baritem from 'components/common/tabbar/baritem'
import tabbar from 'components/common/tabbar/tabbar'
export default {
  name: 'miantab',
  components: {
    baritem,
    tabbar
    },
  props: {},
  data() {
    return {

    }
  }}
</script>

<style  scoped>

</style>
