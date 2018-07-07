<template>
<div id="container">
  <Heade>
    <!--<div slot="rightTitle">22</div>-->

  </Heade>
  <section>
    <div class="scroll-wrapper">


      <!--<div class="head_top">-->
      <!--<div>-->
      <!--帐号登录-->
      <!--</div>-->
      <!--<div>-->
      <!--快捷登录-->
      <!--</div>-->
      <!--</div>-->
      <div class="reset">
        <div class="content_04">
          <img  class="resetImg" src="./img/reset.png">
          <div class="flexContent">
            <div class="flex_row  btn border_01">
              <!--<i class="flex_width iconfont">&#xe786;</i>-->
              <input onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" class="text flex_1" id="loginname3" type="tel" maxlength="11" autocomplete="off" placeholder="请输入您的手机号码"/>
              <i class="flex_width iconfont icon-denru-shangchu"></i>
            </div>
            <div class="flex_row btn border_01" style="padding-right:7.25rem">
              <!--<i class="flex_width iconfont">&#xe785;</i>-->
              <input class="text flex_1" type="tel" id="code3" maxlength="4" placeholder="请输入验证码"/>
              <i class="flex_width iconfont icon-denru-shangchu"></i>
              <input class=" getcode cod" style="background: none;color:#dc0502" id="getcode2" type="button" value="获取验证码"/>
            </div>
            <div class="flex_row btn border_01" >
              <!--<i class="flex_width iconfont">&#xe787;</i>-->
              <input class="text flex_1" type="password" id="code2" autocomplete="off"  readonly onfocus="this.removeAttribute('readonly');" placeholder="设置密码"/>
              <!--<i class="iconfont flex_width kejian ty">&#xe789;</i>-->
              <!--<i class="iconfont flex_width bukejian ty">&#xe788;</i>-->
              <i class="flex_width iconfont  icon-denru-shangchu ty"></i>
            </div>
            <div class="erb">
              <button type="button" id="tcode3" class="btn">注册</button>
            </div>


            <div class="chenk_phone">
              <span >收不到短信？使用<em class="col_red" id="phone_code.1">语音验证码</em></span>
              <span id="resetPhone" class="resetPhone" style="display: none">电话拨打中...请注意来电哦！</span>

            </div>
            <div class="chenk_phone resetBotoom" style="flex-direction: column;display: flex">
              <span >轻触注册表示您同意</span>
              <span><em class="col_red" ><<修车仔用户注册协议>></em></span>
            </div>
          </div>
        </div>

      </div>

      <div class="loginDiv">

        <img  class="headerImg" src="./img/headpic.jpg">
        <img  class="resetImg"  style="display: none" src="./img/reset.png">
        <form id="qkLogin" name="qkLogin">
          <div class="content_01">
            <div class="flexContent">
              <div class="flex_row  btn border_01">
                <!--<i class="flex_width iconfont">&#xe786;</i>-->
                <input onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" class="text flex_1" id="loginname" type="tel" maxlength="11" placeholder="请输入您的手机号码"/>
                <i class="flex_width iconfont2 deletIcon ty">&#xe7b6;</i>
              </div>
              <div class="flex_row btn border_01" style="padding-right: 7.25rem;position: relative">
                <!--<i class="flex_width iconfont">&#xe785;</i>-->
                <input class="text flex_1" type="tel" id="code" maxlength="4" style="width: 7rem" placeholder="请输入验证码"/>
                <i class="flex_width iconfont2 deletIcon ty"> &#xe7b6;</i>
                <button class="cod getcod" style="background: none;color:#dc0502;border:none;position: absolute;right: 0;bottom: 50%;transform: translateY(50%)" id="getcode" type="button" value="获取验证码"/>获取验证码
              </div>
              <div class="flex_row btn border_01"  id="code4" >
                <!--<i class="flex_width iconfont">&#xe787;</i>-->
                <input class="text flex_1" type="password" id="code5"  placeholder="设置密码"/>
                <!--<i class="iconfont flex_width kejian ty">&#xe789;</i>-->
                <!--<i class="iconfont flex_width bukejian ty">&#xe788;</i>-->

                <i class="flex_width iconfont2 deletIcon  ty">&#xe7b6;</i>
              </div>

              <div class="erb">
                <div type="button" id="tcode" class="btn"><div class="loadingDiv"> </div><p>登录</p></div>
              </div>
              <div class="erb">
                <text class="huo">或</text>
              </div>
              <div class="erb">
                <div type="button"   class="btn tabButn" data-index="2">账号登录</div>
              </div>
              <!--<div class="checkbox">-->
              <!--<span class="kongge"><i class="iconfont">&#xe644;</i></span>登录将自动注册帐号<em class="col_red">企商汇用户注册协议</em>-->
              <!--</div>-->
              <div class="chenk_phone">
                <span id="ff1">收不到短信？使用<em class="col_red" id="phone_code">语音验证码</em></span>
                <span id="ff2">电话拨打中...请留意来电哦！！</span>
              </div>
              <div class="checkbox">
                <span class="kongge"><i class="iconfont">&#xe644;</i></span>登录将自动注册帐号<em class="col_red" id="xieyi">企商汇用户注册协议</em>
              </div>
              <!--<div id="xieyiDiv" style="display: none">-->
              <!--<div class="chenk_phone resetBotoom" style="flex-direction: column;display: flex">-->
              <!--<span >轻触注册表示您同意</span>-->
              <!--<span><em class="col_red" id="xieyi" ><<修车仔用户注册协议>></em></span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </div>
        </form>
        <form id="ptLogin" name="ptLogin">
          <div class="content_02">

            <div class="flex_row btn border_01">
              <!--<i class="flex_width iconfont">&#xe786;</i>-->
              <input onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" class="text flex_1" id="loginname1" type="text" maxlength="30" placeholder="请输入您的用户名"/>
              <i class="flex_width iconfont2 deletIcon ty ">&#xe7b6;</i>
            </div>
            <div class="flex_row btn border_01" >
              <!--<i class="flex_width iconfont">&#xe787;</i>-->
              <input class="text flex_1" type="password"  id="code1" placeholder="请输入密码"/>
              <!--<i class="iconfont flex_width kejian ty">&#xe789;</i>-->
              <!--<i class="iconfont2 flex_width bukejian ty">&#xe7b6;</i>-->
              <i class="flex_width iconfont2 deletIcon ty">&#xe7b6;</i>
            </div>
            <div class="erb">
              <div type="button" id="tcode1" class="btn"><div class="loadingDiv"> </div><p>登录</p></div>

            </div>
            <div class="erb">
              <text class="huo">或</text>
            </div>
            <div class="erb">
              <div type="button " id="tcode2" data-index="1" class="btn tabButn">手机快捷登录</div>
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
      <div class="text-right"><a id="qq"><img src="./img/at_qq.png"/></a></div>
      <div class="text-left"><a id="weixin"><img src="./img/at_wx.png"/></a></div>
    </div>
  </footer>
</div>
</template>

<script>

    export default {
        name: "login",

    }
</script>

<style scoped lang="less">
  @import "./css/index.less";
</style>
