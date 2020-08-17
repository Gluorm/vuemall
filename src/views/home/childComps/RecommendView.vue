<template>
  <div class="commend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commend',
  components: {},
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }
  }}
</script>

<style  scoped>
.commend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.item{
  flex: 1;
}
.item  img{
  width: 60px;
  height: 60px;
  margin-bottom:10px; 
}
</style>
