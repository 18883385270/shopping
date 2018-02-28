import {request} from './httpconfig.js'


export const InfoApi = (params) => {
  return request({method: 'post', url: '/BenevolenceIndex/Info', data: params})
}

export const BenevolenceRankApi = (params) => {
  return request({method: 'post', url: '/BenevolenceIndex/BenevolenceRank', data: params})
}