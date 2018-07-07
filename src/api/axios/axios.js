import axios from 'axios'
import api from '../api'
const instance=axios.create(
  {
    //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: '',
    // 请求方法同上
    method: 'post', // default
    // 基础url前缀
    baseURL: api.BASE_URL,
    transformRequest: [function (data) {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      // data = Qs.formats(data);
      // return data
      // data= JSON.stringify(data)
      return $.param(data);
    }],

    transformResponse: [function (data) {
      // 这里提前处理返回的数据
      try {
        return JSON.parse(data)
      }catch(e){
        return data
      }
    }],

    // 请求头信息
    headers: {  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    //parameter参数
    params: {
    },

    //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    // data: {
    // },
    //设置超时时间
    timeout: 5000,
    //返回数据类型
    responseType: 'json', // default
  }
)
// http request 拦截器
instance.interceptors.request.use(
  config => {
    // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {

    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
export default instance
