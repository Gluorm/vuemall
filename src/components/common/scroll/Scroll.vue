<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'wrapper',
  mounted(){
    //创建实例
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })


  },
  methods: {
    scrollTop(x,y,z=500){
      this.scroll.scrollTo(x,y,z)
    },

    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  components: {},
  props: {
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null
    }
  }}
</script>

<style  scoped>

</style>
