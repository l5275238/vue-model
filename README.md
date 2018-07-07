# 修车仔文档说明

### 目录结构

     |---build
     |---config
      |---src
        |---api axios基础配置
          |---axios  axois基础配置
          |---server  请求接口类
          |---api  根据环境变量配置一些参数
          |---server.js   请求接口类的父类
        |---assets 资源
        |---common 工具方法公共方法
          |--vue-unit vue的一些插件
            |--check   vue校验插件  
        |---components组件
        |---css 公共CSS
        |---router
          |---routers 各个路由集合模块
            |---my_center 我的路由模块
          |---index.js
          |---load.js 公共路由加载方法
        |---view各个模块
          |---my_center   我的视图模块
        |---vuex
          |---index
          |---actions
          |---getters
          |---state
          |---mutations
        |---app.vue
        |---main.js入口

  ```
