<template>
  <div id="container_list">
      <my-head :car_id="car_id"
               :car_conf_id="car_conf_id"
               @toggleList="addMateList"></my-head>
      <my-body v-if="islogin"
               :data="data"
               :car_id="car_id"
               :car_conf_id="car_conf_id"></my-body>
      <transition name="fade"
                  enter-active-class="animated bounceInRight"
                  leave-active-class="animated bounceOutRight">
        <temp v-if="tempInit"
              v-show="tempShow"
              :mate-list="mateList"
              :car_id="car_id"
              :car_conf_id="car_conf_id"
              @hideList="toggleList"
              @upDate="upDate"
        ></temp>
      </transition>
  </div>
</template>
<script>
  import MyHead from './head.vue';
  import MyBody from './body.vue';
  import carFiles from '@server/my_center/carFiles.js';
  export default{
    data(){
      return{
          data:[],
          islogin:false,
          tempInit:false,
          tempShow:false,
          mateList:[]
      }
    },

    components: {
      MyHead,
      MyBody,
      Temp: resolve => {
        require(['./temp'], resolve)
      },
    },

    mounted(){
      carFiles.init(this);
      carFiles.getBaoYangList()
    },

    props:['car_conf_id','car_id'],

    methods:{
      toggleList(){
        if(!this.tempInit){
          this.tempInit = true
        }
        this.tempShow = !this.tempShow;
      },

      addMateList(){
        if(!this.tempInit){
          carFiles.getMateList();
        }else {
          this.tempShow = !this.tempShow;
        }
      },

      upDate(){
        this.islogin = false;
        carFiles.init(this);
        carFiles.getBaoYangList();
      }
    },
  }
</script>
<style lang="less">
  @import "../css/main.less";
</style>
