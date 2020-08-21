<template>
  <div id="app">
  <keep-alive exclude="Detail">
   <router-view></router-view>
  </keep-alive>
 
  <maintabbar></maintabbar>
    
  </div>
</template>


<script>
import maintabbar from 'components/content/maintabbar/MainTabbar'
export default {
   components: {
   maintabbar
    },
}
</script>
<style>
@import url(assets/css/base.css);

</style>
