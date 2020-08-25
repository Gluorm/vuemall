<template>
  <div class="navbar">
    <nav-bar>
      <div slot="left" class="leftimg" @click="backClick"><</div>
      <div slot="center" class="center">
        <div v-for="(item,index) in title" class="item" :class="{active:index===currentIndex}"  @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'navbar',
  components: {
    NavBar
  },
  props: {},
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('NavbarClick',index)
    },
    backClick(){
      this.$router.go(-1)
    }
  },
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  }}
</script>

<style  scoped>
.navbar {
}
.center{
  display:flex;

}
.item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.leftimg{
  padding-left:20px;
  font-size: 22px;
}
</style>
