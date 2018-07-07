<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="shezhi">
        <div class="sett_title">
            <div class="left" @click="sethide">
                <i class="iconfont2">&#xe7ca;</i>
                <span>返回</span>
            </div>
            <div class="mid">设置</div>
        </div>
        <div class="sett_body">
          <router-link to='/address' >
            <div class="body_item" >
                <div class="left">
                    <i class="iconfont">&#xe7ee;</i>
                    <span>收货地址</span>
                </div>
                <i class="iconfont">&#xe65c;</i>
            </div>
          </router-link>
            <div class="body_item" @click="setlink('/m-center/userinfo/index.html')">
                <div class="left">
                    <i class="iconfont">&#xe760;</i>
                    <span>修改资料</span>
                </div>
                <i class="iconfont">&#xe65c;</i>
            </div>
            <div class="body_item" @click="setlink('/m-center/save_info/index.html')">
                <div class="left">
                    <i class="iconfont">&#xe625;</i>
                    <span>账户安全</span>
                </div>
                <i class="iconfont">&#xe65c;</i>
            </div>
        </div>
      <router-link to='/about_us' >
        <div class="sett_body">
            <div class="body_item" >
                <div class="left">
                    <i class="iconfont">&#xe763;</i>
                    <span>关于我们</span>
                </div>
                <i class="iconfont">&#xe65c;</i>
            </div>
        </div>
      </router-link>
        <div class="sett_foot">
            <button type="button" @click="quit">退出登录</button>
        </div>
    </div>
</template>
<script>

    export default{
        methods:{
            sethide:function(){
                this.$parent.settShow = false;
            },
            setlink:function(add){
              window.location.href = add;
            },
            quit:function(){
                var Loading = qshUtil.toast('loading','');
                $.removeCookie('cookie_uuid',{path:'/'});
                localStorage.removeItem('qsh_l_token');
                qshObject.ajax('/Login/LogoutAction.do',{}).then(function(data){
                    Loading.hide();
                    try{
                        if(qshObject.isIOSAPP){
                            qshObject.clearCookie()
                        }
                    }catch(e){

                    }
                    location.href = qsh_page_urls.login;
                },function(err){
                    Loading.hide();
                    location.href = qsh_page_urls.login;
                });
            }
        }
    }
</script>
