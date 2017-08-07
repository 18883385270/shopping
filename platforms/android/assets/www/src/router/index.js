import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'


Vue.use(Router);

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

// router.beforeEach((to, from, next) => {
//   //未登录 允许访问页面
//   if (!window.localStorage.getItem('token') 
//     && to.name !== 'home' 
//     && to.name !== 'register' 
//     && to.name !== 'login'
//     && to.name !== 'msglogin'
//     && to.name !== 'userprotocol'

//     && to.name !== 'section'
//     && to.name !== 'goodslist'
//     && to.name !== 'goodsinfo'

//     && to.name !== 'cart'
//     && to.name !== 'store'

//     && to.name !== 'bindex'
//     && to.name !== 'consumer'
//     && to.name !== 'passer'
//     && to.name !== 'ambassador'
//     && to.name !== 'regionpartner'
//     && to.name !== 'storeowner'

//     && to.name !== 'foundation'
//     && to.name !== 'classroom'
//     && to.name !== 'offlinestore'

//     && to.name !== 'grantee'
//     && to.name !== 'granteeinfo'
    
//   ) {
//     next({ path: '/login' });
//   } else {
//     //已经登录并且是首页 
//     if (window.localStorage.getItem('token') && to.name === 'home') {
//       next({
//         path: '/me'
//       });
//     } else {
//       next();
//     }
//   }
// });

// router.afterEach(transition => {
// });

export default router
