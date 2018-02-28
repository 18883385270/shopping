import {request} from './httpconfig.js'

export const HomeGoodsBlockWarpsApi = (params) => {
  return request({method: 'post', url: '/GoodsBlock/HomeGoodsBlockWarps', data: params})
}

export const InfoApi = (params) => {
  return request({method: 'post', url: '/GoodsBlock/Info', data: params})
}
