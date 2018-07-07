import localstorage from "@/common/localstorage.js"
import Session from '@/common/Session'
import  'jquery.cookie'
const mutations = {
      SetLoginBack(state,path){
        state.loginBack=path;
        Session.saveItem('path',path);
      },
      liveLogin(state,path){
        state.loginBack='/';
        Session.removeItem('path')
      },
      setCookie_uuid(state,cookie_uuid){
        state.cookie_uuid=cookie_uuid;
        $.cookie('cookie_uuid',cookie_uuid, {expires:1000,path: '/'});
      },
      setToken(state,token){

        state.token_storage_name=token;
        localstorage.saveItem('token_storage_name')
      }

}
export default mutations
