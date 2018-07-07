<template>
  <heade :leftTitle=true>
    <div slot="leftTitle" class="header-left" @click="goback">
      <i class="iconfont icon-xiuchezai2-tuihou"></i>
      <span>返回</span>
    </div>
    <div slot="rightTitle" class="header-right" @click="handler">
      <i class="iconfont2 icon-xiuchezai2-jia"></i>
    </div>
  </heade>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:["car_id","car_conf_id"],
    methods:{
      goback(){
        this.$router.go(-1)
      },

      handler(){
        this.$emit('toggleList')
      }
    }
  }
</script>
