import {mapGetters} from 'vuex'

const mixins={
  data(){
    return {
      btnTitle:"登录",
      loadingShow:false,
    }
  },
  computed:{
    ...mapGetters([ "loginBack"])


  },
  mounted(){

    this.$newCheck.clean=ele =>{
      $(ele).parent().find('i').hide();
      this.btnTitle=this.title.afterTitle;
    }
  },
  methods:{
    btnChange(){
      this.code="(60)重新获取";
      this.btnDis=true;
      var step = 59;
      let _res=setInterval(res=>
      {

        this.code=`(${step})重新获取`
        step-=1;
        if(step < 0){
          this.btnDis=false;
          this.code='重新获取';
          clearInterval(_res);
        }
      },1000);


    },
    goBack(){
      this.$router.push(this.loginBack)
    }
  }
}
export default mixins
