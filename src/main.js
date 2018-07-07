// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./css/mix.less";
import VueLazyLoad from 'vue-lazyload'
import store from './vuex/index'

import Heade from './components/common/header'

import rem from './common/rem'
import check from './common/vue-unit/check/vue-check'
import  { ToastPlugin ,LoadingPlugin,AlertPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin )

// 或者umd方式
// 引入构建的js文件
Vue.use(ToastPlugin,{
  position:"middle"
})
rem.setHtmlFontSize()
$(window).on('resize', rem.setHtmlFontSize);
Vue.use(VueLazyLoad
  )
Vue.use(check)
import FastClick from 'fastclick'

FastClick.attach(document.body);
Vue.prototype.$bb={
  name:2
};

Vue.component('Heade', Heade)
let app=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


router.afterEach(route => {
  document.title=route.meta.name;
  if(route.meta.isOld){
    rem.remSize=14;
    rem.setHtmlFontSize()
  }
  else {

    rem.remSize=16;
    rem.setHtmlFontSize()
  }

});
router.beforeEach((to, from, next) => {

  let reg=/^\/login\//;

  if(!reg.test(from.path)&&reg.test(to.path)){

    app.$store.commit('SetLoginBack',from.path)
  }
  if(to.meta.isLogin){
    if(app.$store.state.cookie_uuid){
      next()
    }
    else {
      next('/login')
    }
  }
  next()
});
