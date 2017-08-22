import {request} from './httpconfig.js'

//注册
export const MeInfoApi = (params) => {
  return request({method: 'post', url: '/User/MeInfo', data: params})
}
export const InfoApi = (params) => {
  return request({method: 'post', url: '/User/Info', data: params})
}

//注册
export const RegisterApi = (params) => {
  return request({method: 'post', url: '/User/Register', data: params})
}
//*用户密码登录
export const LoginApi = (params) => {
  return request({method: 'post', url: '/User/Login', data: params})
}
//*退出
export const LogoutApi = (params) => {
  return request({method: 'post', url: '/User/Logout',data:params})
}
//*用户登录
export const MsgLoginApi = (params) => {
  return request({method: 'post', url: '/User/MsgLogin', data: params})
}

//检查手机号是否可用
export const checkPhoneAvailableApi = (params) =>{
  return request({method:'post',url:'/User/CheckPhoneAvailable',data:params})
}
//发送短信验证码
export const SendMsgCodeApi=(params)=>{
  return request({method:'post',url:'User/SendMsgCode',data:params})
}
//验证验证码
export const VerifyMsgCodeApi=(params)=>{
  return request({method:'post',url:'User/VerifyMsgCode',data:params})
}

//改名
export const SetNickNameApi=(params)=>{
  return request({method:'post',url:'User/SetNickName',data:params})
}
export const ChangePasswordApi=(params)=>{
  return request({method:'post',url:'User/ChangePassword',data:params})
}
//改地区
export const SetRegionApi=(params)=>{
  return request({method:'post',url:'User/SetRegion',data:params})
}
//改性别
export const SetGenderApi=(params)=>{
  return request({method:'post',url:'User/SetGender',data:params})
}
//改头像
export const SetPortraitApi=(params)=>{
  return request({method:'post',url:'User/SetPortrait',data:params})
}


export const GetUserExpressAddressesApi=(params)=>{
  return request({method:'post',url:'User/ExpressAddresses',data:params})
}
export const AddExpressAddressApi=(params)=>{
  return request({method:'post',url:'User/AddExpressAddress',data:params})
}
export const DeleteExpressAddressApi=(params)=>{
  return request({method:'post',url:'User/DeleteExpressAddress',data:params})
}

export const AddUserGiftApi=(params)=>{
  return request({method:'post',url:'User/AddUserGift',data:params})
}

export const GetUserUnPayGiftApi=(params)=>{
  return request({method:'post',url:'User/GetUserUnPayGift',data:params})
}
export const SetUserGiftPayedApi=(params)=>{
  return request({method:'post',url:'User/SetUserGiftPayed',data:params})
}