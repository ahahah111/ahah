import request from "@/request"

export function register(user){//导出一个对应的register方法
    return request({
        method:'post',
        url:`api/user/registered`,
        data:user
    })
}

export function getUserInfo(user){
    return request({
        method:'get',
        // url:`api/user/updateInformation`
        url:`api/user/registered`,
    })
}

// let base ='/api';//加一个前置请求
//
// //传送json格式的post请求
// export const postRequest = (url,params) =>{
//     return axios({
//         method:'post',
//         url:`${base}${url}`,
//         data:params,
//     })
// }