<template>
<div >
  <Heade :title="headerTitle" :leftTitle="true">
    <div slot="leftTitle" @click="goRegister">注册</div>
    <div slot="rightTitle">
      <i class="iconfont2 icon-xiuchezai2-guanbi1" @click="goBack"></i>
    </div>
  </Heade>
  <section>
    <div class="scroll-wrapper">


      <div class="loginDiv">

        <img  class="headerImg" src="../img/headpic.jpg">

        <form id="ptLogin" name="ptLogin" v-checkFrom="'loginFrom'">
          <div class="content_02">

            <div class="flex_row btn border_01">
              <!--<i class="flex_width iconfont">&#xe786;</i>-->
              <input v-model="loginData.txt_zh" class="text flex_1" id="loginname1" v-checked="loginCheck" type="text" maxlength="30" placeholder="请输入您的用户名"/>
              <!--<i class="flex_width iconfont2 deletIcon ty ">&#xe7b6;</i>-->
            </div>
            <div class="flex_row btn border_01" >
              <!--<i class="flex_width iconfont">&#xe787;</i>-->
              <input class="text flex_1" type="password"  v-model="loginData.txt_pwd" id="code1" v-checked="pwCheck" placeholder="请输入密码"/>
              <!--<i class="iconfont flex_width kejian ty">&#xe789;</i>-->
              <!--<i class="iconfont2 flex_width bukejian ty">&#xe7b6;</i>-->
              <!--<i class="flex_width iconfont2 deletIcon ty">&#xe7b6;</i>-->
            </div>
            <div class="erb">
              <div type="button" id="tcode1" class="btn" @click="login"><div class="loadingDiv" v-if="loadingShow"> </div><p>{{btnTitle}}</p></div>

            </div>
            <div class="erb">
              <p class="huo">或</p>
            </div>
            <div class="erb">
              <div type="button " id="tcode2" data-index="1" class="btn tabButn" @click="goToQk">手机快捷登录</div>
            </div>
            <div class="checkbox">
              <span>登录遇到问题？快试试快捷登录</span><a id="rpwd">忘记密码？</a>
            </div>

          </div>
        </form>
      </div>
    </div>
  </section>
  <footer>
    <div class="suc_lc">
      <div class="suc_x"></div>
      <span>第三方账户登录</span>
    </div>
    <div class="img">
      <div class="text-right"><a id="qq"><img src="../img/at_qq.png"/></a></div>
      <div class="text-left"><a id="weixin"><img src="../img/at_wx.png"/></a></div>
    </div>
  </footer>
</div>
</template>

<script>
 import loginServer from '@server/login/login.js'
 import loginMinx from 'mixin/login/index.js'
 import {mapMutations,mapGetters} from "vuex"


    export default {
        name: "login",
      data:function () {
        return{
          headerTitle:"登录",
          loginCheck:{
            rules:['isNotEmpty','#/Action/ShowAvatarAction.do?login_name'],
            name:"用户名",
            keymessge:"userCheck"
          },
          name:11,
          pwCheck:{
            rules:['isNotEmpty'],
            name:"密码"
          },
          title:{
            beforTitle:"正在登录",
            afterTitle:"登录"
          },
          loginData:{

          }
        }
      },
      created(){


        console.log(this.loginBack);
        loginServer.init(this);



      },
      mounted(){
        this.intCheck();
      },
      computed:{



      },
      mixins:[loginMinx],
      methods:{

        ...mapMutations(["SetLoginBack"]),
          intCheck(){
            this.$newCheck.setAjax('userCheck',function (data) {
              return log==0||data.data[0].status==0
            })
          },

        goRegister:function () {
          this.$router.push('/login/register')
        },
        goToQk:function () {
          this.$router.push('/login/qkLogin')
        },
        login:function () {

          if(!this.$chek_observer.emit('loginFrom')){
            loginServer.login();
          }
          else {
            this.btnTitle=this.$chek_observer.emit('loginFrom');
          }

        }
      }

    }
</script>


