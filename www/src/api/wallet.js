import {request} from '../utils/httpconfig.js'

//钱包信息
export const InfoApi = (params) => {
  return request({method: 'post', url: '/Wallet/Info', data: params})
}

export const BankCardsApi = (params) => {
  return request({method: 'post', url: '/Wallet/BankCards', data: params})
}
export const AddBankCardApi = (params) => {
  return request({method: 'post', url: '/Wallet/AddBankCard', data: params})
}
export const DeleteBankCardApi = (params) => {
  return request({method: 'post', url: '/Wallet/DeleteBankCard', data: params})
}
export const SetAccessCodeApi = (params) => {
  return request({method: 'post', url: '/Wallet/SetAccessCode', data: params})
}

export const CashPayApi = (params) => {
  return request({method: 'post', url: '/Wallet/CashPay', data: params})
}

export const RechargeApi = (params) => {
  return request({method: 'post', url: '/Wallet/Recharge', data: params})
}

export const CashTransfersApi = (params) => {
  return request({method: 'post', url: '/Wallet/CashTransfers', data: params})
}

export const BenevolenceTransfersApi = (params) => {
  return request({method: 'post', url: '/Wallet/BenevolenceTransfers', data: params})
}