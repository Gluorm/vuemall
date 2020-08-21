<template>
  <div class="base-info" v-if="Object.keys(detailInfo).length !== 0">
  <div class="title"><b>{{detailInfo.title}}</b></div>
  <div class="price">
    <span class="newprice"> {{detailInfo.newPrice}}</span>
    <span class="oldprice"> {{detailInfo.oldPrice}} </span>
    <span class="discount" v-if="detailInfo.discount">{{detailInfo.discount}}</span>
  </div>
  <div class="info-other">
    <span>{{detailInfo.columns[0]}}</span>
    <span>{{detailInfo.columns[1]}}</span>
    <span>{{detailInfo.services[detailInfo.services.length-1].name}}</span>
  </div>
  <div class="info-service">
    <span class="serviceitem" v-for="index in detailInfo.services.length-1">
      <img :src="detailInfo.services[index-1].icon" alt="">
      <span>{{detailInfo.services[index-1].name}}</span>
    </span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'base-info',
  components: {},
  props: {
    detailInfo:{
      type:Object,
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


.title{
  font-size:18px;
   margin-top: 10px;
}
.price{
  height:44px;
  line-height: 44px;
  margin-top: 8px;
  
}
.newprice{
  color:var(--color-high-text);
  font-size:24px;
  font-weight:bold;
  margin-right: 5px;
}
.oldprice{
  font-size:14px;
  text-decoration:line-through;
 margin-right: 5px;
}
.discount{
  background-color:red ;
  color: #fff;
  border-radius: 10px;
  padding: 3px;
  font-size:14px
}
.info-other{
  display:flex;
  justify-content:space-between;
  padding: 5px;
  font-size: 14px;
  color:#919191;
  border-bottom: 1px solid #ccc;
}
.info-service{
  display: flex;
  justify-content:space-between;
  font-size: 14px;
  padding: 5px;
  color:#000;
  line-height:44px;
  border-bottom: 3px solid #ccc;

}
.serviceitem img{
  height:12px;

}
</style>
