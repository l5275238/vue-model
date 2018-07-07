<template>
  <div>
    <Heade  :leftTitle="true">
      <div slot="leftTitle" @click="goRegister">注册</div>
      <div slot="rightTitle" >
        <i class="iconfont2 icon-xiuchezai2-guanbi1" @click="goBack"></i>
      </div>
    </Heade>
  <section>
  <div class="scroll-wrapper">


    <div class="loginDiv">

      <img  class="headerImg" src="../img/headpic.jpg">
  <form id="qkLogin" name="qkLogin" v-checkFrom="'qkLogin'">
    <div class="content_01">
      <div class="flexContent">
        <div class="flex_row  btn border_01">
          <input  v-checked="check.tel" ref="telInput" v-model="codeData.phone" class="text flex_1"  type="tel" maxlength="11" placeholder="请输入您的手机号码"/>
          <i class="flex_width iconfont2 deletIcon ty">&#xe7b6;</i>
        </div>
        <div class="flex_row btn border_01" style="padding-right: 7.25rem;position: relative">

          <input class="text flex_1" type="tel" v-model="codeData.code"  v-checked="check.code" maxlength="4" style="width: 7rem" placeholder="请输入验证码"/>
          <i class="flex_width iconfont2 deletIcon ty"> &#xe7b6;</i>
          <button class="cod getcod" style="background: none;color:#dc0502;border:none;position: absolute;right: 0;bottom: 50%;transform: translateY(50%)" id="getcode" type="button" :disabled="btnDis" @click="getCode(1)">{{code}}</button>
        </div>
        <!--<div class="flex_row btn border_01"  id="code4" >-->

          <!--<input class="text flex_1" type="password" id="code5"  placeholder="设置密码"/>-->


          <!--<i class="flex_width iconfont2 deletIcon  ty">&#xe7b6;</i>-->
        <!--</div>-->

        <div class="erb">
          <div type="button" id="tcode" class="btn"  @click="qkLogin"><div class="loadingDiv" v-if="loadingShow"> </div><p>{{btnTitle}}</p></div>
        </div>
        <div class="erb">
          <p class="huo">或</p>
        </div>
        <div class="erb">
          <div type="button"   class="btn tabButn" data-index="2" @click="goToLogin">账号登录</div>
        </div>
        <div class="chenk_phone">
          <span  v-if="codeType==1">收不到短信？使用<em class="col_red" id="phone_code" @click="getCode(2)">语音验证码</em></span>
          <span  v-else>电话拨打中...请留意来电哦！！</span>
        </div>
        <div class="checkbox">
          <span class="kongge"><i class="iconfont">&#xe644;</i></span>登录将自动注册帐号<em class="col_red" id="xieyi">企商汇用户注册协议</em>
        </div>

      </div>
    </div>
  </form>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
  import loginServer from '@server/login/login.js'
  import loginMinx from 'mixin/login/index.js'
    export default {
        name: "qkLogin",
      mixins:[loginMinx],
      data(){
        return {
          obj:{

          },
          codeType:1,
          code:"获取验证码",
          title:{
            beforTitle:"正在登录",
            afterTitle:"快捷登录"
          },
          btnTitle:"登录",
          codeData:{
            type:1,
            phone:"",

          },
          btnDis:false,
          check:{
            tel:{
              rules:['isNotEmpty','isTel','#/Action/ShowAvatarAction.do?login_name'],
              name:"用户名",
              keymessge:"userCheck"
            },
            code:{
              rules:['isNotEmpty']
            }
          },

        }
      },
      created(){

        loginServer.init(this)
      },
      methods:{
        goRegister(){
          this.$router.push('/login/register')
        },
        async getCode(index){
          this.codeData.clazz=index;
          let erro=this.$newCheck.check(this.$refs.telInput)
          if(erro){
             this.btnTitle=erro.erro
            return
          }
          this.codeType=index
         let data =await loginServer.getCode();

          if(data&&data.msg){
            this.$vux.toast.text(data.msg)

          }
          this.btnChange()
        },

        qkLogin(){
          if(!this.$chek_observer.emit('qkLogin')){
            delete this.codeData.clazz;
            loginServer.getCode()
            return
          }
          this.btnTitle=this.$chek_observer.emit('qkLogin')

        },
        goToLogin(){
          this.$router.push('/login/login')
        }
      }
    }
</script>

<style scoped>

</style>
