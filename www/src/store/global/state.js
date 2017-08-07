import Storage from '../../utils/localstorage'


const state = {
    ajax_loading: false,
    token:Storage.get('token') || {},//用户Token
    userinfo:Storage.get('userinfo') || {},//用户信息
    walletinfo:Storage.get('walletinfo') || {} //钱包信息
}

export default state
