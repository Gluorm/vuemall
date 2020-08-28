<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left" >
        <div class="felx">
          <div @click="loginClick">
            <slot name="user-nickname" >
              <div>登录/注册</div>
            </slot>
          </div>
          <div class="out" @click="out">
            <slot name="out"></slot>
          </div>
        </div>
        <div class="phone">
         
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      
    </a>
  </div>
</template>

<script>
	export default {
    name: "UserInfo",
    methods: {
      loginClick(){
        this.$router.push('/login')
      },
      out(){
        this.$store.commit('outerrortip')
        this.$toast.Tshow('已退出',2000)
      }
    },
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
    width: 70%;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
  .out{
    position: relative;
    left: 0;
    color: steelblue;
    font-size: 14px;
  }
  .felx{
    display:flex;
    justify-content: space-between;
  }
</style>
