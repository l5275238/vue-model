<template>
    <div id="container">
        <qsh-header v-if="islogin" :listLength="carlist.length"></qsh-header>
        <qsh-body v-if="islogin" :carlist="carlist"></qsh-body>
    </div>
</template>
<script>
    import qshHeader from './qshHeader.vue';
    import qshBody from './qshBody.vue';
    import carFiles from "@server/my_center/carFiles.js"
    export default {
      data(){
        return{
          carlist:[],
          islogin:false
        }
      },
      components:{
        qshHeader,
        qshBody
      },
      created(){
        carFiles.init(this);
        carFiles.getMyCarInfo()
      },
      methods:{

      }
    }
</script>
<style lang="less">
  @import "../css/main.less";
</style>

