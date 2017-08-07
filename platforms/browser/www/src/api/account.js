import {request} from '../utils/httpconfig.js'




//注册
export const registerApi = (params) => {
  return request({method: 'post', url: '/User/Register', data: params})
}



//*用户密码登录
export const loginApi = (params) => {
  return request({method: 'post', url: '/User/Login', data: params})
}

//*用户登录
export const msgLoginApi = (params) => {
  return request({method: 'post', url: '/User/MsgLogin', data: params})
}

//检查手机号是否可用
export const checkPhoneAvailableApi = (params) =>{
  return request({method:'post',url:'/User/CheckPhoneAvailable',data:params})
}

//发送短信验证码
export const sendMsgCodeApi=(params)=>{
  return request({method:'post',url:'User/SendMsgCode',data:params})
}


