# demo-vue-socket.io

结合博客[《vue-socket.io使用教程与踩坑记录》](https://www.cnblogs.com/dreamsqin/p/12018866.html)查看源码思路会更清晰哦～
- `websocket`主动订阅与订阅数据获取在`~/components/HelloWorld.vue`文件中
- 项目拉下来默认使用方案二"结合connect事件+store+路由守卫实现拦截"，涉及文件：
```
~/main.js
~/store/index.js
~/router/index.js
```
- 若想测试方案一"保证拿到socket连接地址后再将vue实例挂载到app"或测试连接地址为静态url请自行切换注释状态
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
