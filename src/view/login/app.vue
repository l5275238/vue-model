<template>
  <div id="login">
  <div id="container">
    <router-view/>

  </div>
    </div>
</template>

<script>
    export default {
        name: "app",

    }
</script>

<style  lang="less">
  #login{
    width: 100%;
    height: 100%;
    @import "./css/index.less";
  }

</style>
