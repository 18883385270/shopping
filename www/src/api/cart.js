import {request} from './httpconfig.js'


export const InfoApi = (params) => {
  return request({method: 'post', url: '/Cart/Info', data: params})
}

export const AddCartGoodsApi = (params) => {
  return request({method: 'post', url: '/Cart/AddCartGoods', data: params})
}

export const RemoveCartGoodsApi = (params) => {
  return request({method: 'post', url: '/Cart/RemoveCartGoods', data: params})
}

