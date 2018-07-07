<template>
    <div class="my-center-block">
        <div class="my-center-block-item" @click="gotoCard">
            <i class="iconfont2">&#xe7ff;</i>
            <span>卡券包</span>
        </div>
        <div class="my-center-block-item" @click="gotoRecord">
            <i class="iconfont2 yel">&#xe7fe;</i>
            <span>爱车档案</span>
        </div>
        <div class="my-center-block-item" @click="gotoInsurance">
            <i class="iconfont2 blu">&#xe803;</i>
            <span>我的保单</span>
        </div>
        <div class="my-center-block-item" @click="gotoCarOrder">
            <i class="iconfont2">&#xe80d;</i>
            <span>车辆订单</span>
        </div>
        <div class="my-center-block-item" @click="gotoFind">
            <i class="iconfont2 gre">&#xe7fa;</i>
            <span>我的发现</span>
        </div>
        <div class="my-center-block-item" @click="inviteFriend">
            <i class="iconfont2 blu">&#xe805;</i>
            <span>邀请好友</span>
        </div>
        <div class="my-center-block-item" @click="serviceClick">
            <i class="iconfont2 yel">&#xe7fa;</i>
            <span>客户服务</span>
        </div>
        <div class="my-center-block-item" @click="suggestClick">
            <i class="iconfont2">&#xe804;</i>
            <span>意见反馈</span>
        </div>
        <transition name="expand">
            <sugg-est v-if="suggestshow"></sugg-est>
            <ser-vice v-if="serviceshow"></ser-vice>
        </transition>
    </div>
</template>
<script>
    import suggEst from './suggest.vue'
    import serVice from './callServer.vue'
    export default{
        data(){
            return{
                suggestshow:false,
                serviceshow:false
            }
        },
        methods:{
            gotoCard:function(){
                location.href = "/m-center/hongbao/index.html"
            },
            gotoRecord:function(){
                location.href = "/MaintainFiles/FirstFile/index.html"
            },
            gotoInsurance:function(){
                location.href = "/free_maintain/car_order/index.html"
            },
            gotoCarOrder:function(){
                location.href = "/buyCar/orderList/index.html"
            },
            gotoFind:function(){
                location.href = "/bbs/bbs-m-center"
            },
            inviteFriend:function(){
                location.href = "/m-center/myyq/index.html"
            },
            serviceClick:function(){
                this.serviceshow = true
            },
            suggestClick:function(){
                this.suggestshow = true
            }
        },
        components:{
            'sugg-est':suggEst,
            'ser-vice':serVice
        }
    }
</script>