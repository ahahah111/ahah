<template>
  <el-header class = "el-header">
    <el-row class="me-header">
      <el-col :span="4" class="me-header-left">
        <router-link to="/" class="me-title">
          <img src="../../assets/img_15.png" height="50" width="90"/>
        </router-link>
      </el-col>

      <el-col v-if="!simple" :span="16" >
        <el-menu :router=true menu-trigger="click" active-text-color="#00aaff" :default-active="activeIndex"
                 mode="horizontal"><!--el-form 中mode="horizontal是让NavMenu置于顶部的意思！！！！！！！！！！！！！！-->
                                   <!--el-form 中model的作用：目前看来主要是为了配合表单验证-->
          <el-menu-item index="/kuangjia" >首页</el-menu-item>
          <el-menu-item index="/category/all">文章分类</el-menu-item>
          <el-menu-item index="/tag/all">标签</el-menu-item>
          <el-menu-item index="/archives">文章归档</el-menu-item>

          <el-col :span="4" :offset="4" >
            <el-menu-item index="/write"><i class="el-icon-edit"></i>写文章</el-menu-item>
          </el-col>
        </el-menu>
      </el-col>

      <template v-else>
        <slot></slot>
      </template>

      <el-col :span="4" >
        <el-menu :router=true menu-trigger="click" active-text-color="#00aaff" mode="horizontal"><!--又是mode这个的问题！！！-->
          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button class="el-button" type="text">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="text">注册</el-button>
            </el-menu-item>
          </template>

          <template v-else>
            <el-submenu index>
              <template slot="title">
                <img src="user.avatar" class="me-header-picture" height="500" width="762"/>
              </template>
              <el-menu-item index @click="logout"><i class="el-icon-back"></i>退出</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>


    </el-row>
  </el-header>
</template>


<script>
export default{
  name:'BaseHeader',
  props:{
    activeIndex:String,
    simple:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      user:{
        login:false,
        avatar:""
      }
    }
  },
  computed:{

  },
  methods:{
    logout(){

    }
  }
}
</script>

<style>
.el-button{
  color: #00aaff;

}
.el-header{
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  /*box-shadow:0 2px 3xp hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);*/
}
.me-title{
  margin-top: 10px;
  font-size: 24px;
}
.me-header-left{
  margin-top: 10px;
}
.me-header-picture{
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #00aaff;
}
</style>