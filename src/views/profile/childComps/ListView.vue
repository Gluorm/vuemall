<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
       
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>

	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        
      }
      
    },

 

	}
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
    padding:0 10px;

  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
    display:flex;
    width:100%;
    
  }

 .item .icon{
   display: flex;
    align-items:center
 }

  .item .icon img{
    height:18px;
    
  }


  .item .info {
    width:100%;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
