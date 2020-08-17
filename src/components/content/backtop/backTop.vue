<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop',
  components: {},
  props: {},
  data() {
    return {

    }
  }}
</script>

<style  scoped>
.backtop{
  position:fixed;
  right: 8px;
  bottom: 55px;
}
.backtop img{
  height:44px;
  width: 44px;
}
</style>
