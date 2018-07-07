<template>
    <div class="mycenter-top">
        <div class="top-container">
            <div class="top-set">
                <qsh-header></qsh-header>
            </div>
            <div class="top-userinfo" >
                <div class="top-userinfo-left">
                    <img class="top-profile" v-if="logo_src == ''" src="../../img/xiuchezai_logo.png">
                    <img class="top-profile" v-else v-bind:src="logo_src">
                    <span class="top-username">{{username}}</span>
                </div>
                <div class="top-credit" v-on:click="goCredit">
                    <i class="iconfont2">&#xe813;</i>
                    <span>积分</span>
                    <span>{{credit}}</span>
                </div>
            </div>
        </div>
        <div class="top-main-func">
            <div class="top-main-func-item" @click="goCollect">
                <i class="iconfont2">&#xe802;</i>
                <span>我的收藏</span>
            </div>
            <div class="top-main-func-item" @click="goAsset">
                <div>{{my_asset}}</div>
                <span>我的资产</span>
            </div>
            <div class="top-main-func-item" @click="goCart">
                <i class="iconfont2">&#xe7fb;</i>
                <span>购物车</span>
            </div>
        </div>

    </div>
</template>
<script>
    import QshHeader from '../qshHeader.vue'
    export default{
        data(){
            return{
                credit:'0',
                logo_src:'',
                my_asset:'0.00',
                username:'',
                redPack:'',
                cardTicket:'',
                orderInfo:{
                    dfk:'',
                    dfh:'',
                    dsh:'',
                    tk:''
                }
            }
        },
        components:{
            'qsh-header':QshHeader
        },
        created:function(){
            let _this = this;
            qshObject.loadingCheckStatu(function(status){
                if(status){
                    _this.getUserInfo();
                }else{

                }
            })
        },
        methods:{
            getUserInfo:function(){
                let _this = this;
                qshObject.ajax('/Action/NMcenterIndexAction.do').then(function(data){
                    _this.username = data[0].rows[0].login_name;
                    _this.my_asset = Number(data[0]['rows'][0]['balance']);
                    _this.credit = Number(data[0].rows[0].credits);
                    _this.logo_src = qshObject.resizeImgWidth(9.7777777,data[0]['rows'][0]['avatar']);
                    for(let i in data){
                        if(data[i]['taskId'] == '1365'){
                            _this.orderInfo.dfk = data[i].rows.length;
                        }
                        if(data[i]['taskId'] == '1366'){
                            _this.orderInfo.dfh = data[i].rows.length;
                        }
                        if(data[i]['taskId'] == '1367'){
                            _this.orderInfo.dsh = data[i].rows.length;
                        }
                        if(data[i]['taskId'] == '1368'){
                            _this.orderInfo.tk = data[i].rows.length;
                        }
                    }
//                    console.log(_this.orderInfo);
                    _this.$emit('zidingyi',_this.orderInfo);
                });
            },
            goSetting:function(){
                alert("点击了设置");
            },
            goCredit:function(){
                location.href= qsh_page_urls.m_integral
            },
            goCollect:function(){
                location.href = qsh_page_urls.m_collection
            },
            goAsset:function(){
                location.href="/m-center/my_asset/index.html"
            },
            goCart:function(){
                location.href=qsh_page_urls.cart
            }
        }
    }
</script>