import ajax from './ajax';

// 获取websocket地址
export default {
  getSocketUrl() {
    return ajax.get('/api/getSocketUrl');
  },
};
