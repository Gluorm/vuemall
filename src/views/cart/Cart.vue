<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <cart-list/>

    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import {mapGetters} from 'vuex'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])//用对象{cas：‘cartLength’} 可以起别名
  },
  props: {},
  data() {
    return {

    }
  }}
</script>

<style  scoped>
.cart{
  height:100vh;
}
.navbar{
  background-color: #ff8198;
  color:#fff
}
</style>
