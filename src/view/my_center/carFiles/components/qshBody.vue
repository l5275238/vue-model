<template>
  <section>
    <template v-if="carlist.length>0">
      <div class="carinfolist swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide carinfolist-item" v-for="item in carlist">
            <div class="carinfolist-item-carLogo">
              <img :src="item.logosrc">
            </div>
            <div class="carinfolist-item-carName">
              {{item.carname_text}}<i class="qshiconfont bianjiicon" @click="editCarinfo()"></i>
            </div>
            <div class="carinfolist-item-carNo">
              {{item.car_no}}
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="setdefault-btn">
        <div>设为默认车辆</div>
        <div>
          <input v-if="defaultchoose" class="weui_switch" type="checkbox" v-model="defaultchoose" disabled="true">
          <input v-else class="weui_switch" type="checkbox" v-model="defaultchoose">
        </div>
      </div>
      <div class="baoyang-records" @click="gorecordlist">
        <div>保养记录</div>
        <div><i class="iconfont">&#xe632;</i></div>
      </div>
      <div class="break-rules">
        <div class="unfinshend">违章查询<span>(敬请期待)</span></div>
        <div><i class="iconfont">&#xe632;</i></div>
      </div>
    </template>
    <carlist-empty v-else></carlist-empty>
  </section>
</template>
<script>
  import carlistEmpty from './carlistEmpty.vue';
  export default {
    data(){
    return {
      chooseIndex: 0,
      defaultchoose: true,
      default_carid: ''
    }
  },
  props:['carlist'],
  components:{
    carlistEmpty
  },
  mounted(){
    let _this = this;
    var mySwiper = new Swiper('.swiper-container', {

      // 如果需要分页器
      pagination: '.swiper-pagination',
      onTransitionEnd: function (swiper) {
        _this.chooseIndex = swiper.activeIndex;
        _this.defaultchoose = _this.carlist[swiper.activeIndex].default;
      }

    })

    this.$watch(function () {
      return _this.defaultchoose;
    }, function (newVal, oldVal) {
      if (newVal && _this.carlist[_this.chooseIndex].car_id != _this.default_carid) {
        _this.setdefaultCar();
      }

    })
  },

  methods:{
    setdefaultCar(){
      let _this = this;
     qshObject.ajax('/Action/McenterUpdateMyCarAction.do',{
       type:1,
       user_id:'user_id',
       car_id:_this.carlist[_this.chooseIndex].car_id
     }).then(function(data){
       _this.carlist.map(function (item) {
         item.default = false;
       })

       _this.carlist[_this.chooseIndex].default = true;
       _this.default_carid = _this.carlist[_this.chooseIndex].car_id;
     },function(err){
       if(err.error=='403'){
         qshObject.goLogin();
       }else{
         qshObject.toast('tip','设置默认车辆失败');
       }

         _this.defaultchoose = false;
     })
    },
    gorecordlist()
    {
      //location.href = '/MaintainFiles/list/index.html?car_conf_id=' + this.carlist[this.chooseIndex].car_conf_id + '&car_id=' + this.carlist[this.chooseIndex].car_id;
      this.$router.push('carFiles/list?car_conf_id=' + this.carlist[this.chooseIndex].car_conf_id + '&car_id=' + this.carlist[this.chooseIndex].car_id)
    },
    gobreakRules(){
      location.href = '/MaintainFiles/break-rules/index.html'
    },
    editCarinfo(){
      //location.href = '/MaintainFiles/carInfo/index.html?car_id=' + this.carlist[this.chooseIndex].car_id;
      this.$router.push('/carinfo?car_id=' + this.carlist[this.chooseIndex].car_id)
    }
  }
  }

</script>
