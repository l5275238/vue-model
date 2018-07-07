<template>
  <div>
    <transition name="expand">
        <sett-ing v-if="settShow"></sett-ing>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import SettIng from './body/setting.vue'
  export default {
    data:function(){
      return {
        settShow : false
      }
    },
    mounted(){
      let _this = this;
      qshObject.newheader({
        mount:this.$el,
        name:'',
        fixed:false,
        leftItems: [
          {
            text: '设置',
            handler:function(){
              _this.settShow = true;
            }
          }
        ]
      });
    },
    components:{
      'sett-ing':SettIng
    }
  }
</script>
