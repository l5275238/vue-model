<template>
    <div id="suggest">
        <div class="sett_title">
            <div class="left" @click="sethide">
                <i class="iconfont2">&#xe7ca;</i>
                <span>返回</span>
            </div>
            <div class="mid">用户反馈</div>
        </div>
        <div class="area_part">
            <textarea placeholder="有什么想说的，尽管来吐槽吧！" v-model="areacontent"></textarea>
            <div>
                <input type="tel" maxlength="11" placeholder="请留下您的电话号码" v-model="telcontent"/>
                <i class="iconfont" @click="clear">&#xe7ae;</i>
            </div>
        </div>
        <div class="sett_foot">
            <button type="button" @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                areacontent:'',
                telcontent:''
            }
        },
        methods:{
            sethide:function(){
                this.$parent.suggestshow = false;
            },
            clear:function(){
                this.telcontent = "";
            },
            submit:function(){
                var _this = this;
                if(this.areacontent === ''){
                    qshUtil.toast("反馈内容不可为空");
                    return false;
                }
                if(!qshObject.validMobile(this.telcontent)){
                    qshUtil.toast("请输入正确的手机号");
                    return false;
                }
                var Loading = qshUtil.toast('loading','提交中....');
                qshObject.ajax('/Action/FanKuiAction.do',{
                    phone:this.telcontent,
                    content:this.areacontent
                }).then(function(data){
                    Loading.hide();
                    qshUtil.toast("success","感谢您的反馈");
                    _this.$parent.suggestshow = false;
                }),function(err){
                    Loading.hide();
                    qshUtil.toast(err.msg);
                }
            }
        }
    }
</script>