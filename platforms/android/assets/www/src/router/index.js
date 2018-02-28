import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'


Vue.use(Router);

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
});
router.beforeEach((to, from, next) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  //to.meta.keepAlive= toDepth < fromDepth ? true : false
  if(toDepth==fromDepth){
    to.meta.keepAlive=false;
  }
  //未登录 允许访问页面
  if (!window.localStorage.getItem('token') 
    && to.name !== 'home' 
    && to.name !== 'goodsblockinfo' 
    && to.name !== 'search' 
    && to.name !== 'register' 
    && to.name !== 'reg' 
    && to.name !== 'login'
    && to.name !== 'msglogin'
    && to.name !== 'getpwd'
    && to.name !== 'resetpwd'
    && to.name !== 'userprotocol'

    && to.name !== 'store'
    && to.name !== 'subject'
    
    && to.name !== 'scannerpage'
    && to.name !== 'scannerresult'
    && to.name !== 'browser'

    && to.name !=='jumppage'
    && to.name !=='announcementinfo'

    && to.name !== 'section'
    && to.name !== 'goodslist'
    && to.name !== 'goodsinfo'

    && to.name !== 'store'

    && to.name !== 'bindex'
    && to.name !== 'regionpartner'

    && to.name !== 'offlinestore'
    
  ) {
    next({ path: '/login' });
  } else {
    //已经登录并且是首页 
    if (window.localStorage.getItem('token') && to.name === 'home') {
      next();
    } else {
      next();
    }
  }
  
});

router.afterEach(transition => {
});

export default router
