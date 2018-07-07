import Server from "@/api/server.js"
import publicKey from '@/common/publicKey.js'

class LoginServer extends Server{

  constructor(){
    super()
  }
  beforAxios(){
    this.vm.loadingShow=true;
    this.vm.btnTitle=this.vm.title.beforTitle;
  }
  afterAxios(){
    this.vm.loadingShow=false;
    this.vm.btnTitle=this.vm.title.afterTitle;
  }
  erroFn(data){
    this.vm.btnTitle=data?data.msg:"网络出错啦"
  }
  login(){
let data=Object.assign({},this.vm.loginData)
    data.txt_pwd=publicKey(this.vm.loginData.txt_pwd);
    return this.axios({
      url:"/Login/LoginAction.do",
     data:data,
     success:data=>{
    this.vm.$store.dispatch("setCookie_uuid",data.cookie_uuid)
      this.vm.$store.commit("setToken",data.token);

    this.vm.$router.push(this.vm.loginBack)

     }
    })
  }
  getCode(){
    let data=Object.assign({},this.vm.codeData)
    if(data.login_pwd){
      data.login_pwd=publicKey(this.vm.loginData.login_pwd);
    }
    return new Promise((res,ref)=>{
      this.axios({
        url:"/Action/Easy_Login_Regist_Action.do",
        data:data,
        success:data=>{

        },
        error:data=>{
          res(data)
        }
      })
    })

  }
}
const loginServer=new LoginServer();

export default loginServer;
