import  axios from 'axios'
import {Message} from "element-ui";
import router from '../router';


//请求拦截器
axios.interceptors.request.use(config =>{
    //如果存在token,请求携带这个token
    if(window.sessionStorage.getItem('tokenStr')){
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
    }
    return config;
},error=>{
    console.log(error);
})


////响应拦截器
axios.interceptors.response.use(success =>{//可以访问接口
    //业务逻辑错误
    if(success.status && success.status == 200){//可以拿到后端的接口
         //业务逻辑错误                    未登录                       权限禁止
        if(success.data.code == 500 ||success.data.code == 401||success.data.code == 403){
            Message.error({message:success.data.message});
           // alert('未登录权限禁止');
            return;
        }
        if (success.data.code == -1){
            Message.error("用户名不存在！！！");
            return ;
        }
        if (success.data.code == 10001){
            Message.error("密码错误！！！");
            return ;
        }
        if(success.data.message){//有返回信息，即成功调用接口
            Message.success({message:success.data.message});
            // alert("/有返回信息，即成功调用接口'")
        }
    }
    return success.data;
},  error => {//不可以访问接口
    if(error.response.code==504||error.response.code==404){
        Message.error({message:'服务器丢失了'});
    }
    else if(error.response.code==403){
        Message.error({message:'权限不足，请联系管理员！'});
    }
    else if(error.response.code==401){
        Message.error({message:'尚未登录，请登录！'});
        router.replace('/');////页面跳转到登陆页面，，，，‘/’表示登录页
    }else{
        if (error.response.data.message){
            Message.error({message:error.response.data.message});
        }else {
            Message.error({message:'未知信息！！'})
            // Message.error({message:error.response.data.message})
        }
    }
    return;
});

let base ='/api';//加一个前置请求

//传送json格式的post请求
export const postRequest = (url,params) =>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params,
    })
}

//传送Json的put请求
export const putRequest = (url,params) =>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params,
    })
}
//传送Json的get请求
export const getRequest = (url,params) =>{
    return axios({
        method:'get',
        url:`${base}${url}`,
        data:params,
    })
}
//传送Json的delete请求
export const deleteRequest = (url,params) =>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
        data:params,
    })
}