<template>
  <div class="login">

    <div class="title">
      <h2>购物网</h2>
    </div>
    <div class="centent">
   <el-input
  placeholder="请输入账户"
  v-model="name"
  clearable>
  </el-input>
  <el-input placeholder="请输入密码" v-model="password" show-password class="input2"></el-input>
  <el-button type="primary" round class="button" @click="login" v-if="show">登录</el-button>
  <el-button type="success" round class="button" @click="istered" v-else>注册</el-button>
  <p @click="qie">{{show?'免费注册':'前往登录'}}</p>
  
  </div>
  </div>
</template>

<script>
import {Getlogin,Getregistered} from 'network/login'
export default {
  name: 'login',
  components: {},
  props: {},
  data() {
    return {
      name:'',
      password:'',
      show:1,
    }
  },
  methods: {
    qie(){
      this.show = !this.show
    },
    login(){
         if(!this.name || !this.password){   //若任意一个参数为空，则返回并提示错误
          this.errortip=true;
          this.errorTip='账号或密码有误';
          return;
         }//这里懒惰省略  需要加许多规则
       Getlogin(this.name,this.password).then(
          response => {
            let res = response.data;
            
            if(res.status=='1'){   //显示登录结果             
            this.$toast.Tshow('登陆成功',2000)
            this.$store.commit('tureerrortip',this.name)
            
            this.$router.push('/profile')

         }else {
           this.$toast.Tshow('登录失败，请检查密码是否正确',2000)

         }
          }
        )
    },
    istered(){
       if(!this.name || !this.password){   //若任意一个参数为空，则返回并提示错误
          this.errortip=true;
          this.errorTip='账号或密码有误';
          return;
         }//这里懒惰省略  需要加许多规则
       Getregistered(this.name,this.password).then(
          response => {
            let res = response.data;
            console.log(res);
            if(res.status=='1'){   //显示登录结果             login
           this.$toast.Tshow('注册成功',2000)
           
         }else {
          this.$toast.Tshow('注册失败，服务器繁忙',2000)

         }
          }
        )
    }
  }
  }
</script>

<style  scoped>
.login {
  position:fixed; 
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100% 100%;
  background-color: var(--color-tint);
  
}
.title{
  color: azure;
  text-align: center;
  margin-top: 120px;
}
.centent{
  width: 300px;
  
  margin: 0 auto;
  margin-top: 50px;
}
.input2{
   margin-top: 20px;
}
.button{
  margin-top: 20px;
  margin-bottom: 8px;

  width: 100%;
}
</style>
