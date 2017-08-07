import * as types from './mutations_types';

//Action 类似于 mutation，不同在于：

//Action 提交的是 mutation，而不是直接变更状态。
//Action 可以包含任意异步操作

//Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
//因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters

//Action 通过 store.dispatch 方法触发
//你在组件中使用 this.$store.dispatch('xxx') 分发 action

const actions = {
  //实践中，我们会经常会用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）
	show_loading: ({commit}) => {
    //你需要明白 store.dispatch 可以处理被触发的action的回调函数返回的Promise，并且store.dispatch仍旧返回Promise
		return new Promise((resolve, reject) => {
			commit(types.SHOW_LOADING);
			resolve()
		});
	},

	hide_loading: ({commit}) => {
		return new Promise((resolve, reject) => {
			commit(types.HIDE_LOADING);
			resolve()
		});
	},

  update_token: ({commit}, {token}) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_TOKEN, {
        token
      });
      resolve()
    });
  },

  remove_token: ({commit}, {
    token
  }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_TOKEN, {
        token
      });
      resolve()
    });
  },
}

export default actions
