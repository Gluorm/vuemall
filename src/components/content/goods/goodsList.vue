<template>
  <div class="goodslist">
    <goods-list-item  v-for="item in goods"   :goods-item="item"  />
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem"
export default {
  name: 'goodslist',
  components: {
    goodsListItem
  },
  props: {
    goods:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    }
  }}
</script>

<style  scoped>
.goodslist {
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  padding: 3px;
}
</style>
