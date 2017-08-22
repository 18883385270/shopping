//主页
import home from '../page/home/index.vue'
//公告
import announcementinfo from '../page/home/announcements/info.vue'
//优惠券
import ticket from '../page/ticket/index.vue'

//登录注册
import login from '../page/login/index.vue'
import msglogin from '../page/login/msglogin/index.vue'
import register from '../page/register/index.vue'
import userprotocol from '../page/login/protocol/index.vue'


import offlinestore from '../page/offlinestore/index.vue'
import foundation from '../page/foundation/index.vue'

import store from '../page/store/index.vue'
//受助人
import grantee from '../page/grantee/index.vue'
import granteeinfo from '../page/grantee/granteeinfo/index.vue'
import tohelp from '../page/grantee/granteeinfo/tohelp/index.vue'
//分类
import section from '../page/section/index.vue'
//善心指数
import banevolenceindex from '../page/benevolenceindex/index.vue'
import consumer from '../page/benevolenceindex/consumer/index.vue'
import passer from '../page/benevolenceindex/passer/index.vue'
//传递大使
import ambassador from '../page/benevolenceindex/ambassador/index.vue'
import openambassador from '../page/benevolenceindex/ambassador/open/index.vue'
//善心联盟
import regionpartner from '../page/benevolenceindex/regionpartner/index.vue'
//开店
import storeowner from '../page/benevolenceindex/store/index.vue'
import openstore from '../page/benevolenceindex/store/open/index.vue'
import storeprotocol from '../page/benevolenceindex/store/open/protocol/index.vue';
//商品列表
import goodslist from '../page/goodslist/index.vue'
import goodsinfo from '../page/goodslist/info/index.vue'

import jumppage from '../page/jumppage/index.vue'
//购物车
import cart from '../page/cart/index.vue'
import postorder from '../page/cart/postorder/index.vue'

//我
import me from '../page/me/index.vue'
import profile from '../page/me/profile/index.vue'
import setnickname from '../page/me/profile/nickname/index.vue'
import changepassword from '../page/me/profile/password/index.vue'
import myqrcode from '../page/me/profile/myqrcode/index.vue'
//邀请
import invote from '../page/me/invite/index.vue'
import myinvote from '../page/me/invite/myinvote.vue'

import expressaddress from '../page/me/profile/expressaddress/index.vue'
import addexpressaddress from '../page/me/profile/expressaddress/add/index.vue'

//关于
import about from '../page/about/index.vue'
//讲堂
import classroom from '../page/classroom/index.vue'
//收藏
import collect from '../page/collect/index.vue'

//店铺管理
import storemgr from '../page/storemgr/index.vue'

import storesetting from '../page/storemgr/setting/index.vue'
import storesubjectinfo from '../page/storemgr/setting/subject/info.vue'

import ordermgr from '../page/storemgr/ordermgr/index.vue'
import orderinfomgr from '../page/storemgr/ordermgr/info/index.vue'
import deliver from '../page/storemgr/ordermgr/info/deliver.vue'

import goodsmgr from '../page/storemgr/goodsmgr/index.vue'


//支付
import pay from '../page/pay/index.vue';
import offlinepay from '../page/pay/offlinepay/index.vue';
import addpayinfo from '../page/pay/offlinepay/addpayinfo/index.vue';
import offlinerechargelog from '../page/pay/offlinepay/logs/index.vue';

//成功失败页
import success from '../page/tip/success.vue';
import error from '../page/tip/error.vue';
//身份验证
import verify from '../page/me/verify/index.vue';
import mobileverify from '../page/me/verify/mobile/index.vue';

//钱包
import wallet from '../page/me/wallet/index.vue';
import setpaypasswrod from '../page/me/wallet/setaccesscode/index.vue';

import cardsmgr from '../page/me/wallet/cardsmgr/index.vue';
import addbankcard from '../page/me/wallet/cardsmgr/add/index.vue';

import benevolence from '../page/me/wallet/benevolence/index.vue';
import benevolencetransfer from '../page/me/wallet/benevolence/transfer/index.vue';

import cash from '../page/me/wallet/cash/index.vue';
import withdraw from '../page/me/wallet/cash/withdraw/index.vue';
import withdrawlog from '../page/me/wallet/cash/withdraw/logs/index.vue';
import recharge from '../page/me/wallet/cash/recharge/index.vue';
import onlinerecharge from '../page/me/wallet/cash/recharge/onlinerecharge/index.vue';
import cashtransfer from '../page/me/wallet/cash/transfer/index.vue';

//我的订单
import orders from '../page/me/orders/index.vue';
import orderinfo from '../page/me/orders/info/index.vue';
import applyrefund from '../page/me/orders/info/applyrefund.vue';
import expressinfo from '../page/me/orders/info/expressinfo/index.vue';

