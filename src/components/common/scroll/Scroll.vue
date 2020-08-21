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
    //监听上拉到底部
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })


  },
  methods: {
    scrollTo(x,y,z=500){
      this.scroll && this.scroll.scrollTo(x,y,z)
    },


    //刷新上拉加载
    finishPullUp(){
      this.scroll.finishPullUp()
    },


    //刷新页面 scroll不会出现滚动bug
    refresh(){
      this.scroll && this.scroll.refresh()
      
    },

    getScrollY(){
      return this.scroll ? this.scroll.y :0
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
