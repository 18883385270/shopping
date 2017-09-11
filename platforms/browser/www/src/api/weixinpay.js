import {request} from './httpconfig.js'


export const GetPayParamsApi = (params) => {
  return request({method: 'get', url: '/Pages/JsApiPayPage.aspx', data: params})
}