<template>
    <div id="container">
        <!--<qsh-header></qsh-header>-->
        <qsh-body></qsh-body>
        <qsh-footer></qsh-footer>
    </div>
</template>
<script>
//  import qshHeader from './qshHeader.vue';
  import qshBody from './qshBody.vue';
  import qshFooter from './qshFooter.vue';



export default {
    components:{
//      qshHeader,
      qshBody,
      qshFooter
    },

    created:function(){
      qshObject.loadingCheckStatu(function(status){
        if(status){

        }else{
          var cookie_uuid = 'f822eb296b016444f28d04d08a55b5a5830d4ad0dcc3771b2a99ba9e24754e825a69f44ce9ec51b9b99a037da24ce5921df78cfea4658d9b9ec148a598f9e8eeaead916e50b00489c3e6c75a86bacb194853eb1663eb88edb97120c96e9de39f59f1cc0604a0a71dc1a64fbbfcfc1300fdb240ee5aedb42ca8df893da7541b852ba369ac9d8372cfa45e5ef4e224fbf9';
          $.cookie('cookie_uuid', cookie_uuid, {expires:1000,path: '/'});//本地调试需要登录的情况用这个，上面的cookie_uuid值，需要在a.zj-qsh.com上登录，手动把对应的值拷贝过来

          //qshObject.goLogin();//发布环境用
        }
        //status true为已登录，false未登陆
      })

    }
  }
</script>
<style lang="less">
  /*@import "../css/main.less";*/
  /*@import "../css/sub/extra.less";*/
  /*@import "../css/sub/mycenter_top.less";*/
  /*@import "../css/sub/mycenter_order.less";*/
  /*@import "../css/sub/mycenter_block.less";*/
</style>
  <style lang="less"  >


    @import "../css/main.less";
    @import "../css/sub/extra.less";
    @import "../css/sub/mycenter_top.less";
    @import "../css/sub/mycenter_order.less";
    @import "../css/sub/mycenter_block.less";




  </style>

