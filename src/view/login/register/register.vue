<template>
  <div class="reset">
    <Heade  :leftTitle="true">
      <div slot="leftTitle" @click="goLogin">登录</div>
      <div slot="rightTitle">
        <i class="iconfont2 icon-xiuchezai2-guanbi1" @click="goBack"></i>
      </div>
    </Heade>
    <form v-checkFrom="'register'">
    <div  class="scroll-wrapper">
    <div class="content_04">

      <img  class="resetImg" src="../img/reset.png">
      <div class="flexContent">
        <div class="flex_row  btn border_01">
          <!--<i class="flex_width iconfont">&#xe786;</i>-->
          <input v-checked="checkObj.tel"  v-model="codeData.phone" class="text flex_1"  type="tel" maxlength="11" ref="telInput" autocomplete="off" placeholder="请输入您的手机号码"/>
          <!--<i class="flex_width iconfont icon-denru-shangchu"></i>-->
        </div>
        <div class="flex_row btn border_01" style="padding-right:7.25rem;position: relative">
          <!--<i class="flex_width iconfont">&#xe785;</i>-->
          <input class="text flex_1" type="tel" id="code3" v-model="codeData.code"  v-checked="checkObj.code" maxlength="4" placeholder="请输入验证码"/>
          <!--<i class="flex_width iconfont icon-denru-shangchu"></i>-->
          <input class=" getcode cod" style="background: none;color:#dc0502;position: absolute;right: 0;    bottom: 50%;
    transform: translateY(50%)" @click="getCode(1)" type="button" v-model="code"/>
        </div>
        <div class="flex_row btn border_01" >
          <!--<i class="flex_width iconfont">&#xe787;</i>-->
          <input class="text flex_1" type="password" id="code2" autocomplete="off" v-checked="checkObj.pw" v-model="codeData.login_pwd"   placeholder="设置密码"/>
          <!--<i class="iconfont flex_width kejian ty">&#xe789;</i>-->
          <!--<i class="iconfont flex_width bukejian ty">&#xe788;</i>-->
          <i class="flex_width iconfont  icon-denru-shangchu ty"></i>
        </div>
        <div class="erb">
          <button type="button" id="tcode3" class="btn" @click="register">{{btnTitle}}</button>
        </div>


        <div class="chenk_phone">
          <span  v-if="codeType==1">收不到短信？使用<em class="col_red" id="phone_code.1" @click="getCode(2)">语音验证码</em></span>
          <span id="resetPhone" class="resetPhone"  v-else>电话拨打中...请注意来电哦！</span>

        </div>
        <div class="checkbox">
          <span class="kongge"><i class="iconfont">&#xe644;</i></span>登录将自动注册帐号<em class="col_red" id="xieyi" @click="goXy">企商汇用户注册协议</em>
        </div>
        <div class="chenk_phone resetBotoom" style="flex-direction: column;display: flex">
          <span >轻触注册表示您同意</span>
          <span><em class="col_red" ><<修车仔用户注册协议>></em></span>
        </div>
      </div>

    </div>
    </div>
    </form>
  </div>
</template>

<script>
  import loginMinx from 'mixin/login/index.js'
  import loginServe from "@server/login/login.js"
    export default {
      mixins:[loginMinx],
        name: "revister",
      data(){
        return{
          codeData:{
            type:2,
            phone:"",

          },
          code:"获取验证码",
          codeType:1,
          btnTitle:"注册",
          title:{
            beforTitle:"正在注册",
            afterTitle:"注册"
          },
          checkObj:{
            tel:{
              rules:['isNotEmpty','isTel','#/Action/ShowAvatarAction.do?login_name'],
              name:"用户名",
              keymessge:"userCheck"
            },
            code:{
              rules:['isNotEmpty'],
              name:"验证码",
            },
            pw:{
              rules:['isNotEmpty'],
              name:"密码",
            }
          },
        }
      },
      methods:{
        goLogin:function () {
          this.$router.push('/login/login')
        },
        goBack:function () {

        },
        register:function(){
          if(this.$chek_observer.emit('register')){
            this.btnTitle=this.$chek_observer.emit('register')
            return
          }
          this.codeData.type=2;
          delete this.codeData.clazz;
          loginServe.getCode()
        },
        async getCode(index){
          this.codeData.type=1;
          this.codeData.clazz=index;
          let erro=this.$newCheck.check(this.$refs.telInput)
          if(erro){
            this.btnTitle=erro.erro
            return
          }
          let data =await loginServe.getCode();
          this.codeType=index
          if(data&&data.msg){
            this.$vux.toast.text(data.msg)

          }
          this.btnChange()
        },

        goXy:function () {
          this.$router.push('/login/agreement')
        }
      },
      created(){
        loginServe.init(this)

      }
    }
</script>

<style scoped>

</style>
