import {request} from './httpconfig.js'


export const MyPartnersApi = (params) => {
  return request({method: 'post', url: '/Partner/MyPartners', data: params})
}