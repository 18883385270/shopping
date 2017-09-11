import {request} from './httpconfig.js'


export const AddApi = (params) => {
  return request({method: 'post', url: '/Order/Add', data: params})
}

