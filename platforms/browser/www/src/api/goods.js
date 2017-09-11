import {request} from './httpconfig.js'


export const HomePageGoodsesApi = (params) => {
  return request({method: 'post', url: '/Goods/HomePageGoodses', data: params})
}

export const GoodsListApi = (params) => {
  return request({method: 'post', url: '/Goods/GoodsList', data: params})
}

export const GoodsInfoApi = (params) => {
  return request({method: 'post', url: '/Goods/GoodsInfo', data: params})
}


export const MgrAllGoodsesApi = (params) => {
  return request({method: 'post', url: '/GoodsStoreAdmin/AllGoodses', data: params})
}




