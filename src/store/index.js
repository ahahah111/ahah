import Vue from 'vue'
import Vuex from 'vuex'
import {register,getUserInfo} from "@/api/login"
Vue.use(Vuex)//全局安装Vuex

export default new Vuex.Store({////创建了store容器,,,即存储数据
    state:{//用户的信息状态
        id:'',
        customer_name:'',
        name: '',
        gender:'',
        token:localStorage.token,
    },
    mutations:{//变化//就是存储token,account,name等的意思
        SET_TOKEN(state, token) {//（1）第一种写法
            state.token = token;
        },
        SET_ACCOUNT:(state,customer_name)=>{//（2）第二种写法
            state.customer_name = customer_name
        },
        SET_NAME:(state,name)=>{
            state.name = name
        },
        SET_AVATAR:(state,gender)=>{
            state.gender = gender
        },
        SET_ID:(state,id)=>{
            state.id = id
        }
    },
    actions:{
        register({commit},user){
            //Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息
            //rejected:意味着操作失败
            return new Promise((resolve,reject)=>{
                //异步处理
                //处理结束后,调用resolve或reject
                //当异步代码执行成功时，我们才会调用resolve,失败时调用reject
                register(user).then((resp)=>{
                    // alert(JSON.stringify(resp.data));
                    // alert("!!!!!!1111")
                    if(resp.data.message=='注册成功 这里应该跳转页面到 个人页面'){
                        alert("成功")
                        commit('SET_TOKEN',resp.data.data)
                        localStorage.token = resp.data.data///存储到本地存储
                        resolve()
                    }else {
                        reject(resp.data.msg),
                            alert("失败")
                    }
                }).catch((error)=>{
                    reject(error)
                })
            })
        },
        getUserInfo({commit}){
            //Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息
            //rejected:意味着操作失败
            return new Promise((resolve,reject)=>{
                //异步处理
                //处理结束后,调用resolve或reject
                //当异步代码执行成功时，我们才会调用resolve,失败时调用reject
                getUserInfo().then((resp)=>{
                    // alert(JSON.stringify(resp.data));
                    // alert("!!!!!!1111")
                    if(resp.data.success){//获取成功
                        commit('SET_customer_name',resp.data.data.customer_name);
                        commit('SET_name',resp.data.data.name);
                        commit('SET_gender',resp.data.data.gender);
                        commit('SET_id',resp.data.data.id);
                        localStorage.token = resp.data.data///存储到本地存储
                        resolve(resp.data)
                    }else {//失败
                        commit('SET_customer_name','');
                        commit('SET_name','');
                        commit('SET_gender','');
                        commit('SET_id','');
                        commit('SET_TOKEN','');
                        reject(resp.data.msg)
                    }
                }).catch((error)=>{
                    commit('SET_customer_name','');
                    commit('SET_name','');
                    commit('SET_gender','');
                    commit('SET_id','');
                    commit('SET_TOKEN','');
                    reject(error)
                })
            })
        }
    }
})