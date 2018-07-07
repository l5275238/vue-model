import Server from '@/api/server.js'

class CarFiles extends Server{
  constructor(){
    super()
  }

  getMyCarInfo(){
    return this.axios({
      url:"/Action/McenterQueryMyCarAction.do",
      data:{
        user_id:'user_id'
      },
      success:res=>{
        let defaultcarId = '';
        res.map(obj=>{
          if (obj.taskId == '1429') {
            defaultcarId = obj.rows[0].car_id;
            this.vm.default_carid = defaultcarId;
          }
          if (obj.taskId == '1427') {
            this.vm.carlist = obj.rows.map(function (item) {
              var carname = item.car_name.split('/');
              item.carname_text = carname[0] + '-' + carname[1];
              item.logosrc = qshObject.absoluteImg(item.brand_logo);
              if (item.car_id == defaultcarId) {
                item.sort = 10;
                item.default = true;
              } else {
                item.sort = 2;
                item.default = false;
              }
              return item;
            }).sort(function (a, b) {
              return b.sort - a.sort;
            });
          }
        })
        this.vm.islogin = true;
      },
      error:err=>{
        this.vm.$vux.toast.show({
          type:'warn',
          text: err.msg
        })
      }
    })
  }

  getBaoYangList(){
    return this.axios({
      url:'/Action/BaoYangDangAnAction.do',
      data:{
        type:0,
        car_id:this.vm.car_id
      },
      success:res=>{
        this.vm.islogin=true;
        let list = res;
        let length = list.length;
        let copy = [];
        /*后台返回数据处理,tip=1放在数组开头*/
        if(length>0){
          for(let i =length;i>1;){
            i--;
            if(list[i].tip=="1"){
              copy.unshift(list[i]);
              list.splice(i,1);
            }
          }
          list.unshift(...copy);
        }
        this.vm.data = list;
      },
      error:err=>{
        this.vm.$vux.toast.show({
          type:'cancel',
          text: err.msg
        })
      }
    })
  }

  getMateList(){
    return this.axios({
      url:'/Action/MainCate.do',
      data:{
        car_conf_id:this.vm.car_conf_id
      },
      success:res=>{
        let data = res.map(item=>{
          return item = {
            ...item,
            ischeck: false
          }
        })
        this.vm.mateList = [...data];
        this.vm.tempInit = true;
        this.vm.tempShow = true;
      },
      error:err=>{
        this.vm.$vux.toast.show({
          type:'cancel',
          text: err.msg
        })
      }
    })
  }

  addBaoYangInfo(){
    let {record_date, record_km, record_money, record_about, hours} = this.vm.info;
    record_about = record_about.substr(0, record_about.length-1);
    hours = hours.substr(0, hours.length-1);
    if(!record_date.length){
      this.vm.$vux.toast.show({
        type:'cancel',
        text:'请保养选择时间'
      })
      return false
    }
    if(!record_km.length){
      this.vm.$vux.toast.show({
        type:'cancel',
        text:'请填写保养里程数'
      })
      return false
    }
    if(!record_money.length){
      this.vm.$vux.toast.show({
        type:'cancel',
        text:'请填写保养金额'
      })
      return false
    }
    if(Number(record_money)<=10){
      this.vm.$vux.toast.show({
        type:'cancel',
        text:'保养金额不得低于两位数'
      })
      return false;
    }
    if(!record_about.length){
      this.vm.$vux.toast.show({
        type:'cancel',
        text:'请选择保养项目'
      })
      return false
    }
    return this.axios({
      url:'/Action/BaoYangDangAnAction.do',
      data:{
        type:1,
        car_id: this.vm.car_id,
        car_conf_id: this.vm.car_conf_id,
        record_date: record_date,
        record_km: record_km,
        record_money: record_money,
        record_about: record_about,
        hours: hours,
        record_remark: this.vm.info.record_remark
      },
      success:res=>{
        this.vm.info = {
          ...this.vm.defaultInfo
        }
        this.vm.mateList.map(item=>{
          item.ischeck = false
        })
        this.vm.$emit('hideList');
        this.vm.$emit('upDate');
      },
      error:err=>{
        this.vm.$vux.toast.show({
          type:'cancel',
          text: err.msg
        })
      }
    })
  }
}

const carFiles = new CarFiles();

export default carFiles;
