<template>
  <heade :leftTitle=true>
    <div slot="leftTitle" class="header-left" @click="goback">
      <i class="iconfont icon-xiuchezai2-tuihou"></i>
    </div>
    <span slot="rightTitle" class="header-right" @click="addCar">添加车辆</span>
  </heade>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {

      }
    },

    props:['listLength'],

    methods:{
      goback(){
        this.$router.go(-1)
      },
      addCar(){
        this.$router.push('/carFiles/carInfo?defaultcar=1')
      }
    }
  }
</script>

