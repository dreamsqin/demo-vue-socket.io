import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// connection为静态地址时
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:7001/',
}));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
