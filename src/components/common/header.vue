<template>
  <header class="header">
    <div class="main" :style="{background:bkColor}">
      <div>
        <div v-if="leftTitle">
          <slot name="leftTitle">

          </slot>
        </div>
        <i class="iconfont icon-xiuchezai2-tuihou" @click="goBack" v-else></i>

      </div>
      <div>
        <div>{{title}}</div>
      </div>
      <div>
        <slot name="rightTitle">

        </slot>
      </div>

    </div>

  </header>

</template>

<script>
    export default {
        name: "header",
      props:{
        title:{
          type:String,
          default:function () {

            return this.$route.meta.name
          }
        },
        bkColor:{
          type:String,
          default:"#fff",
        },
        leftTitle:{
          type:Boolean,
          default:false,
        },
        goBackFn:{
          type:Function,
        }
      },
      methods:{
        goBack:function () {
          if(this.goBackFn){
            this.goBackFn()
          }
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped lang="less">
  .header{
    height: 2.72222rem;
    width: 100%;
    .main{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 2.72222rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      z-index: 999;
    }
  }

</style>
