<template>
  <div class="toast" v-show="toastshow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'toast',
  components: {},
  props: {
    
  },
  data() {
    return {
      message: '',
      toastshow: false
    }
  },
   methods:{
    Tshow(res,time){
      console.log(res)
      this.message = res;
      this.toastshow = true;
      setTimeout(()=>{
        this.toastshow = false;
        this.message = '';
      },time)
    }
  }
  }
</script>

<style  scoped>
.toast {
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.6); 
  border-radius: 10px;
  z-index: 100;
}
</style>
