<template>
    <div id="container">
        <head-q></head-q>
        <body-q :info="info" @getDefault="getDefault"></body-q>
        <transition name="fade"
                    enter-active-class="animated bounceInRight"
                    leave-active-class="animated bounceOutRight">
          <info v-show="isShow" :userinfo="userinfo" :defaultinfo="defaultinfo"></info>
        </transition>
        <foot-q :info="info"></foot-q>
    </div>
</template>

<script>
    import HeadQ from './head.vue';
    import BodyQ from './body.vue';
    import Info from './info.vue';
    import FootQ from './foot.vue';
    import '../js/index'

    const qsh_location_city = 'qsh-location-city';
    export default {
      name:'app',
      data:function(){
        return {
          info:{},
          isShow:false,
          userinfo:{},
          defaultinfo:{},
          city_name:'',
          province_id: '',
          city_id: '',
          area_id: ''
        }
      },

      components: {
          HeadQ,
          BodyQ,
          Info,
          FootQ
      },

      methods:{
        getAddressInfo:function () {
          let _this = this;
          let loading = qshObject.toast('loading');
          qshObject.ajax('/Action/McenterQueryAddressAction.do',{

          }).then(function (data) {
            loading.hide();
            _this.info = data.concat();
            _this.info.map(function (item,key) {
              item.is_default = key == 0 ? 1 : 0;
            })

            let local = JSON.parse(localStorage.getItem(qsh_location_city));
            if(local){
              _this.city_name = local.province.substr(0,2) + local.cityName + local.townName;
              _this.province_id = local.provinceid;
              _this.city_id = local.cityId;
              _this.area_id = local.townId;
            }
          },function (err) {
            loading.hide();
            qshObject.toast(err.msg);
          })
        },

        getDefault:function (id) {
          let _this = this;
          let loading = qshObject.toast('loading');
          qshObject.ajax('/Action/McenterUpdateAddressAction.do',{
            type: 3,
            user_id:'user_id',
            addressId: id
          }).then(function (data) {
            loading.hide();
            _this.info = _this.info.map((item)=>{
              if(item.address_id == id){
                return Object.assign({}, item, {
                  is_default: 1
                })
              }else{
                return Object.assign({}, item, {
                  is_default: 0
                })
              }
            })
          },function (err) {
            loading.hide();
            qshObject.toast(err.msg);
          })
        },

        getUserInfo:function () {
          let _this = this;
          let loading = qshObject.toast('loading');
          qshObject.ajax('/Action/McenterIndexAction.do',{

          }).then(function (data) {
            loading.hide();
            _this.userinfo = Object.assign({}, data[0],{
              area_name: _this.city_name || '请选择省、市、区/县',
              town_name: '',
              receiver: data[0].real_name || data[0].login_name,
              phone: data[0].valid_mobile,
              is_default: _this.info.length ? 0 : 1, //是否默认地址
              province_id: _this.province_id,
              city_id: _this.city_id,
              area_id: _this.area_id,
              type: 0 //0 新增收货地址 1 编辑收货地址
            })
            _this.defaultinfo = Object.assign({}, _this.userinfo, {});

            $('.info-head .qshhead-name').text('添加收货地址');
            _this.isShow = true;
          },function (err) {
            loading.hide();
            qshObject.toast(err.msg);
          })
        }
      },

      created:function () {
        let _this = this;
        qshObject.loadingCheckStatu(function(status){
          //status true为已登录，false未登陆
          if(status){
            _this.getAddressInfo()
          }else {
//            var cookie_uuid = '20755fdd9ef4333f0341570f69dee8a899cacab660448e8316a488d62416ae7357a25b5fbe2f74e0755aea16cfe7823690ac5b15847a83fbcc8780db8daacb4914c0c1ab6480c73ae92369a1b26ef66168d4d36ca42f85e20a82d9c29e59fd7ce348237884dfe9da99cc94ca614c303e42f8124242bc471604ba65e92d64e6bd2ba369ac9d8372cfa45e5ef4e224fbf9';
//            $.cookie('cookie_uuid', cookie_uuid, {expires:1000,path: '/'});
            qshObject.goLogin();
          }
        })
      }
    }
</script>
