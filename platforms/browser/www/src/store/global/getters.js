
//Vuex 允许我们在 store 中定义『getters』（可以认为是 store 的计算属性）。
//Getters 接受 state 作为其第一个参数
//Getters 会暴露为 store.getters 对象
//Getters 也可以接受其他 getters 作为第二个参数：
//我们可以很容易地在任何组件中使用它this.$store.getters.doneTodosCount
export default  {
  getToken(state) {
    return state.token && state.token ? state.token : '';
  }
};
