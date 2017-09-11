import {request} from './httpconfig.js'


export const PaymentAcceptedApi = (params) => {
  return request({method: 'post', url: '/Payment/PaymentAccepted', data: params})
}

export const PaymentRejectedApi = (params) => {
    return request({method: 'post', url: '/Payment/PaymentRejected', data: params})
}


export const WeChatPayApi = (params) => {
  return request({method: 'post', url: '/Payment/WeChatPay', data: params})
}



