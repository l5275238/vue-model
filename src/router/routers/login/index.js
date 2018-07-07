import load from "../../load";
var componentLoad=load('login');
var rouleList=[
  {
    path: '/login',
    name: 'login',
    redirect:'/content/login',
    component: () => import(`@/view/login/app.vue`),
    meta:{
      name:"登录",
      isOld:true,

    },
    children:[
      {
        path:'/login/login',
        name:'login',
        component:componentLoad('login','login'),
        meta:{
          name:"登录",
          isOld:true,
        }

      },
      {
        path:'/login/register',
        name:'register',
        component:componentLoad('register','register'),
        meta:{
          name:"账号注册",
          isOld:true,
        }
      },
      {

        path:"/login/qkLogin",
        name:'qkLogin',
        component:componentLoad('qkLogin','qkLogin'),
        meta:{
          name:"快捷注册",
          isOld:true,
        }
      },
      {
        path:"/login/agreement",
        name:'agreement',
        component:componentLoad('agreement','agreement'),
        meta:{
          name:"注册协议",
          isOld:true,
        }

      }

    ]
  },



]
export default rouleList;
