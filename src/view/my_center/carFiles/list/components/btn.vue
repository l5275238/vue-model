<template>
  <div class="no-record">
    <div class="no-bg">
      <img src="../img/noBY.png" alt="">
    </div>
    <p class="prompt-1">您还没有任何保养记录哦！</p>
    <p class="prompt-2">赶快为您的爱车保养~</p>
    <p class="go-by" @click="goBY()">立即保养</p>

  </div>
</template>
<script>
  export default{
    props:["car_id","car_conf_id"],
    methods:{
      goBY(){
        location.href = "/maintenance/hour.html?car_id=" + this.car_id;
      },
    }
  }
</script>
