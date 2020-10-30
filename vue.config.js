module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xxx.xxx', // 代理地址
        changeOrigin: true,
      },
    },
  },
};
