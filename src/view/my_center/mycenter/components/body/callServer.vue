<template>
    <div id="fuwu">
        <div class="fuwublock" v-bind:style="{marginTop:mtop+'px'}">
            <div class="fuwutitle">联系客服</div>
            <div class="fuwuline2">400-158-7373</div>
            <div class="fuwuline2">服务时间：8:00-17:00</div>
            <div class="fuwubtn">
                <div @click="cancelOut">取消</div>
                <div class="line"><a href="tel:4001587373">拨打</a></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                mtop: ($(window).height() - 150) / 2
            }
        },
        methods:{
            cancelOut:function(){
                this.$parent.serviceshow = false;
            }
        }
    }
</script>