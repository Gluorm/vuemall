<template>
  <div class="item" @click="itemClick">
    <img :src="showImage" alt=""  @load="imageLoad">
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  components: {},
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img
    }
  },
  props: {
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.iid)
    }
  }
  
  
  }
</script>

<style  scoped>
.item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.item img{
  width: 100%;
  height: 100% ;
  border-radius: 5px;
}
.info{
  position:absolute;
  font-size:14px;
  bottom:5px;
  left:0;
  right: 0;
  text-align: center;
  overflow: hidden;
}
.info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.info .collect{
  position: relative;
}
.info .collect::before{
  content:'';
  position: absolute;
  left:-15px;
  top:1px;
  width:14px;
  height: 14px;
  background:url("~assets/img/common/favor.png")  0 0/14px 14px ;
}
</style>
