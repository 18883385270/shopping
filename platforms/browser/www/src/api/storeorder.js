import {request} from './httpconfig.js'

export const InfoApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/Info', data: params})
}
export const DeliverApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/Deliver', data: params})
}
export const ConfirmDeliverApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/ConfirmDeliver', data: params})
}


export const ApplyRefundApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/ApplyRefund', data: params})
}
export const ApplyReturnAndRefundApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/ApplyReturnAndRefund', data: params})
}
export const AgreeRefundApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/AgreeRefund', data: params})
}
export const AgreeReturnApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/AgreeReturn', data: params})
}

export const UserOrdersApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/UserOrders', data: params})
}
export const StoreOrdersApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/StoreOrders', data: params})
}

export const ExpressScheduleApi = (params) => {
  return request({method: 'post', url: '/StoreOrder/ExpressSchedule', data: params})
}