import * as types from './mutations_types'
import Storage from '../../utils/localstorage'

//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：
//每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
//这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

//一条重要的原则就是要记住 mutation 必须是同步函数

//你可以在组件中使用 this.$store.commit('xxx') 提交 mutation

const mutations  = {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.SHOW_LOADING](state) {
        state.ajax_loading = true;
    },
    [types.HIDE_LOADING](state) {
        state.ajax_loading = false;
    },
    //登录状态修改
    [types.UPDATE_TOKEN](state, user_db) {
      state.token = user_db.token || {};
      Storage.set('token', state.token);
    },
    [types.REMOVE_TOKEN](state, user_db) {
      Storage.remove('token', state.token);
      state.token = {};
    },

    //用户信息修改
    [types.UPDATE_USERINFO](state, user_db) {
      state.userinfo = user_db.userinfo || {};
      Storage.set('userinfo', state.userinfo);
    },
    [types.REMOVE_USERINFO](state, user_db) {
      Storage.remove('userinfo', state.userinfo);
      state.userinfo = {};
    },

    //钱包信息修改
    [types.UPDATE_WALLETINFO](state, user_db) {
      state.walletinfo = user_db.walletinfo || {};
      Storage.set('walletinfo', state.walletinfo);
    },
    [types.REMOVE_WALLETINFO](state, user_db) {
      Storage.remove('walletinfo', state.walletinfo);
      state.walletinfo = {};
    },
}

export default mutations
