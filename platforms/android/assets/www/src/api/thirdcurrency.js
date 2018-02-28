import {request} from './httpconfig.js'


export const ThirdCurrencysApi = (params) => {
  return request({method: 'post', url: '/ThirdCurrency/ThirdCurrencys', data: params})
}

export const ImportCurrencyApi = (params) => {
  return request({method: 'post', url: '/ThirdCurrency/ImportCurrency', data: params})
}

export const ImportLogsApi = (params) => {
  return request({method: 'post', url: '/ThirdCurrency/ImportLogs', data: params})
}