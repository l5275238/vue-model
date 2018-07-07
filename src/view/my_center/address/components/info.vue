<template>
  <div class="info">
    <div class="info-head"></div>
    <div class="info-content">
      <div class="info-lines">
        <div class="info-lines-item">
          <div class="info-lines-item-label">收货人：</div>
          <div class="info-lines-item-input">
            <input type="text" maxlength="20" v-model="userinfo.receiver">
          </div>
        </div>
        <div class="info-lines-item">
          <div class="info-lines-item-label">手机号码：</div>
          <div class="info-lines-item-input">
            <input type="text" maxlength="11" v-model.number="userinfo.phone">
          </div>
        </div>
        <div class="info-lines-item">
          <div class="info-lines-item-label">所在地区：</div>
          <div class="info-lines-item-input">
            <div class="info-lines-item-address" :class="{valued: isValued}" @click="locationLine(userinfo.type)">{{userinfo.area_name}}</div>
            <div class="info-lines-item-getaddress" v-if="userinfo.type == 0" @click="dingwei">
              <i class="iconfont2">&#xe827;</i>
              <span>定位</span>
            </div>
          </div>
        </div>
        <div class="info-lines-item">
          <div class="info-lines-item-label">详细地址：</div>
          <div class="info-lines-item-input">
            <input type="text" maxlength="45" v-model="userinfo.town_name">
          </div>
        </div>
        <div class="info-lines-item" @click="isDefault">
          <div class="info-lines-item-label">
            <i class="iconfont2" :class="{select: userinfo.is_default}">&#xe7b7;</i>
          </div>
          <div class="info-lines-item-input">设为默认地址</div>
        </div>
      </div>
      <div class="info-submit-wrap">
        <div class="info-submit" @click="submit(userinfo.type)">保存</div>
      </div>
    </div>
    <transition name="fade"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight">
      <location v-show="locationShow" :datalist="datalist"></location>
    </transition>
  </div>
</template>

