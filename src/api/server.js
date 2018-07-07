import axios from './axios/axios'
var   gettype=Object.prototype.toString;

class Server {
  constructor(){
    this.axiosLength=0;
    this.isLoading=false;
  }
  //绑定vue实例
  init(vue){
    this.vm=vue;
  }
  erroFn(data){
    this.vm.$vux.toast.show({
      type: 'cancel',
      text: data?data.msg:"网络出错啦",
    })
  }
  _beforAxios(params){
    this.axiosLength++;
    if(this.isLoading){
      return
    }
    this.isLoading=true;
    if(typeof params.beforAxios=="function"){
      params.beforAxios();
      return
    }
    this.beforAxios();
  }
  beforAxios(){

    this.vm.$vux.loading.show({
      text: '正在加载'
    })
  }

  axios(params){


        this._beforAxios(params);

      if(typeof params.success!="function"){
        throw "success必须是个函数"
      }
      if(params.error&&typeof params.error!="function"){
        throw "error必须是个函数"
      }
    return  axios(params).then(resData=>{



          this._afterAxos(params)

    let data=resData.data;
        if(data){
          if(data.error){
            if(data.error == '201'){
              if(typeof data.data !== 'undefined'){
                params.success(data.data)
              }
              else {
                params.success(data)
              }
            }
            else if(data.error=='403'){
              this.erroFn(data);
              this.vm.$router.push('/login/login');


            }
            else {
              if(params.error){
                params.error(data);
                return
              }
              this.erroFn(data);
            }
          }
          else {
            params.success(data)
          }
        }
        else {
          params.success(data)
        }




      }).catch(data=>{
      this._afterAxos(params)
        if(params.error){
          params.error(data);
          return
        }
        this.erroFn(data);
      })



  }
  _afterAxos(params){
    this.axiosLength--;
    if(this.axiosLength==0){
      this.isLoading=false
      if(typeof params.afterAxios=="function"){
        params.afterAxios()
        return
      }
      this.afterAxios()

    }
  }
  afterAxios(params){
    this.vm.$vux.loading.hide();
  }
  ///多个请求
  allAxios(list){
    return new Promise((res,ref)=>{
      this.beforAxios();
      axios.all(list.map(item=>{
        return axios(item)
      })).then(data=>{
        this.afterAxios()
        res(data)
      }).catch(data=>{
        this.afterAxios()
      })
    })

  }


}
export default Server;
