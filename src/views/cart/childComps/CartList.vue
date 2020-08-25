<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
      <cart-list-item  v-for="(item,index) in cartList" :key="index"  :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll"
import CartListItem from "./CartListItem"
export default {
  name: 'cartlist',
  components: {
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  props: {},
  data() {
    return {

    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  }
</script>

<style  scoped>
.cartlist {
  height: calc(100% - 44px - 49px - 44px);
}
.content{
  height: 100%;
  overflow:hidden;
}
</style>
