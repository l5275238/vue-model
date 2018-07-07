<template>
  <div>
    <mycenter-top @zidingyi = "getChildInfo"></mycenter-top>
    <mycenter-order :childedName = 'parentInfo'></mycenter-order>
    <mycenter-block></mycenter-block>
  </div>
</template>
<script>
  import mycenterTop from "./body/mycenter-top.vue";
  import mycenterOrder from "./body/mycenter-order.vue";
  import mycenterBlock from "./body/mycenter-block.vue";
  export default{
    data(){
      return {
        parentInfo:{}
      }
    },
    components:{
      "mycenter-top":mycenterTop,
      mycenterOrder,
      mycenterBlock
    },
    methods:{
      getChildInfo:function(obj){
        let _this = this;
        _this.parentInfo = obj
      }
    }
  }
</script>
