<template>
  <div class="withdrawpage">
    <mi-header title="申请提现"></mi-header>

    <div class="tocardpicker" @click="showbankcardpicker">
      <div class="cardinfo" v-if="tobankcard">
        <p class="tlt">{{tobankcard.BankName |truncate}}（尾号{{tobankcard.Number|endword(4)}}）</p>
        <p>提现手续费率5%，工作日内24小时内到账</p>
      </div>
      <div class="cardinfo" v-if="!tobankcard">
        <p class="nocard">请选择银行卡</p>
      </div>
      <div class="changecard">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>

    <div class="withdrawamount">
      <p>提现金额￥</p>
      <input type="number" placeholder="输入提现金额" v-model="withdrawamount"/>
      <p class="desc">当前账户余额{{this.$store.state.global.walletinfo.cash|currency('￥',2)}}元，
        <span @click="withdrawall">全部提现</span>
      </p>
      <div class="btnwarp">
        <button class="button primary">提现</button>
      </div>
    </div>
    <bankcardpicker ref="bankcardpicker" @bankcardPickerEvent="bankcardPickerHandle"></bankcardpicker>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import bankcardpicker from '../../../../pickers/bankcardpicker.vue'

export default {
  components: {
    'mi-header': header,
    bankcardpicker
  },
  data(){
    return{
      withdrawamount:0,
      tobankcard:{
        bankname:'工商银行',
        number:'6212261616002497974',
        ownername:'夏兆伟'
      }
    }
  },
  mounted(){
  },
  methods: {
    withdrawall(){
      this.withdrawamount=this.$store.state.global.walletinfo.cash;
    },
    showbankcardpicker(){
      this.$refs.bankcardpicker.show();
    },
    bankcardPickerHandle(bankcard){
      this.tobankcard=bankcard;
    }
  }
}
</script>


<style lang="less" scoped>
.withdrawpage {
  width: 100%;
  
  
  .btnwarp {
    padding: 1rem 0 0 0;
    
  }
}
</style>

