
<template>
  <div>
     <el-form :rules="rules"
              v-loading = "loading"
              element-loading-text = "正在登录..."
              element-loading-spinner = "el-icon-loading"
              element-loading-background = "rgba(0,0,0,0.8)"
              ref="loginForm"
              :model="loginForm"
              class="loginContainer">
          <h3 class="loginTitle">系统登录</h3>
          <el-form-item prop="customer_name">
            <el-input type="text" auto-complete="false" v-model="loginForm.customer_name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
<!--          <el-form-item prop="yanzhengma">-->
<!--            <el-input type="text" style="width: 250px;margin-right: 5px" auto-complete="false" v-model="loginForm.yanzhengma" placeholder="点击图片更换验证码"></el-input>-->

<!--          <img :src="captchaUrl" @click="updateCaptcha" class="el-form-item__content">-->
<!--          </el-form-item>-->
          <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
          <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
     </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      captchaUrl:'/captcha?time='+new Date(),
      loginForm:{
        customer_name:'687fgj',
        password:'123',
        // yanzhengma:'11'///验证码
      },
      loading:false,
      checked:true,
      rules:{
        customer_name: [{required:true,message:'请输入用户名',trigger:'blur'}],
        password: [{required:true,message:'请输入密码',trigger:'blur'}],
        // yanzhengma: [{required:true,message:'请输入验证码',trigger:'blur'}]
      }
    }
  },
  methods:{
    //验证码
    // updateCaptcha(){
    //   this.captchaUrl = '/captcha?time='+new Date();
    // },
    submitLogin(){
      this.$refs.loginForm.validate((valid) =>{
        if(valid){
            this.loading = true;
            this.postRequest('/user/login',this.loginForm).then(resp=>{
            if(resp){//resp 后端返回的接收对象
              //存储用户token
              this.loading = false;
              const tokenStr =  resp.user.customer_name+ resp.user.name;
              window.sessionStorage.setItem('tokenStr',tokenStr);
              this.$router.replace('kuangjia')//不可以返回上一页
              // alert(JSON.stringify(resp));//将后端返回的东西转换出
            }
          })
        }else {
          this.$message.error('请输入所有信息！！！！')
          return false;
        }
      });
    }
  }
}
</script>

<style>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
  margin: 0px auto 40px auto;
  text-align: center;
}
.loginRemember{
  text-align: left;
  margin: 0px 0px 15px 0px;
}
.el-form-item__content{
  display: flex;
  align-items:center;
}
</style>