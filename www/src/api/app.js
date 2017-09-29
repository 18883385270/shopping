import {request} from './httpconfig.js'


export const CheckVersionApi = (params) => {
  return request({method: 'post', url: '/App/CheckVersion', data: params})
}

export const HomeBannerApi = (params) => {
  return request({method: 'post', url: '/App/HomeBanner', data: params})
}