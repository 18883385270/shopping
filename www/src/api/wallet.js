import {request} from './httpconfig.js'

//钱包信息
export const InfoApi = (params) => {
  return request({method: 'post', url: '/Wallet/Info', data: params})
}
//获取银行卡列表
export const BankCardsApi = (params) => {
  return request({method: 'post', url: '/Wallet/BankCards', data: params})
}
//添加银行卡
export const AddBankCardApi = (params) => {
  return request({method: 'post', url: '/Wallet/AddBankCard', data: params})
}
//删除银行卡
export const DeleteBankCardApi = (params) => {
  return request({method: 'post', url: '/Wallet/DeleteBankCard', data: params})
}
//设置支付密码
export const SetAccessCodeApi = (params) => {
  return request({method: 'post', url: '/Wallet/SetAccessCode', data: params})
}

//余额支付
export const CashPayApi = (params) => {
  return request({method: 'post', url: '/Wallet/CashPay', data: params})
}

//线上充值
export const RechargeApi = (params) => {
  return request({method: 'post', url: '/Wallet/Recharge', data: params})
}
//余额记录
export const CashTransfersApi = (params) => {
  return request({method: 'post', url: '/Wallet/CashTransfers', data: params})
}
//善心记录
export const BenevolenceTransfersApi = (params) => {
  return request({method: 'post', url: '/Wallet/BenevolenceTransfers', data: params})
}

//申请提现
export const ApplyWithdrawApi = (params) => {
  return request({method: 'post', url: '/Wallet/ApplyWithdraw', data: params})
}
//提现申请记录
export const WithdrawApplyLogsApi = (params) => {
  return request({method: 'post', url: '/Wallet/WithdrawApplyLogs', data: params})
}

//线下充值
export const ApplyRechargeApi = (params) => {
  return request({method: 'post', url: '/Wallet/ApplyRecharge', data: params})
}
//线下充值记录
export const RechargeApplyLogsApi = (params) => {
  return request({method: 'post', url: '/Wallet/RechargeApplyLogs', data: params})
}

export const AcceptTransferApi = (params) => {
  return request({method: 'post', url: '/Wallet/AcceptTransfer', data: params})
}

export const IncentiveLogsApi = (params) => {
  return request({method: 'post', url: '/Wallet/IncentiveLogs', data: params})
}