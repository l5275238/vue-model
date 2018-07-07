import check from "./check";
import Subscribe from './Subscribe'; //专门制定的订阅模式

function isMobile() {
  var ua = navigator.userAgent;

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/)

  return isIphone || isAndroid


}

var main={};

main.install=function (_Vue) {

  var vue=_Vue;
//Vue全局加入注册自定义事件监听
  vue.prototype.$check=check;
  vue.prototype.initCheck=function(){

    if(this.$newCheck){
      return
    }

      this.$newCheck=new this.$check();


  }
  vue.prototype.inChek_observer=function () {



      if(this.$chek_observe)
      {
        return
      }
      this.$chek_observer=new Subscribe();

  }

  check.prototype.error=function(ele,msg){

    $(ele).parent().find('i').html('&#xe7bb;').css('color',"#ef3824").show()
  }
  check.prototype.setDom=function (ele) {


     ele.wrap('<div></div>');
     ele.parent().addClass("chekDom")
     var img=$('<i class="iconfont2"></i>')

     img.hide();
     ele.parent().append(img )



  }
  check.prototype.clean=function(ele){
    $(ele).parent().find('i').hide();
  };
  check.prototype.success=function(ele){

    $(ele).parent().find('i').html('&#xe7b8;').css('color',"#0ec65a") .show()
  }
  vue.directive('checked',{
    inserted:function (el, binding, vnode) {

      var vm=vnode.context;
      vm.initCheck()
      var rules=binding.value.rules;
      var title=binding.value.name;
      var keyMessge=binding.value.keyMessge;

      vm.$newCheck.init(el,rules,title,keyMessge);


    },
  })
  vue.directive('checkFrom',{
    bind:function (el,binding,vnode) {

      var vm=vnode.context;
      vm.inChek_observer()
      var formName=binding.value;
      vm.$chek_observer.on(formName,res=>{

        return vm.$newCheck.checkFrom(el)

      })

    }
  })
}
export default  main;
