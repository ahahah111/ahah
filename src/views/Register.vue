<template>
  <div id="register" v-title data-title="注册 - 大王叫我来巡山">
    <div class="me-login-box me-login-box-radius">
      <h1>注册</h1>
      <el-form ref="userForm" :model="userForm" :rules="rules">
        <el-form-item prop="customer_name">
          <el-input placeholder="昵称" v-model="userForm.customer_name"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input placeholder="用户名" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" v-model="userForm.password"></el-input><!--双向数据绑定-->
        </el-form-item>
        <el-form-item prop="gender">
          <el-input placeholder="性别" v-model="userForm.gender"></el-input>
        </el-form-item>
        <el-form-item size="small" class="me-login-button">
              <!--给vue组件绑定事件时候，组件加上.native才能监听原生事件,prevent 是用来阻止默认的-->
          <el-button type="primary" @click.native.prevent="register('userForm')">注册</el-button>
<!--          <el-button type="primary" @click="register(userForm)">注册</el-button>-->
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      userForm:{
        customer_name:"",/////唯一的
        name:"weed现在",
        gender:'男',
        password:"231234",
      },
      rules:{////规则应该是数组,给暴露出去（prop）的属性用
        customer_name:[/////唯一的
            {required: true,message:'请输入账号名称（唯一的）',trigger:'blur'},
            {max:15,message: '长度不能大于15个字符',trigger: 'blur'}
          ],
        name:[///可重复
          {required: true,message:'请输入昵称',trigger:'blur'},
          {max:10,message: '长度不能大于10个字符',trigger: 'blur'}
        ],
        password:[
          {required: true,message:'请输入密码',trigger:'blur'},
          {min:5,max:10,message: '长度在5到10个字符之间',trigger: 'blur'}
        ],
        gender:[
          {required: true,message:'请输入性别',trigger:'blur'}
        ]
       }
    }
  },
  methods:{
    //register(formName){
      register:function (){
      this.$refs['userForm'].validate((valid)=>{//检验上面的rules是否符合
        if(valid){
          //注册逻辑
          //1、请求后端接口进行注册
          //2、注册完成之后，后端返回一个token令牌
          //3、前端进行token的存储，并且其它组件也能使用
          // this.$store.dispatch('register',this.userForm).then(()=>{///这里的postRequest是指调用store目录下的index.js中存储用户的actions的postRequest方法！！！！！
            this.$store.dispatch('register',this.userForm).then(()=>{///调取store里的index.js的register方法，从而要更新
            this.$message({message:'注册成功 快写文章吧',type:'success',showClose:true})
            this.$router.push({path:'/home'})
          }).catch((error)=>{
            if(error !== 'error'){
              alert(JSON.stringify(valid));
              this.$message({message:error,type:'error',showClose:true});
            }
          });
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
#login{
  min-width: 100%;
  min-height: 100%;
}
.me-video-player{
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: absolute;
  left: 0;
  z-index: 0;
  top: 0;
}
.me-login-box{
  position: absolute;
  width: 300px;
  height: 320px;
  background-color: white;
  margin-top: 150px;
  margin-left: -180px;
  left: 50%;
  padding: 30px;
}
.me-login-box-radius{
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(161,159,159,0.1);
}
.me-login-box h1{
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  vertical-align: middle;
}
.me-login-design{
  text-align: center;
  font-family: "Open Sans",sans-serif;
  font-size: 18px;
}
.me-login-design-color{
  color: #5FB878;
}
.me-login-button{
  text-align: center;
}
.me-login-button button{
  width: 100%;
}
</style>