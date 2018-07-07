import load from "../../load";

var componentLoad=load('my_center');

var routeList=[

  {
    path: '/',
    name: 'mycenter',
    component: componentLoad("mycenter/components","app"),
    meta:{
      name:"你好",
      isLogin:true

    }
  },
  {
    path: '/address',
    name: 'address',
    component: componentLoad("address/components","app"),
    meta:{
      name:"地址管理",

    },

  },
  {
    path:"/about_us",
    name: 'about_us',
    component: componentLoad("about_us/components","app"),

    meta:{
      name:"关于我们",

    },
  },
  {
    path:'/carFiles',
    name:'carFiles',
    component: componentLoad('carFiles/components','app'),
    meta:{
      name:'爱车档案'
    }
  },
  {
    path:'/carFiles/list',
    name:'carFiles/list',
    component: componentLoad('carFiles/list/components',  'App'),
    meta:{
      name:'保养记录'
    },
    props:(route) => ({car_conf_id: route.query.car_conf_id, car_id:route.query.car_id})
  }
]


export default routeList


