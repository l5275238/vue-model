import Vue from 'vue'
import Router from 'vue-router'
import load from "./load.js"
import my_centenr from './routers/my_center/index'
import login from './routers/login/index'


var componentLoad=load('common');

Vue.use(Router)

export default new Router({
  routes: [...my_centenr,...login]
})
