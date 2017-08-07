
import home from '../page/home/index.vue';
import login from '../page/login/index.vue';
import msglogin from '../page/login/msglogin/index.vue';
import register from '../page/register/index.vue';
import userprotocol from '../page/login/protocol/index.vue';


import offlinestore from '../page/offlinestore/index.vue';
import foundation from '../page/foundation/index.vue';

import store from '../page/store/index.vue';

import grantee from '../page/grantee/index.vue';
import granteeinfo from '../page/grantee/granteeinfo/index.vue';
import tohelp from '../page/grantee/granteeinfo/tohelp/index.vue';

import section from '../page/section/index.vue';
import regionselect from '../page/regionselect/index.vue';

import banevolenceindex from '../page/benevolenceindex/index.vue';
import consumer from '../page/benevolenceindex/consumer/index.vue';
import passer from '../page/benevolenceindex/passer/index.vue';
import ambassador from '../page/benevolenceindex/ambassador/index.vue';
import regionpartner from '../page/benevolenceindex/regionpartner/index.vue';
import storeowner from '../page/benevolenceindex/store/index.vue';
import openstore from '../page/benevolenceindex/store/open/index.vue';

import goodslist from '../page/goodslist/index.vue';
import goodsinfo from '../page/goodslist/info/index.vue';

import cart from '../page/cart/index.vue';
import postorder from '../page/cart/postorder/index.vue';


import me from '../page/me/index.vue';
import profile from '../page/me/profile/index.vue';
import about from '../page/me/about/index.vue';
import classroom from '../page/me/classroom/index.vue';
import storemgr from '../page/me/storemgr/index.vue';
import expressaddress from '../page/me/profile/expressaddress/index.vue';


import wallet from '../page/me/wallet/index.vue';
import collect from '../page/me/collect/index.vue';
import cardsmgr from '../page/me/wallet/cardsmgr/index.vue';
import cash from '../page/me/wallet/cash/index.vue';
import benevolence from '../page/me/wallet/benevolence/index.vue';
import withdraw from '../page/me/wallet/cash/withdraw/index.vue';
import cashtransfer from '../page/me/wallet/cash/transfer/index.vue';
import benevolencetransfer from '../page/me/wallet/benevolence/transfer/index.vue';

import orders from '../page/me/orders/index.vue';
import orderinfo from '../page/me/orders/info/index.vue';
import expressinfo from '../page/me/orders/info/expressinfo/index.vue';

const routes=[
    { name: 'login', path: '/login', component: login },
    { name: 'register', path: '/register', component: register },
    { name: 'msglogin', path: '/login/msglogin', component: msglogin },
    { name: 'userprotocol', path: '/login/protocol', component: userprotocol },

    { name: 'home', path: '/', component: home },
    { name: 'offlinestore', path: '/offlinestore', component: offlinestore },
    { name: 'store', path: '/store', component: store },
    { name: 'foundation', path: '/foundation', component: foundation },

    { name: 'grantee', path: '/grantee', component: grantee },
    { name: 'granteeinfo', path: '/grantee/info', component: granteeinfo },
    { name: 'tohelp', path: '/grantee/info/tohelp', component: tohelp },


    { name: 'section', path: '/section', component: section },

    { name: 'bindex', path: '/bindex', component: banevolenceindex },
    { name: 'consumer', path: '/bindex/consumer', component: consumer },
    { name: 'passer', path: '/bindex/passer', component: passer },
    { name: 'ambassador', path: '/bindex/ambassador', component: ambassador },
    { name: 'regionpartner', path: '/bindex/regionpartner', component: regionpartner },
    { name: 'storeowner', path: '/bindex/storeowner', component: storeowner },
    { name: 'openstore', path: '/bindex/storeowner/open', component: openstore },

    { name: 'cart', path: '/cart', component: cart },
    { name: 'postorder', path: '/cart/postorder', component: postorder },

    { name: 'me', path: '/me', component: me },
    { name: 'profile', path: '/me/profile', component: profile },
    { name: 'about', path: '/me/about', component: about },
    { name: 'classroom', path: '/me/classroom', component: classroom },
    { name: 'storemgr', path: '/me/storemgr', component: storemgr },
    { name: 'expressaddress', path: '/me/profile/expressaddress', component: expressaddress },

    { name: 'collect', path: '/me/collect', component: collect },

    { name: 'wallet', path: '/wallet', component: wallet },
    { name: 'cardsmgr', path: '/wallet/cardsmgr', component: cardsmgr },
    { name: 'cash', path: '/wallet/cash', component: cash },
    { name: 'benevolence', path: '/wallet/benevolence', component: benevolence },
    { name: 'withdraw', path: '/wallet/cash/withdraw', component: withdraw },
    { name: 'cashtransfer', path: '/wallet/cash/transfer', component: cashtransfer },
    { name: 'benevolencetransfer', path: '/wallet/benevolence/transfer', component: benevolencetransfer },

    { name: 'orders', path: '/orders', component: orders },
    { name: 'orderinfo', path: '/orders/info', component: orderinfo },
    { name: 'expressinfo', path: '/orders/info/expressinfo', component: expressinfo },

    { name: 'goodslist', path: '/goodslist', component: goodslist },
    { name: 'goodsinfo', path: '/goodslist/info', component: goodsinfo },



    { name: 'regionselect', path: '/regionselect', component: regionselect }
  ]


  export default routes