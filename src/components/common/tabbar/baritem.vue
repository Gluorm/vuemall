<template>
    <div class="baritem" @click="itemClick">
      <div v-if="!isActive"><slot name="itemIcon"></slot></div>
      <div v-else><slot name="iconActive"></slot></div>
      <div :style="activeStyle"> <slot name="itemtext"></slot></div>
    </div>
</template>

<script>
export default {
 
  name: 'baritem',
  components: {},
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed: {
     isActive(){
       return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle(){
       return this.isActive ? {color:this.activeColor}: {}
     }
  },
  data() {
    return {
     
    }
  }}
</script>

<style  scoped>
.baritem{
    flex:1;
    text-align:center;
    height: 49px;
    font-size: 14px;

}
.baritem img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
