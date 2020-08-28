<template>
  <div class="bottombar">
    <div class="Bcheck">
      <check-button :value="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计：￥{{totalPrice}}
    </div>

    <div class="reduce" @click="reduce">
      结算({{pricecount}})
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name: 'bottombar',
  components: {
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(
        item=>item.checked
      ).reduce((old,item)=>{
       return old + item.price * item.count
      },0).toFixed(2)
    },
    pricecount(){
      return this.cartList.filter(
        item=>item.checked
      ).length
    },
    isSelectAll(){
      if(this.cartList.length === 0){return false}
      return !(this.cartList.find(item=>!item.checked)) 
    }
  },
  props: {},
  data() {
    return {

    }
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item=>item.checked = false)
      }else{
        this.cartList.forEach(item=>item.checked = true)
      }
    },
    reduce(){
      this.$toast.Tshow('请先登录',2000)
    }
  },
  }
</script>

<style  scoped>
.bottombar {
  position: relative;
  display: flex;
  background-color: #ccc;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 10px;
}
.Bcheck{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.Bcheck span{
  margin-left: 8px;
  padding-top: 1px;
  color: #000;
}
.price{
  color: #000;
 
}
.reduce{
  background-color:var(--color-high-text);
  padding: 8px;
  border-radius: 10px;
  color: #fff;
}
</style>
