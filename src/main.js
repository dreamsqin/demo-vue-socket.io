import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import getInfoApi from './api/getInfo';

Vue.config.productionTip = false;

/* connection为静态地址时 */
/*----------------------------------------------*/
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://127.0.0.1:7001/',
// }));

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
/*----------------------------------------------*/

/* connection为后端动态获取(方案一：保证拿到socket连接地址后再将vue实例挂载到app) */
/*----------------------------------------------*/
// getInfoApi.getSocketUrl().then((res) => {
//   Vue.use(new VueSocketIO({
//     debug: true,
//     connection: res.data.url,
//   }));
//
//   new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount('#app');
// });
/*----------------------------------------------*/

/* connection为后端动态获取(方案二：结合connect事件+store+路由守卫实现拦截) */
/*----------------------------------------------*/
getInfoApi.getSocketUrl().then((res) => {
  const vueSocketIo = new VueSocketIO({
    debug: true,
    connection: res.data.url,
  });
  // 监听connect事件，设置isSuccessConnect为true
  vueSocketIo.io.on('connect', () => {
    console.log('socket connect from main.js');
    store.commit('newIsSuccessConnect', true);
  });
  Vue.use(vueSocketIo);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
/*----------------------------------------------*/
