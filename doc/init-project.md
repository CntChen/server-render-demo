## 背景
Vue开发环境构建

## 步骤
1. 安装nodejs 略
2. 安装vue
主要参考：http://vuejs.org/guide/installation.html
```
# install vue-cli
$ npm install -g vue-cli
```

3. 初始化工程
```
# create a new project using the "webpack" boilerplate
$ vue init webpack my-project
# install dependencies and go!
$ cd my-project
$ npm install
```
运行demo
```
$ npm run dev
```
然后在浏览器打开demo页面，http://localhost:8080

* 工程目录结构
```
.
├── build            // 构建脚本
├── config           // 构建的配置文件
├── dist             // 打包后输出位置
├── index.html       // 项目入口
├── node_modules     // 项目依赖
├── package.json     // 项目描述
├── README.md        // 读我
├── src              // 项目源码
├── static           // 未知
└── test             // 未知
```

4. 升级到vue2.0
可以使用`npm list`查看所有依赖库，vue2.0才支持服务器渲染，所以需要升级vue。
```
# 删除旧的依赖
$ rm -rf node_moudles/vue
# 安装vue2.0库
git clone https://github.com/vuejs/vue.git node_modules/vue -b next
cd node_modules/vue
npm install
npm run build
```

5. 升级后填坑
```
vue.common.js?e881:2239[Vue warn]: Failed to mount component: template or render function not defined. (found in root instance)
```
>https://forum.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance/3

因为vue2.0中已经将模块拆分，需要将`main.js`中`import Vue from 'vue'` 修改为 `import Vue from 'vue/dist/vue.js'`。

```
vue.js?3de6:2244[Vue warn]: Templates should only be responsbile for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <script>.
```
暂时没有解答。