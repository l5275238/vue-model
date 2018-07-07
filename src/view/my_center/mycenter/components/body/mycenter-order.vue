<template>
    <div class="my-order">
        <div class="my-order-title">
            <span>我的订单</span>
            <div>
                <span>全部订单</span>
                <i class="iconfont2">&#xe7c2;</i>
            </div>
        </div>
        <div class="my-order-content">
            <div class="myorder-item" @click="dfk">
                <i class="iconfont2">&#xe7fc;</i>
                <span>待付款</span>
                <span class="mycenter-badge" v-if="childedName.dfk>0 && childedName.dfk<99">{{childedName.dfk}}</span>
                <span class="mycenter-badge" v-if="childedName.dfk>=99">99+</span>
            </div>
            <div class="myorder-item" @click="dfh">
                <i class="iconfont2">&#xe801;</i>
                <span>待发货</span>
                <span class="mycenter-badge" v-if="childedName.dfh>0 && childedName.dfh<99">{{childedName.dfh}}</span>
                <span class="mycenter-badge" v-if="childedName.dfh>=99">99+</span>
            </div>
            <div class="myorder-item" @click="dsh">
                <i class="iconfont2">&#xe7fd;</i>
                <span>待收货</span>
                <span class="mycenter-badge" v-if="childedName.dsh>0 && childedName.dsh<99">{{childedName.dsh}}</span>
                <span class="mycenter-badge" v-if="childedName.dsh>=99">99+</span>
            </div>
            <div class="myorder-item" @click="dfw">
                <i class="iconfont2">&#xe800;</i>
                <span>待服务</span>
            </div>
            <div class="myorder-item" @click="tk">
                <i class="iconfont2">&#xe811;</i>
                <span>退款</span>
                <span class="mycenter-badge" v-if="childedName.tk>0 && childedName.tk<99">{{childedName.tk}}</span>
                <span class="mycenter-badge" v-if="childedName.tk>=99">99+</span>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return{
            }
        },
        props:['childedName'],
        methods:{
            dfk:function(){
                location.href = "/m-center/list_bought/index.html?tj=dfk";
            },
            dfh:function(){
                location.href = "/m-center/list_bought/index.html?tj=dfh";
            },
            dsh:function(){
                location.href = "/m-center/list_bought/index.html?tj=dsh";
            },
            tk:function(){
                location.href = "/m-center/list_bought/index.html?tj=tk";
            },
            dfw:function(){
                location.href = "/m-center/list_bought/index.html?tj=dfw";
            }
        }
    }
</script>