<script>
  import Location from './location.vue';
  import CityData from '../js/city';

  const qsh_location_city = 'qsh-location-city';
  export default {
    name:'info',
    data() {
      return {
        locationShow:false,
        city_data:CityData,
        datalist:{
          prov:{},
          city:{},
          area:{}
        }
      }
    },

    components: {
      Location
    },

    props:['userinfo', 'defaultinfo'],

    methods:{
      // 添加收货地址
      add:function () {
        let _this = this;
        if(this.userinfo.receiver !== '' &&
          this.userinfo.phone !== '' &&
          this.userinfo.town_name !== '' &&
          this.userinfo.area_name !== '请选择省、市、区/县'){

          let loading = qshObject.toast('loading');
          qshObject.ajax('/Action/McenterUpdateAddressAction.do',{
            type:1,
            user_id:'user_id',
            receiver: _this.userinfo.receiver,
            town_name: _this.userinfo.town_name,
            province_id: _this.userinfo.province_id,
            city_id: _this.userinfo.city_id,
            area_id: _this.userinfo.area_id,
            phone: _this.userinfo.phone,
            area_name: _this.userinfo.area_name,
            is_default: _this.userinfo.is_default
          }).then(function (data) {
            loading.hide();
            _this.renew();
            qshObject.toast('success', '编辑成功！');
          },function (err) {
            loading.hide();
            qshObject.toast(err.msg);
          })
        }else {
          qshObject.toast('请将地址相关信息填写完整');
        }
      },

      // 编辑收货地址
      edit:function () {
        let _this = this;
        if(this.userinfo.receiver !== '' &&
          this.userinfo.phone !== '' &&
          this.userinfo.town_name !== ''){

          if(this.userinfo.receiver === this.defaultinfo.receiver &&
            this.userinfo.phone === this.defaultinfo.phone &&
            this.userinfo.town_name === this.defaultinfo.town_name &&
            this.userinfo.is_default === this.defaultinfo.is_default &&
            this.userinfo.area_name === this.defaultinfo.area_name){
            qshObject.toast('请编辑您要修改的资料');

          }else {
            let loading = qshObject.toast('loading');
            qshObject.ajax('/Action/McenterUpdateAddressAction.do',{
              type:2,
              user_id:'user_id',
              address_id: _this.userinfo.address_id,
              receiver: _this.userinfo.receiver,
              town_name: _this.userinfo.town_name,
              province_id: _this.userinfo.province_id,
              city_id: _this.userinfo.city_id,
              area_id: _this.userinfo.area_id,
              phone: _this.userinfo.phone,
              area_name: _this.userinfo.area_name,
              is_default: _this.userinfo.is_default
            }).then(function (data) {
              loading.hide();
              _this.renew();
              qshObject.toast('success', '编辑成功！');
            },function (err) {
              loading.hide();
              qshObject.toast(err.msg);
            })
          }
        }else {
          qshObject.toast('请编辑您要修改的资料');
        }
      },

      // 更新页面数据
      renew:function () {
        let _this = this;
        qshObject.ajax('/Action/McenterQueryAddressAction.do',{

        }).then(function (data) {
          _this.$parent.info = data.concat();
          _this.$parent.info.map(function (item,key) {
            item.is_default = key == 0 ? 1 : 0;
          })
          _this.$parent.isShow = false;
        },function (err) {
          qshObject.toast(err.msg);
        })
      },

      // 保存按钮
      submit:function (type) {
        if(type == 0){
          this.add();
        }else {
          this.edit();
        }
      },

      isDefault:function () {
        if(this.$parent.info.length){
          if(this.userinfo.is_default == 0){
            this.userinfo.is_default = 1;
          }else {
            this.userinfo.is_default = 0;
          }
        }
      },

      locationLine:function (type) {
        if(type == 0){
          this.addToLocation();
        }else {
          this.editToLocation();
        }
      },

      editToLocation:function () {
        let _this = this;
        // 省
        this.datalist.prov = {
          id: this.userinfo.province_id,
          name: this.city_data.prov[this.userinfo.province_id],
          show: true
        }

        // 市
        let data = this.city_data.city[this.userinfo.province_id];
        let cityData = Object.keys(data).map(function (item) {
          return {
            id: item,
            name: data[item]
          }
        })
        cityData.map(function (item) {
          if(item.id == _this.userinfo.city_id){
            _this.datalist.city = {
              id: item.id,
              name: item.name,
              show: true
            }
          }
        })

        // 县
        let areaData = this.city_data.town[this.userinfo.city_id];
        this.datalist.area = Object.keys(areaData).map(function (item) {
          return {
            id: item,
            name: areaData[item]
          }
        })

        this.locationShow = true;
      },

      addToLocation:function () {
        let _this = this;
        let provinceId = "330000";
        let cityId = "331000";

        if(!this.$parent.userinfo.province_id){
          // 省
          this.datalist.prov = {
            id: provinceId,
            name: this.city_data.prov[provinceId],
            show: true
          }

          // 市
          let data = this.city_data.city[provinceId];
          let cityData = Object.keys(data).map(function (item) {
            return {
              id: item,
              name: data[item]
            }
          })
          cityData.map(function (item) {
            if(item.id == cityId){
              _this.datalist.city = {
                id: item.id,
                name: item.name,
                show: true
              }
            }
          })

          // 县
          let areaData = this.city_data.town[cityId];
          this.datalist.area = Object.keys(areaData).map(function (item) {
            return {
              id: item,
              name: areaData[item]
            }
          })
        }else {
          // 省
          this.datalist.prov = {
            id: this.$parent.userinfo.province_id,
            name: this.city_data.prov[_this.$parent.userinfo.province_id],
            show: true
          }

          // 市
          let data = this.city_data.city[_this.$parent.userinfo.province_id];
          let cityData = Object.keys(data).map(function (item) {
            return {
              id: item,
              name: data[item]
            }
          })
          cityData.map(function (item) {
            if(item.id == _this.$parent.userinfo.city_id){
              _this.datalist.city = {
                id: item.id,
                name: item.name,
                show: true
              }
            }
          })

          // 县
          let areaData = this.city_data.town[_this.$parent.userinfo.city_id];
          this.datalist.area = Object.keys(areaData).map(function (item) {
            return {
              id: item,
              name: areaData[item]
            }
          })
        }

        this.locationShow = true;
      },

      dingwei:function () {
        let lng = 28.668469;
        let lat = 121.440613;
        let _this = this;
        let local = JSON.parse(localStorage.getItem(qsh_location_city));
        if(local){
          let locationInfo = Object.assign({}, null, {
            province: local.province.substr(0,2),
            provinceid: local.provinceid,
            cityId: local.cityId,
            cityName: local.cityName,
            townId: local.townId,
            townName: local.townName
          })

          this.addressInfo(locationInfo);
          return
        }

        let loading = qshObject.toast('loading','定位中...');
        qshObject.ajax('/Action/CityLocation.do', {
          /*lng: lng,
          lat: lat,
          type: 5*/
        }).then(function (data) {
          loading.hide();
          let provinceId = "330000";
          let cityId = "331000";
          let areaId = "331002";
          let provinceText = "浙江省";
          let cityText = "台州市";
          let areaText = "椒江区";

          if(data.provinceid && data.cityid && data.areaid){
            provinceId = data.provinceid;
            provinceText = data.province;
            cityId = data.cityid;
            cityText = data.city;
            areaId = data.areaid;
            areaText = data.district;
          }

          let locationInfo = Object.assign({}, null, {
            province: provinceText,
            provinceid: provinceId,
            cityId: cityId,
            cityName: cityText.substr(0,2),
            townId: areaId,
            townName: areaText.substr(0,2)
          })
          localStorage.setItem(qsh_location_city, JSON.stringify(locationInfo));

          _this.addressInfo(locationInfo);
        }, function (err) {
          loading.hide();
        });
      },

      addressInfo:function (locationInfo) {
        this.$parent.userinfo.area_name = locationInfo.province.substr(0,2) + locationInfo.cityName + locationInfo.townName;
        this.$parent.userinfo.province_id = locationInfo.provinceid;
        this.$parent.userinfo.city_id = locationInfo.cityId;
        this.$parent.userinfo.area_id = locationInfo.townId;

        // 省
        this.datalist.prov = {
          id: locationInfo.provinceid,
          name: locationInfo.province,
          show: true
        }
        // 市
        this.datalist.city = {
          id: locationInfo.cityId,
          name: locationInfo.cityName,
          show: true
        }
        // 县
        let areaData = this.city_data.town[locationInfo.cityId];
        this.datalist.area = Object.keys(areaData).map(function (item) {
          return {
            id: item,
            name: areaData[item]
          }
        })
      }
    },

    mounted: function () {
      let _this = this;
      qshObject.newheader({
        mount:'.info-head',
        name: '',
        fixed:false,
        leftItems:[
          {
            icon:"xiuchezai2-back",
            handler: function(){
              _this.$parent.isShow = false;
            }
          }
        ]
      })
    },

    computed:{
      isValued:function () {
        if(this.userinfo.area_name == '请选择省、市、区/县'){
          return false
        }else {
          return true
        }
      }
    }
  }
</script>
