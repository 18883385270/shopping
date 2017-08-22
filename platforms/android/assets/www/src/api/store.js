import {request} from './httpconfig.js'

//申请开店
export const ApplyStoreApi = (params) => {
  return request({method: 'post', url: '/Store/ApplyStore', data: params})
}

export const SetAccessCodeApi = (params) => {
  return request({method: 'post', url: '/Store/SetAccessCode', data: params})
}
//获取店铺信息
export const InfoApi = (params) => {
  return request({method: 'post', url: '/Store/Info', data: params})
}

export const AddGoodsApi = (params) => {
  return request({method: 'post', url: '/Store/AddGoods', data: params})
}

export const AllGoodsesApi = (params) => {
  return request({method: 'post', url: '/Store/AllGoodses', data: params})
}


