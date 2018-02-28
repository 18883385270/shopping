//主页
import home from '../page/home/index.vue'
  import goodsblockinfo from '../page/home/goodsblock/info.vue'

//搜索页
import search from '../page/search/index.vue'

//公告

import announcements from '../page/benevolenceindex/announcements/index.vue'
import announcementinfo from '../page/benevolenceindex/announcements/info.vue'

//优惠券
import ticket from '../page/ticket/index.vue'

//登录注册
import login from '../page/login/index.vue'
import msglogin from '../page/login/msglogin/index.vue'
import getpwd from '../page/login/getpwd/index.vue'
import resetpwd from '../page/login/getpwd/resetpwd.vue'
import register from '../page/register/index.vue'
import reg from '../page/register/reg.vue'
import userprotocol from '../page/login/protocol/index.vue'

//线下商家
import offlinestore from '../page/offlinestore/index.vue'
import spend from '../page/offlinestore/spend.vue'



//店铺主页
import store from '../page/store/index.vue'
import subject from '../page/store/subject.vue'


//分类
import section from '../page/section/index.vue'
  //商品列表
  import goodslist from '../page/section/goodslist/index.vue'
  import goodsinfo from '../page/section/goodslist/info/index.vue'
  import jumppage from '../page/section/jumppage/index.vue'

//善心指数
import banevolenceindex from '../page/benevolenceindex/bindex/index.vue'
import myrole from '../page/benevolenceindex/index.vue'
import myrights from '../page/benevolenceindex/myrights.vue'
  import benevolencerank from '../page/benevolenceindex/rank/benevolencerank.vue'
//区域代理
import regionpartner from '../page/benevolenceindex/regionpartner/index.vue'
//开店
import storeowner from '../page/benevolenceindex/store/index.vue'
  import openstore from '../page/benevolenceindex/store/open/index.vue'
    import storeprotocol from '../page/benevolenceindex/store/open/protocol/index.vue'




//购物车
import cart from '../page/cart/index.vue'
  import postorder from '../page/cart/postorder/index.vue'


