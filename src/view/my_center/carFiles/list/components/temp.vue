<template>
  <div class="add-wrap">
    <div class="add-list">
      <div class="add-header">
        <div class="add-header-name">添加保养记录</div>
        <div class="add-header-table">
          <div class="table-left" @click="hideList">
            <i class="iconfont2 icon-xiuchezai2-back"></i>
            <span>返回</span>
          </div>
        </div>
      </div>
      <section>
        <div class="weui_cells margint">
          <div class="weui_cell">
            <div class="weui_cell_hd">保养时间：</div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" type="date" placeholder="请选择" v-model="info.record_date">
            </div>
            <div class="weui_cell_ft input-right"><i class="iconfont icon-lighter-you"></i></div>
          </div>
          <div class="weui_cell">
            <div class="weui_cell_hd">保养里程：</div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" type="tel" maxlength="9" placeholder="请填写保养里程" v-model="info.record_km">
            </div>
            <div class="weui_cell_ft input-right">km</div>
          </div>
          <div class="weui_cell">
            <div class="weui_cell_hd">保养金额：</div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" type="tel" maxlength="9" placeholder="请填写保养金额" v-model="info.record_money">
            </div>
            <div class="weui_cell_ft input-right">元</div>
          </div>
        </div>
        <div class="weui_cells_title list-service-name">选择保养项目</div>
        <ul class="weui_cells">
          <div class="choose_xm" v-for="item in mateList">
            <label :for="item.hour_id"></label>
            <div class="weui_cell_hd weui_box">
              <input type="checkbox" class="weui_check" :id="item.hour_id" v-model="item.ischeck">
              <i class="weui_icon_checked"></i>
            </div>
            <div class="weui_cell_bd weui_cell_primary">{{item.cate_name}}</div>
          </div>
        </ul>
        <div class="weui_cells_title list-service-name">备注</div>
        <div class="weui_cells">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <textarea class="weui_textarea" maxlength="120" placeholder="如本次保养还剩1L机油未用，下次可以少买" rows="3" v-model="info.record_remark"></textarea>
            </div>
          </div>
        </div>
      </section>
      <div class="footer">
        <div class="btn-box">
          <div class="btn" @click="save">保存记录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carFiles from '@server/my_center/carFiles.js';
  export default {
    data() {
      return {
        info:{
          record_date:'',
          record_km:'',
          record_money:'',
          record_about:'',
          hours:'',
          record_remark:''
        },
        defaultInfo:{
          record_date:'',
          record_km:'',
          record_money:'',
          record_about:'',
          hours:'',
          record_remark:''
        }
      }
    },

    methods: {
      hideList(){
        this.$emit('hideList')
      },

      save(){
        this.info = {
          ...this.info,
          car_id: this.car_id,
          car_conf_id: this.car_conf_id
        }
        this.mateList.map(item => {
          if(item.ischeck){
            this.info.record_about += item.cate_name + ',';
            this.info.hours += item.hour_id + ',';
          }
        })
        carFiles.addBaoYangInfo();
      },
    },

    props:['mateList', 'car_id', 'car_conf_id'],

    mounted(){
      carFiles.init(this)
    }
  }
</script>
