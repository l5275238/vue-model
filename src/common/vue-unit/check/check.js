import {messges, rules} from "../../validator.js";
var ajax=function (data) {
  return data
}

function addOnLoad(fn,ele) {
  let load=window.onload;
  if(typeof window.onload =="function"){
    window.onload=function () {
      load()
      fn(ele)
    }
  }
  else {
    window.onload=function () {
      fn(ele)
    }
  }

}
class check{
  constructor(){
    this.Messge={}
    this.ajaxFn={}
  }
  init(ele,rules,name,keyMessge){

    $(ele).attr('data-rule',rules.join(","))
    $(ele).attr('data-valide','true')
    $(ele).attr('keyMessge',keyMessge)
    $(ele).attr('data-name',name)

    this.bindFocus(ele)
    this.bindBlur(ele)

      this.setDom&& this.setDom($(ele))
    // if(typeof this.setDom =="function"){
    //   addOnLoad(this.setDom,$(ele))
    // }



  }

  setMessge(keyMessge,msg){
    this.Messge[keyMessge]=msg
  }
  setIntDow(fn){
    this.setDom=fn
  }
  setAjax(keyMessge,fn){
    this.ajaxFn[keyMessge]=fn
  }
  check(ele){
    var obj=this.checkRule(ele)
    if(obj.isErro){
      this.error&&this.error(ele,obj.mesg)
      return {erro:obj.mesg}

    }

    this.success&&this.success(ele,obj.mesg)
  }
  checkRule(ele){
    let eleRules=$(ele).attr("data-rule").split(',')
    let KeyMessge=$(ele).attr('keyMessge')
    let name =$(ele).attr('data-name')
    var eleValue=ele.value
  var fn;
    for(let value of eleRules){
      var resolet;
      let arr=value.replace('#','')
      let key= arr.split('?')
      if(value[0]=="#"){
        resolet=true


        let dataFn=KeyMessge&&this.ajaxFn[KeyMessge]?this.ajaxFn[KeyMessge]:ajax
        fn= rules.ajax(key[0],key[1],eleValue,dataFn)

      }

      else {
        fn=rules[key[0]](eleValue,key[1],this.error)
      }

      if(!fn){
        value=resolet?"ajax":value;
        let meg=KeyMessge&&this.Messge[KeyMessge]?this.Messge[KeyMessge]:messges[value]

        return {

          isErro:true,
          mesg:meg.replace(/(\{\w*\})/,name)

        }
      }


    }
    return {
      isErro:false,
    }
  }
  bindBlur(ele){
    var that =this;
    $(ele).on("blur",  function () {

      that.check(this)
    })
  }
  bindFocus(ele){
    var that =this;
    $(ele).on("focus",function () {

      that.clean&&that.clean(this)

    })
  }
  checkFrom(ele){
    var from= ele.elements

    let msg=[]
    for(var i=0;i<from.length;i++){
      let value=from[i]
      if($(value).attr('data-valide')){

        var obj=this.check(value)

        if(obj){
          msg.push(obj.erro)
        }



      }
    }

    if(msg.length>0){
      return msg[0]
    }
    return false
  }

}


export default check