//我
import me from '../page/me/index.vue'
  import profile from '../page/me/profile/index.vue'
  import setnickname from '../page/me/profile/nickname/index.vue'
  import changepassword from '../page/me/profile/password/index.vue'
  
  import kefu from '../page/me/kefu/index.vue'
  //用户详情
  import userinfo from '../page/userinfo/index.vue'
  //线下商家管理
  import offlinestoremgr from '../page/me/offlinestoremgr/index.vue'
  import myofflinestore from '../page/me/offlinestoremgr/myofflinestore.vue'
  import payeecode from '../page/me/offlinestoremgr/payeecode.vue'
  //邀请
  import invote from '../page/benevolenceindex/invite/index.vue'
  import myinvote from '../page/benevolenceindex/invite/myinvote.vue'
  import setmyinvote from '../page/benevolenceindex/invite/setmyinvote.vue'
  import faceinvote from '../page/benevolenceindex/invite/faceinvote.vue'
  
  import expressaddress from '../page/me/profile/expressaddress/index.vue'
  import addexpressaddress from '../page/me/profile/expressaddress/add/index.vue'
  //身份验证
  import verify from '../page/me/verify/index.vue'
  import mobileverify from '../page/me/verify/mobile/index.vue'
  //联盟管理
  import partnermgr from '../page/me/partnermgr/index.vue'
  import mypartner from '../page/me/partnermgr/mypartner.vue'
  //通知
  import notifications from '../page/me/notifications/index.vue'
  //店铺管理
  import storemgr from '../page/me/storemgr/index.vue'
  import myonlinestore from '../page/me/storemgr/mystore.vue'
    import storesetting from '../page/me/storemgr/setting/index.vue'
    import storesubjectinfo from '../page/me/storemgr/setting/subject/info.vue'
  import ordermgr from '../page/me/storemgr/ordermgr/index.vue'
    import orderinfomgr from '../page/me/storemgr/ordermgr/info/index.vue'
    import deliver from '../page/me/storemgr/ordermgr/info/deliver.vue'
  import goodsmgr from '../page/me/storemgr/goodsmgr/index.vue'



  //钱包
  import wallet from '../page/me/wallet/index.vue'
  import setpaypasswrod from '../page/me/wallet/setaccesscode/index.vue'
  import myqrcode from '../page/me/wallet/myqrcode/index.vue'
  import cardsmgr from '../page/me/wallet/cardsmgr/index.vue'
  import addbankcard from '../page/me/wallet/cardsmgr/add/index.vue'
  import benevolence from '../page/me/wallet/benevolence/index.vue'
  import benevolencetransfers from '../page/me/wallet/benevolence/transfers/index.vue'
  import whatbenevolence from '../page/me/wallet/benevolence/whatbenevolence.vue'
  import cash from '../page/me/wallet/cash/index.vue'

  import shopcash from '../page/me/wallet/shopcash/index.vue'
  import thirdcurrencyinfo from '../page/me/wallet/shopcash/thirdcurrency/index.vue'
  import thirdcurrencyimport from '../page/me/wallet/shopcash/thirdcurrency/import.vue'
  import thirdcurrencyimportlogs from '../page/me/wallet/shopcash/thirdcurrency/importlogs.vue'
  import withdraw from '../page/me/wallet/cash/withdraw/index.vue'
  import withdrawlog from '../page/me/wallet/cash/withdraw/logs/index.vue'
  import recharge from '../page/me/wallet/cash/recharge/index.vue'
  import onlinerecharge from '../page/me/wallet/cash/recharge/onlinerecharge/index.vue'
  import cashtransfers from '../page/me/wallet/cash/transfers/index.vue'
  import shopcashtransfers from '../page/me/wallet/shopcash/transfers/index.vue'
  import cashtransfer from '../page/me/wallet/cash/transfer/index.vue'
  import incentive from '../page/me/wallet/incentive/index.vue'
  import award from '../page/me/wallet/incentive/award.vue'
  //我的订单
  import orders from '../page/me/orders/index.vue'
  import orderinfo from '../page/me/orders/info/index.vue'
  import orderservice from '../page/me/orders/info/orderservice.vue'
  import applyrefund from '../page/me/orders/info/applyrefund.vue'
  import applyreturnandrefund from '../page/me/orders/info/applyreturnandrefund.vue'
  import refundinfo from '../page/me/orders/info/refundinfo.vue'
  import returnandrefundinfo from '../page/me/orders/info/returnandrefundinfo.vue'
  import returndeliver from '../page/me/orders/info/returndeliver.vue'
  import expressinfo from '../page/me/orders/info/expressinfo/index.vue'
  import comment from '../page/me/orders/info/comment.vue'

//扫一扫
import scannerpage from '../page/scannerpage/index.vue'
import scannerresult from '../page/scannerpage/scannerresult.vue'
import browser from '../page/scannerpage/browser.vue'

//成功失败页
import success from '../page/tip/success.vue'
import error from '../page/tip/error.vue'

//支付
import pay from '../page/pay/index.vue'
  import offlinepay from '../page/pay/offlinepay/index.vue'
    import offlinerechargelog from '../page/pay/offlinepay/logs/index.vue'
    import addpayinfo from '../page/pay/offlinepay/addpayinfo/index.vue'


