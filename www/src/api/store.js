import {request} from '../utils/httpconfig.js'

//申请开店
export const ApplyStoreApi = (params) => {
  return request({method: 'post', url: '/Store/ApplyStore', data: params})
}

export const SetAccessCodeApi = (params) => {
  return request({method: 'post', url: '/Store/SetAccessCode', data: params})
}
