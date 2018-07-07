<template>
  <div id="contain">
    <header></header>
    <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div>
      <!--<div class="swiper-pagination"></div>-->
      <div class="swiper-wrapper">
        <div class="about swiper-slide">
          <img src="../img/about_us_01.jpg">
          <img  src="../img/about_us_02.jpg">
          <img  src="../img/about_us_003.jpg">
          <img src="../img/about_us_04.jpg">
          <img class="swiper-lazy" src="../img/about_us_05.jpg">
          <img class="swiper-lazy" src="../img/about_us_06.jpg">
        </div>
        <div class="culture swiper-slide">
          <img class="swiper-lazy"src="../img/culture_01.jpg">
          <img class="swiper-lazy"src="../img/culture_02.jpg">
          <img class="swiper-lazy"src="../img/culture_03.jpg">
          <img class="swiper-lazy"src="../img/culture_04.jpg">
          <img class="swiper-lazy"src="../img/culture_05.jpg">
          <img class="swiper-lazy"src="../img/culture_06.jpg">
          <img class="swiper-lazy"src="../img/culture_07.jpg">
        </div>
        <div class="join swiper-slide">
          <img class="swiper-lazy"src="../img/join_us_01.jpg">
          <img class="swiper-lazy"src="../img/join_us_02.jpg">
          <img class="swiper-lazy"src="../img/join_us_003.jpg">
          <img class="swiper-lazy"src="../img/join_us_04.jpg">
          <img class="swiper-lazy"src="../img/join_us_05.jpg">
          <img class="swiper-lazy"src="../img/join_us_06.jpg">
          <img class="swiper-lazy"src="../img/join_us_07.jpg">
          <img class="swiper-lazy"src="../img/join_us_08.jpg">
        </div>
      </div>

    </div>
  </div>
</template>

<script>

    export default {
        name: "app",
          mounted(){

            qshUtil.header({
              mount: 'header',
              name: "关于我们",
              style: 'custom'
            });
            var mySwiper;
            var name = "修车仔简介";
            mySwiper= new Swiper('.swiper-container',{
              pagination: '.swiper-pagination',

              scrollbar: '.swiper-scrollbar',//滚动条
              scrollbarHide: false,
              //loop : true,//可以环线
              paginationClickable: true,
              paginationBulletRender: function (index, className) { //tab选项卡
                switch (index) {
                  case 0: name='修车仔简介';break;
                  case 1: name='企业文化';break;
                  case 2: name='诚招加盟商';break;
                }
                return  '<div class="' + className + '"> '+ name + '</div>';
              },
              // Disable preloading of all images
              preloadImages: false,
              // Enable lazy loading
              lazyLoading: true,//图片懒加载
              //autoHeight: true, //高度随内容变化
              // onSlideChangeStart: function(swiper){
              //   $(window).scrollTop(0)
              // }
            });
          }
    }
</script>
<style  lang="less">
  @import "../css/main.less";

</style>

