import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // socket连接状态
    isSuccessConnect: false,
  },
  mutations: {
    newIsSuccessConnect(state, value) {
      state.isSuccessConnect = value;
    },
  },
  getters: {
    getIsSuccessConnect: (state) => state.isSuccessConnect,
  },
  actions: {
  },
  modules: {
  },
});
