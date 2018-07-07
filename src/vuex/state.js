import Session from '@/common/Session.js'
import localstorage from "@/common/localstorage.js"
import  'jquery.cookie'
const state = {
  cookie_uuid:$.cookie('cookie_uuid')||null,
  loginBack:Session.getItem("path")||'/',
  token_storage_name:localstorage.getItem("token_storage_name")||null,

}

export default state
