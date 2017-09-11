import {request} from './httpconfig.js'

//类别树
export const CategoryTreeApi = (params) => {
  return request({method: 'post', url: '/Category/CategoryTree', data: params})
}

