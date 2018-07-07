<template>
  <footer v-if="info.length > 0">
    <div class="add" @click="add">
      <span>新增地址</span>
      <i class="iconfont2">&#xe7c9;</i>
    </div>
  </footer>
</template>

<script>
    export default {
      name:'footer',
      data() {
        return {

        }
      },

      props:['info'],

      methods:{
        add:function () {
          this.$parent.getUserInfo();
        }
      }
    }
</script>
