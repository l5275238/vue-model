<template>
  <div class="location">
    <div class="location-head"></div>
    <div class="location-prov" v-if="datalist.prov.show" @click="provMethods()">{{datalist.prov.name}}</div>
    <div class="location-city" v-if="datalist.city.show" @click="cityMehods()">{{datalist.city.name}}</div>
    <div class="location-content">
      <div class="location-line" v-for="i in datalist.area" @click="areaMethods(i.id, i.name)">{{i.name}}</div>
    </div>
  </div>
</template>

<script>
  import CityData from '../js/city';

  export default {
    name:'address',
    data() {
      return {

      }
    },

    props:['datalist'],

    mounted: function () {
      let _this = this;
      qshObject.newheader({
        mount: '.location-head',
        name: "选择所在地区",
        fixed: false,
        leftItems: [
          {
            icon: "xiuchezai2-back",
            handler: function () {
              _this.$parent.locationShow = false;
            }
          }
        ]
      })
    },

    methods: {
      provMethods:function () {
        let areaData = this.$parent.city_data.prov;
        this.datalist.area = Object.keys(areaData).map(function (item) {
          return {
            id: item,
            name: areaData[item]
          }
        })

        this.datalist.prov.show = false;
        this.datalist.city.show = false;
      },

      cityMehods:function () {
        let areaData = this.$parent.city_data.city[this.datalist.prov.id];
        this.datalist.area = Object.keys(areaData).map(function (item) {
          return {
            id: item,
            name: areaData[item]
          }
        })

        this.datalist.city.show = false;
      },

      areaMethods:function (id, name) {
        let _this = this;
        if(!this.datalist.prov.show && !this.datalist.city.show) {
          this.datalist.prov = {
            id: id,
            name: this.$parent.city_data.prov[id],
            show: true
          }

          let areaData = this.$parent.city_data.city[id];
          this.datalist.area = Object.keys(areaData).map(function (item) {
            return {
              id: item,
              name: areaData[item]
            }
          })
        }
        else if(this.datalist.prov.show && !this.datalist.city.show){
          let data = this.$parent.city_data.city[this.datalist.prov.id];
          let cityData = Object.keys(data).map(function (item) {
            return {
              id: item,
              name: data[item]
            }
          })
          cityData.map(function (item) {
            if(item.id == id){
              _this.datalist.city = {
                id: item.id,
                name: item.name,
                show: true
              }
            }
          })

          let areaData = this.$parent.city_data.town[id];
          this.datalist.area = Object.keys(areaData).map(function (item) {
            return {
              id: item,
              name: areaData[item]
            }
          })
        }
        else {
          this.$parent.userinfo.province_id = this.datalist.prov.id;
          this.$parent.userinfo.city_id = this.datalist.city.id;
          this.$parent.userinfo.area_id = id;
          this.$parent.userinfo.area_name = this.datalist.prov.name + this.datalist.city.name + name;
          this.$parent.locationShow = false;
        }
      }
    }
  }
</script>
