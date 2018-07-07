<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

  import { XButton } from 'vux'
export default {
  name: 'App',
  components: {
    XButton
  },
  created(){


  },
  mounted(){

  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 278550 */
    src: url('//at.alicdn.com/t/font_278550_n3s8lp1wzk1hh0k9.eot');
    src: url('//at.alicdn.com/t/font_278550_n3s8lp1wzk1hh0k9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_278550_n3s8lp1wzk1hh0k9.woff') format('woff'),
    url('//at.alicdn.com/t/font_278550_n3s8lp1wzk1hh0k9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_278550_n3s8lp1wzk1hh0k9.svg#iconfont') format('svg');
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
