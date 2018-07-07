<template>
  <section>
    <my-item v-for="(li,index) in data"
             :data="data"
             :car_id="car_id"
             :car_conf_id="car_conf_id"
             :index="index"
             :li="li"
             :key="index"></my-item>
    <my-btn v-if="data.length==0"
            :car_id="car_id"
            :car_conf_id="car_conf_id"></my-btn>
  </section>
</template>
<script>
  import  MyItem  from './myitem.vue';
  import  MyBtn from './btn.vue'
  export default{
    props:["data","car_id","car_conf_id"],
    components: {
      MyItem,
      MyBtn
    },
  }
</script>
