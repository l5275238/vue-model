<template>
  <section>
    <div class="address-item" v-for="(item,key) in info">
      <div class="address-detail">
        <div class="address-info">
          <div class="address-name">{{item.receiver}}</div>
          <div class="address-phone">{{item.phone}}</div>
        </div>
        <div class="address-address">{{item.area_name + item.town_name}}</div>
      </div>
      <div class="address-ops">
        <div class="address-default" @click="set(item.address_id)">
          <i class="iconfont2" :class="{selected: item.is_default == 1}">&#xe7b7;</i>
          <span>设为默认地址</span>
        </div>
        <div class="address-delete" @click="deleted(item.address_id)">
          <i class="iconfont">&#xe620;</i>
          <span>删除</span>
        </div>
        <div class="address-edit" @click="edit(item.address_id)">
          <i class="iconfont">&#xe6e6;</i>
          <span>编辑</span>
        </div>
      </div>
    </div>

    <div class="address-none" v-if="info.length == 0">
      <i class="iconfont2">&#xe82b;</i>
      <div class="address-text">您还未添加收货地址</div>
      <div class="address-btn" @click="add">立即添加</div>
    </div>
  </section>
</template>

<script>
    export default {
      name:'body',
      data() {
        return {

        }
      },

      props:['info'],

      methods:{
        set:function (id) {
          this.$emit('getDefault', id)
        },

        deleted:function (id) {
          let _this = this;
          qshObject.alert({
            'type': 'tip',
            'msg': '您确定要删除吗？',
            'ok': function(){//rightbtn
              _this.deleteMethods(id)
            },
            'cancel': function(){//leftbtn

            }
          })
        },

        deleteMethods:function (id) {
          let _this = this;
          let loading = qshObject.toast('loading');
          qshObject.ajax('/Action/McenterUpdateAddressAction.do',{
            type: 0,
            user_id:'user_id',
            addressId: id
          }).then(function (data) {
            loading.hide();
            _this.info.map(function (item,key) {
               if(item.address_id == id){
                _this.info.splice(key,1)
               }
            })
            qshObject.toast('success', '删除成功！');
          },function (err) {
            loading.hide();
            qshObject.toast(err.msg);
          })
        },

        edit:function (id) {
          let _this = this;
          this.info.filter(function (item) {
            if(item.address_id == id){
              _this.$parent.userinfo = Object.assign({}, item, {
                type:1
              });
              _this.$parent.defaultinfo = Object.assign({}, _this.$parent.userinfo, {});
            }
          })
          $('.info-head .qshhead-name').text('编辑收货地址');
          this.$parent.isShow = true;
        },

        add:function () {
          this.$parent.getUserInfo();
        }
      }
    }
</script>
