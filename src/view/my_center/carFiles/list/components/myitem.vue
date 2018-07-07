<template>
  <div class="black-box">
    <div class="box-top">
      <div class="mask" :class="{maskFirst:index==0,lastMask:index==data.length-1}"></div>
      <div class="top-bg"><img src="../img/listTop.png"></div>
    </div>
    <div class="box-content">
      <div class="beacon"><!--列表圆球-->
        <div v-if="index!=data.length-1" class="usual">
          <div class="garden-1"></div>
        </div>
        <div v-else class="important">
          <div class="garden-2">
            <div class="garden-3"></div>
          </div>
        </div>
      </div>
      <div class="list-content">
        <div class="list-box">
          <div class="list-strip">
            <div class="list-name">保养时间</div>
            <div class="list-service"><p class="by-time">{{times}}</p> </div>
          </div>
          <div class="list-strip">
            <div class="list-name">保养里程</div>
            <div class="list-service"><p class="by-time">{{km}} <span>km</span></p> </div>
          </div>
          <div class="list-strip">
            <div class="list-name">保养项目</div>
            <div class="list-service">
              <!--<div class="service-arry" v-for="one in arry">
                <div class="service-name" v-for="two in one" :class="{hundred:one.length==1}">{{two}}</div>
              </div>-->
              <div class="service-item" v-for="item in arry">{{item}}</div>
            </div>
          </div>
          <div class="list-strip">
            <div v-if="li.tip=='1'" class="list-name">预计花费</div>
            <div v-else class="list-name">消费金额</div>
            <div class="list-service"><p class="by-money">￥{{money}}</p></div>
          </div>
          <div v-if="li.tip=='1'" @click="goBY()" class="list-strip">
            <div class="list-service"></div>
            <p class="list-by">立即保养</p>
          </div>
          <div v-else @click="goXQ()" class="list-strip">
            <div class="list-service"></div>
            <p class="list-more">详情 <i class="iconfont">&#xe65c;</i></p>
          </div>
        </div>
      </div>
    </div>
    <div class="box-botttom">
      <div class="mask"></div>
      <div class="bottom-bg"><img src="../img/listBottom.png"></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        arry:[],
      }
    },
    computed:{
      times(){
        return this.li.record_date;
      },
      money(){
        if(this.li.tip==="1"){
          let json = JSON.parse(this.li.record_detail);
          return this.addMoney(json);
        }else {
          return this.li.record_money;
        }
      },
      km(){
        let val = this.li.record_km;
        return val;
      }
    },
    created(){
        this.buildServiceArry();
    },
    methods:{
      buildServiceArry(){
        let arry = [];
        if(this.li.record_about.indexOf(",")!=-1){
          arry = this.li.record_about.split(",");
        }else if(this.li.record_about.indexOf(",")==-1&&this.li.record_about!=""){
          arry.push(this.li.record_about);
        }
        this.arry = arry;
        /*let first = []
        for(let i = 0;i<arry.length;i++){
          if(first.length>1){
            this.arry.push(first);
            first = [];
            first.push(arry[i]);
            if(i+1==arry.length){
              this.arry.push(first);
            }
          }else {
            if(i+1==arry.length){
              first.push(arry[i]);
              this.arry.push(first);
            }else {
              first.push(arry[i]);
            }
          }
        }*/
      },
      goBY(){
        location.href = "/maintenance/hour.html?car_id=" + this.car_id;
      },
      goXQ(){
        this.$router.push('/record?record_id=' + this.li.record_id + "&car_conf_id=" + this.car_conf_id+"&car_id="+this.car_id+"&order_id="+this.li.order_id)
      },
      addMoney(json){
        let total=0,sum=0;
        for(let a=0;a<json.length;a++){
          for(let b=0;b<json[a].material.length;b++){
            sum+=Number(json[a].material[b].sale_price);
          }
          total+=sum+Number(json[a].fee);
        }
        return total.toFixed(2);
      }
    },
    props:["data","car_id","car_conf_id","index","li"]
  }
</script>
