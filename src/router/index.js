import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import store from '@/store'
import KuangJia from "@/KuangJia";
import {Message} from "element-ui";
import el from "element-ui/src/locale/lang/el";

Vue.use(VueRouter)

const routes = [
    //第一个视频的路径
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // }
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/kuangjia',
    name: 'KunagJia',
    component: KuangJia,
    children:[//子页面
        {
          path: '/',
          component:r => require.ensure([],()=>r(require('@/views/Home')),'home')
        },
      ]
  },
  //注册
  {
    path: '/register',
    name: 'register',
    component:r => require.ensure([],()=>r(require('@/views/Register')),'register')
  }

  //第二个视频
  // {
  //   path:'',
  //   name:'KunagJia',
  //   component:KuangJia,
  //   children:[
  //     {
  //       path: '/',
  //       component:r => require.ensure([],()=>r(require('@/views/Home')),'home')
  //     },
  //   ],
  // }

]

const router = new VueRouter({
  routes
})

//
// //没有实现
// /////实现导航守卫
// router.beforeEach((to,from,next)=>{
//   if (store.state.token){
//     //路径如果是请求的login登录页面，如果存在token,直接跳回首页
//     if (to.path=='/login'){
//       next({path:'/'})
//     }else {
//       //如果存在token,证明用户登录过
//       //是否有账号信息，如果没有，获取用户信息
//       if (store.state.customer_name.length == 0){
//         //需要获取用户信息
//         store.dispatch('getUserInfo').then((res)=>{
//           next();
//         }).catch((error)=>{
//           Message({
//             type:'warning',
//             showClose:true,
//             message:'登录已过期'
//           });
//           alert(to.path);
//           next({path:'/login'})
//         })
//       }else {
//         //不需要
//         next();
//       }
//     }
//   }else {
//     if (to.matched.some(r => r.meta.requireLogin)){
//       Message({
//         type:'warning',
//         showClose:true,
//         message:'请先登录！！！！'
//       })
//     }else{
//       next();
//     }
//   }
// })
//


export default router
