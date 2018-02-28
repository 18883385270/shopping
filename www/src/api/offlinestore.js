import {request} from './httpconfig.js'

export const OfflineStoresApi = (params) => {
  return request({method: 'post', url: '/OfflineStore/OfflineStores', data: params})
}

export const MyOfflineStoresApi = (params) => {
  return request({method: 'post', url: '/OfflineStore/MyOfflineStores', data: params})
}

export const AcceptNewSaleApi = (params) => {
  return request({method: 'post', url: '/OfflineStore/AcceptNewSale', data: params})
}

export const InfoApi = (params) => {
  return request({method: 'post', url: '/OfflineStore/Info', data: params})
}