import http from './http';

// http工具类
export default {
  /**
   * get
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  get(url, param) {
    return http({
      method: 'GET',
      url,
      params: param,
    });
  },

  /**
   * post
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  post(url, param) {
    return http({
      method: 'post',
      url,
      data: param,
    });
  },
};