const routes=[
    //登录注册
    { name: 'login', path: '/login', component: login },
    { name: 'register', path: '/register', component: register },
    { name: 'msglogin', path: '/login/msglogin', component: msglogin },
    { name: 'userprotocol', path: '/login/protocol', component: userprotocol },
    //支付
    { name: 'pay', path: '/pay', component: pay },
    { name: 'offlinepay', path: '/pay/offlinepay', component: offlinepay },
    { name: 'addpayinfo', path: '/pay/offlinepay/addpayinfo', component: addpayinfo },
    { name: 'offlinerechargelog', path: '/pay/offlinepay/log', component: offlinerechargelog },
    //成功失败页面
    { name: 'success', path: '/tip/success', component: success },
    { name: 'error', path: '/tip/error', component: error },
    //首页
    { name: 'home', path: '/', component: home },
    { name: 'announcementinfo', path: '/announcementinfo', component: announcementinfo },
    //线下商家
    { name: 'offlinestore', path: '/offlinestore', component: offlinestore },
    { name: 'store', path: '/store', component: store },
    //基金
    { name: 'foundation', path: '/foundation', component: foundation },
    //优惠券
    { name: 'ticket', path: '/ticket', component: ticket },
    //受助人
    { name: 'grantee', path: '/grantee', component: grantee },
    { name: 'granteeinfo', path: '/grantee/info', component: granteeinfo },
    { name: 'tohelp', path: '/grantee/info/tohelp', component: tohelp },
    //分类
    { name: 'section', path: '/section', component: section },
    //善心指数
    { name: 'bindex', path: '/bindex', component: banevolenceindex },
    { name: 'consumer', path: '/bindex/consumer', component: consumer },
    { name: 'passer', path: '/bindex/passer', component: passer },
    //传递大厦
    { name: 'ambassador', path: '/bindex/ambassador', component: ambassador },
    { name: 'openambassador', path: '/bindex/ambassador/open', component: openambassador },
    //善心联盟
    { name: 'regionpartner', path: '/bindex/regionpartner', component: regionpartner },
    //开店
    { name: 'storeowner', path: '/bindex/storeowner', component: storeowner },
    { name: 'openstore', path: '/bindex/storeowner/open', component: openstore },
    { name: 'storeprotocol', path: '/bindex/storeowner/open/protocol', component: storeprotocol },
    //购物车
    { name: 'cart', path: '/cart', component: cart },
    { name: 'postorder', path: '/cart/postorder', component: postorder },
    //我
    { name: 'me', path: '/me', component: me },
    { name: 'profile', path: '/me/profile', component: profile },
    { name: 'setnickname', path: '/me/profile/setnickname', component: setnickname },
    { name: 'myqrcode', path: '/me/profile/myqrcode', component: myqrcode },
    
    //邀请
    { name: 'invote', path: '/me/invote', component: invote },
    { name: 'myinvote', path: '/me/myinvote', component: myinvote },
    
    { name: 'changepassword', path: '/me/profile/changepassword', component: changepassword },
    { name: 'expressaddress', path: '/me/profile/expressaddress', component: expressaddress },
    { name: 'addexpressaddress', path: '/me/profile/expressaddress/add', component: addexpressaddress },
    //关于
    { name: 'about', path: '/about', component: about },
    //讲堂
    { name: 'classroom', path: '/classroom', component: classroom },


    //店铺管理
    { name: 'storemgr', path: '/storemgr', component: storemgr },

    { name: 'storesetting', path: '/storemgr/setting', component: storesetting },
    { name: 'storesubjectinfo', path: '/storemgr/setting/subject/info', component: storesubjectinfo },

    { name: 'ordermgr', path: '/storemgr/ordermgr', component: ordermgr },
    { name: 'orderinfomgr', path: '/storemgr/ordermgr/info', component: orderinfomgr },
    { name: 'deliver', path: '/storemgr/ordermgr/info/deliver', component: deliver },

    { name: 'goodsmgr', path: '/storemgr/goodsmgr', component: goodsmgr },


    
    //收藏
    { name: 'collect', path: '/collect', component: collect },
    //身份验证页面
    { name: 'verify', path: '/me/verify', component: verify },
    { name: 'mobileverify', path: '/me/verify/mobile', component: mobileverify },
    //钱包
    { name: 'wallet', path: '/wallet', component: wallet },
    { name: 'setpaypassword', path: '/wallet/setpaypassword', component: setpaypasswrod },
    { name: 'cardsmgr', path: '/wallet/cardsmgr', component: cardsmgr },
    { name: 'addbankcard', path: '/wallet/cardsmgr/add', component: addbankcard },
    { name: 'cash', path: '/wallet/cash', component: cash },
    { name: 'benevolence', path: '/wallet/benevolence', component: benevolence },
    { name: 'withdraw', path: '/wallet/cash/withdraw', component: withdraw },
    { name: 'withdrawlog', path: '/wallet/cash/withdraw/log', component: withdrawlog },
    { name: 'rechareg', path: '/wallet/cash/recharge', component: recharge },
    { name: 'onlinerechareg', path: '/wallet/cash/recharge/onlinerecharge', component: onlinerecharge },
    { name: 'cashtransfer', path: '/wallet/cash/transfer', component: cashtransfer },
    { name: 'benevolencetransfer', path: '/wallet/benevolence/transfer', component: benevolencetransfer },
    //我的订单个人
    { name: 'orders', path: '/orders', component: orders },
    { name: 'orderinfo', path: '/orders/info', component: orderinfo },
    { name: 'applyrefund', path: '/orders/info/applyrefund', component: applyrefund },
    { name: 'expressinfo', path: '/orders/info/expressinfo', component: expressinfo },
    //商品列表
    { name: 'goodslist', path: '/goodslist', component: goodslist },
    { name: 'jumppage', path: '/jumppage', component: jumppage },
    { name: 'goodsinfo', path: '/goodslist/info', component: goodsinfo },



  ]


  export default routes