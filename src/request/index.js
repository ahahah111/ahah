import axios from "axios";
import store from '@/store'
import {Message} from 'element-ui'

const service = axios.create({
    baseURL:'http://localhost:8080',//请求的本机的公共地址
    timeout:10000
})
export default service;

//请求拦截器
service.interceptors.request.use(function (config){
    //如果存在token,请求携带这个token
    if(store.state.token){
        config.headers['Authorization'] = localStorage.token
    }
    return config;
},function (error){
    return Promise.reject(error)
});

//响应拦截器
service.interceptors.response.use(function (response){
    //对响应数据做点什么
    const res = response.data;

    //0为成功状态
    if(res.code !== 200){

        //20001用户未登录
        if (res.code === 90002){
            Message({
                type:'warning',
                showClose:true,
                message:'未登录或登录超时'
            })
            return Promise.reject('error');
        }
    }
    return response;
},function (error){
    //对响应拦截器做点什么
    return Promise.reject(error);
});