const routes=[
    //商品簇
    { name: 'goodsblockinfo', path: '/goodsblockinfo/:id', component: goodsblockinfo,meta: { keepAlive: false},props:true },
    { name: 'search', path: '/search', component: search ,meta: { keepAlive: false}},
    //登录注册
    { name: 'login', path: '/login', component: login,meta: { keepAlive: false} },
    { name: 'register', path: '/register', component: register,meta: { keepAlive: false} },
    { name: 'reg', path: '/reg/:parentId', component: reg,meta: { keepAlive: false},props:true },
    { name: 'msglogin', path: '/login/msglogin', component: msglogin,meta: { keepAlive: false} },
    { name: 'getpwd', path: '/login/getpwd', component: getpwd,meta: { keepAlive: false} },
    { name: 'resetpwd', path: '/login/resetpwd', component: resetpwd,meta: { keepAlive: false} },
    { name: 'userprotocol', path: '/login/protocol', component: userprotocol,meta: { keepAlive: false} },
    //扫一扫
    { name: 'scannerpage', path: '/scannerpage', component: scannerpage,meta: { keepAlive: false} },
    { name: 'scannerresult', path: '/scannerresult', component: scannerresult,meta: { keepAlive: false} },
    { name: 'browser', path: '/browser', component: browser,meta: { keepAlive: false} },
    //支付
    { name: 'pay', path: '/pay', component: pay,meta: { keepAlive: false} },
    { name: 'offlinepay', path: '/pay/offlinepay', component: offlinepay,meta: { keepAlive: false} },
    { name: 'addpayinfo', path: '/pay/offlinepay/addpayinfo', component: addpayinfo,meta: { keepAlive: false} },
    { name: 'offlinerechargelog', path: '/pay/offlinepay/log', component: offlinerechargelog,meta: { keepAlive: false} },
    //成功失败页面
    { name: 'success', path: '/tip/success', component: success,meta: { keepAlive: false} },
    { name: 'error', path: '/tip/error', component: error,meta: { keepAlive: false} },
    //首页
    { name: 'home', path: '/', component: home,meta: { keepAlive: false} },
    { name: 'announcements', path: '/announcements', component: announcements ,meta: { keepAlive: false}},
    { name: 'announcementinfo', path: '/announcementinfo', component: announcementinfo ,meta: { keepAlive: false}},
    //线下商家
    { name: 'offlinestore', path: '/offlinestore', component: offlinestore,meta: { keepAlive: false} },
    { name: 'spend', path: '/spend', component: spend ,meta: { keepAlive: false}},
    
    //店铺主页
    { name: 'store', path: '/store/:id', component: store ,meta: { keepAlive: false},props:true},
    { name: 'subject', path: '/store/subject/:id', component: subject ,meta: { keepAlive: false},props:true},
    //基金
    { name: 'foundation', path: '/foundation', component: foundation ,meta: { keepAlive: false}},
    //优惠券
    { name: 'ticket', path: '/ticket', component: ticket ,meta: { keepAlive: false}},
    //分类
    { name: 'section', path: '/section', component: section,meta: { keepAlive: false} },
      //商品列表
      { name: 'goodslist', path: '/section/goodslist', component: goodslist,meta: { keepAlive: false} },
      { name: 'jumppage', path: '/section/jumppage', component: jumppage ,meta: { keepAlive: false}},
      { name: 'goodsinfo', path: '/section/goodslist/info/:id', component: goodsinfo ,meta: { keepAlive: false}, props: true},
    
    
    //善心指数
    { name: 'bindex', path: '/bindex', component: banevolenceindex ,meta: { keepAlive: false}},
    { name: 'myrole', path: '/myrole', component: myrole ,meta: { keepAlive: false}},
    { name: 'myrights', path: '/bindex/myrights', component: myrights ,meta: { keepAlive: false}},
    { name: 'benevolencerank', path: '/bindex/benevolencerank', component: benevolencerank,meta: { keepAlive: false} },
    { name: 'regionpartner', path: '/bindex/regionpartner', component: regionpartner,meta: { keepAlive: false} },
    //开店
    { name: 'storeowner', path: '/bindex/storeowner', component: storeowner,meta: { keepAlive: false} },
    { name: 'openstore', path: '/bindex/storeowner/open', component: openstore,meta: { keepAlive: false} },
    { name: 'storeprotocol', path: '/bindex/storeowner/open/protocol', component: storeprotocol,meta: { keepAlive: false} },
    
    
    //购物车
    { name: 'cart', path: '/cart', component: cart,meta: { keepAlive: false} },
    { name: 'postorder', path: '/cart/postorder', component: postorder ,meta: { keepAlive: false}},
    //我
    { name: 'me', path: '/me', component: me,meta: { keepAlive: false} },
    { name: 'profile', path: '/me/profile', component: profile ,meta: { keepAlive: false}},
      { name: 'setnickname', path: '/me/profile/setnickname', component: setnickname,meta: { keepAlive: false} },
      { name: 'changepassword', path: '/me/profile/changepassword', component: changepassword,meta: { keepAlive: false} },
      { name: 'expressaddress', path: '/me/profile/expressaddress', component: expressaddress ,meta: { keepAlive: false}},
      { name: 'addexpressaddress', path: '/me/profile/expressaddress/add', component: addexpressaddress,meta: { keepAlive: false} },

    //我的线下商家
    { name: 'offlinestoremgr', path: '/me/offlinestoremgr', component: offlinestoremgr ,meta: { keepAlive: false}},
    { name: 'myofflinestore', path: '/me/myofflinestore', component: myofflinestore ,meta: { keepAlive: false}},
    { name: 'payeecode', path: '/me/offlinestoremgr/payeecode', component: payeecode ,meta: { keepAlive: false}},
    //用户页面
    { name: 'userinfo', path: '/userinfo', component: userinfo,meta: { keepAlive: false} },
    //邀请
    { name: 'invote', path: '/bindex/invote', component: invote,meta: { keepAlive: false} },
    { name: 'myinvote', path: '/bindex/myinvote', component: myinvote ,meta: { keepAlive: false}},
    { name: 'setmyinvote', path: '/bindex/setmyinvote', component: setmyinvote ,meta: { keepAlive: false}},
    { name: 'faceinvote', path: '/bindex/faceinvote', component: faceinvote ,meta: { keepAlive: false}},
    
    //关于
    { name: 'kefu', path: '/me/kefu', component: kefu ,meta: { keepAlive: false}},
    //讲堂
    { name: 'classroom', path: '/me/classroom', component: classroom,meta: { keepAlive: false} },
    //代理管理
    { name: 'partnermgr', path: '/me/partnermgr', component: partnermgr,meta: { keepAlive: false} },
    { name: 'mypartner', path: '/me/mypartner', component: mypartner,meta: { keepAlive: false} },
    //店铺管理
    { name: 'storemgr', path: '/me/storemgr', component: storemgr ,meta: { keepAlive: false}},
    { name: 'myonlinestore', path: '/me/myonlinestore', component: myonlinestore ,meta: { keepAlive: false}},
    { name: 'storesetting', path: '/me/storemgr/setting', component: storesetting ,meta: { keepAlive: false}},
    { name: 'storesubjectinfo', path: '/me/storemgr/setting/subject/info', component: storesubjectinfo ,meta: { keepAlive: false}},
    { name: 'ordermgr', path: '/me/storemgr/ordermgr', component: ordermgr ,meta: { keepAlive: false}},
    { name: 'orderinfomgr', path: '/me/storemgr/ordermgr/info', component: orderinfomgr,meta: { keepAlive: false} },
    { name: 'deliver', path: '/me/storemgr/ordermgr/info/deliver', component: deliver ,meta: { keepAlive: false}},
    { name: 'goodsmgr', path: '/me/storemgr/goodsmgr', component: goodsmgr,meta: { keepAlive: false} },
    { name: 'notifications', path: '/me/notifications', component: notifications,meta: { keepAlive: false} },
    //身份验证页面
    { name: 'verify', path: '/me/verify', component: verify ,meta: { keepAlive: false}},
    { name: 'mobileverify', path: '/me/verify/mobile', component: mobileverify ,meta: { keepAlive: false}},
    //钱包
    { name: 'wallet', path: '/me/wallet', component: wallet ,meta: { keepAlive: false}},
      { name: 'setpaypassword', path: '/me/wallet/setpaypassword', component: setpaypasswrod,meta: { keepAlive: false} },
      { name: 'myqrcode', path: '/me/wallet/myqrcode', component: myqrcode,meta: { keepAlive: false} },
      { name: 'cardsmgr', path: '/me/wallet/cardsmgr', component: cardsmgr,meta: { keepAlive: false} },
        { name: 'addbankcard', path: '/me/wallet/cardsmgr/add', component: addbankcard,meta: { keepAlive: false} },
    //现金
    { name: 'cash', path: '/me/wallet/cash', component: cash ,meta: { keepAlive: false}},
      { name: 'withdraw', path: '/me/wallet/cash/withdraw', component: withdraw ,meta: { keepAlive: false}},
        { name: 'withdrawlog', path: '/me/wallet/cash/withdraw/log', component: withdrawlog ,meta: { keepAlive: false}},
      { name: 'rechareg', path: '/me/wallet/cash/recharge', component: recharge ,meta: { keepAlive: false}},
      { name: 'onlinerechareg', path: '/me/wallet/cash/recharge/onlinerecharge', component: onlinerecharge,meta: { keepAlive: false} },
      { name: 'cashtransfers', path: '/me/wallet/cash/transfers', component: cashtransfers ,meta: { keepAlive: false}},
      { name: 'cashtransfer', path: '/me/wallet/cash/transfer', component: cashtransfer,meta: { keepAlive: false} },

    //购物券
    { name: 'shopcash', path: '/me/wallet/shopcash', component: shopcash ,meta: { keepAlive: false}},
    { name: 'shopcashtransfers', path: '/me/wallet/shopcash/transfers', component: shopcashtransfers ,meta: { keepAlive: false}},
    
      { name: 'thirdcurrencyinfo', path: '/me/wallet/shopcash/thirdcurrency/info', component: thirdcurrencyinfo ,meta: { keepAlive: false}},
        { name: 'thirdcurrencyimport', path: '/me/wallet/shopcash/thirdcurrency/import', component: thirdcurrencyimport ,meta: { keepAlive: false}},
        { name: 'thirdcurrencyimportlogs', path: '/me/wallet/shopcash/thirdcurrency/importlogs', component: thirdcurrencyimportlogs ,meta: { keepAlive: false}},
    //福豆
    { name: 'benevolence', path: '/me/wallet/benevolence', component: benevolence ,meta: { keepAlive: false}},
      { name: 'benevolencetransfers', path: '/me/wallet/benevolence/transfers', component: benevolencetransfers,meta: { keepAlive: false} },
      { name: 'whatbenevolence', path: '/me/wallet/benevolence/whatbenevolence', component: whatbenevolence ,meta: { keepAlive: false}},
      { name: 'incentive', path: '/me/wallet/incentive', component: incentive ,meta: { keepAlive: false}},
      { name: 'award', path: '/me/wallet/award', component: award ,meta: { keepAlive: false}},
    
      //我的订单个人
    { name: 'orders', path: '/me/orders', component: orders ,meta: { keepAlive: false}},
      { name: 'orderinfo', path: '/me/orders/info', component: orderinfo ,meta: { keepAlive: false}},
      { name: 'orderservice', path: '/me/orders/orderservice', component: orderservice ,meta: { keepAlive: false}},
      { name: 'applyrefund', path: '/me/orders/info/applyrefund', component: applyrefund ,meta: { keepAlive: false}},
        { name: 'applyreturnandrefund', path: '/me/orders/info/applyreturnandrefund', component: applyreturnandrefund ,meta: { keepAlive: false}},
      { name: 'refundinfo', path: '/me/orders/refundinfo', component: refundinfo ,meta: { keepAlive: false}},
      { name: 'returnandrefundinfo', path: '/me/orders/returnandrefundinfo', component: returnandrefundinfo ,meta: { keepAlive: false}},
      { name: 'returndeliver', path: '/me/orders/info/returndeliver', component: returndeliver ,meta: { keepAlive: false}},
      { name: 'expressinfo', path: '/me/orders/info/expressinfo', component: expressinfo,meta: { keepAlive: false} },
    { name: 'comment', path: '/me/orders/info/comment', component: comment,meta: { keepAlive: false} },
    
  ]


  export default routes