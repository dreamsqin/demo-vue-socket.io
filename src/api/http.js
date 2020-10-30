import axios from 'axios';
import _ from 'lodash';

const http = axios.create({
  timeout: 30000, // 请求超时
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// Add a request interceptor（请求拦截）
http.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config);
  return config;
}, (error) => {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor（响应拦截）
http.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(response);
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const errorCopy = _.cloneDeep(error);
  if (errorCopy && errorCopy.response) {
    const RESPONSE_CODE = {
      400: '请求参数错误',
      403: '拒绝访问',
      404: '请求超时',
      500: '服务器内部错误',
      501: '服务未实现',
      502: '网关错误',
      503: '服务不可用',
      504: '网关超时',
      505: 'HTTP版本不受支持',
    };
    errorCopy.message = RESPONSE_CODE[errorCopy.response.status] || '服务器开小差！！';
  }
  return Promise.reject(errorCopy);
});

export default http;
