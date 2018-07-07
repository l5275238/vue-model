<template>
  <div class="carinfolist-empty">
    <img src="../img/09.jpg">
    <div class='empty-tip-text'>您还未添加车辆~</div>
    <div class="addcar-btn" @click="goaddcar">添加车辆</div>
  </div>
</template>
<script>
  export default {
    methods:{
      goaddcar:function(){
        this.$router.push('/carFiles/test')
      }
    }
  }
</script>
