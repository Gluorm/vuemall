<template>
  <div class="tabcontrol">
    <div class="item" v-for="(item,index) in title" :key="index" :class="{active:index===currentIndex}" @click="Cilckitem(index)"> <span>{{item}}</span> </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  components: {},
  props: {
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    Cilckitem(index){
      this.currentIndex = index;
      this.$emit("tabClick", index)
    }
  },
  data() {
    return {
      currentIndex:0
    }
  }}
</script>

<style  scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 38px;
  line-height: 38px;
  font-size:14px;
  background-color: #fff;
}
.item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
  
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
