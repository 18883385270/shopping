<template>
  <div class="withdrawpage">
    <mi-header title="提现申请" rightext="记录" @rightNavBarClicked="goPage('/wallet/cash/withdraw/log')"></mi-header>
    <div class="divider"></div>
    <div class="tocardpicker" @click="showbankcardpicker">
      <div class="cardinfo" v-if="BankCard">
        <p class="tlt">{{BankCard.BankName |truncate}}（尾号{{BankCard.Number|endword(4)}}）</p>
        <p>提现0手续费率，工作日内24小时内到账</p>
      </div>
      <div class="cardinfo" v-if="!BankCard">
        <p class="nocard">请选择银行卡</p>
      </div>
      <div class="changecard">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
    <div class="divider"></div>
    <div class="withdrawamount">
      <p>提现金额￥</p>
      <input type="number" placeholder="输入提现金额" v-model="Amount"/>
      <p class="desc">当前账户余额{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}元，
        <span @click="withdrawall">全部提现</span>
      </p>
    </div>
    <div class="divider"></div>
    <div>
      <div class="pd1">
        <button class="button primary" @click="apply">提现</button>
      
        <p class="marg-top1">单笔提现金额不得低于100元，单日不超过2万元，单周不超过10万</p>
        <p>提现需要公司会计审核，提现审核前因余额变动，造成余额不足可能导致提现失败</p>
      </div>
    </div>
    <bankcardpicker ref="bankcardpicker" @bankcardPickerEvent="bankcardPickerHandle"></bankcardpicker>
    <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import toast from '../../../../../components/toast.vue'
import bankcardpicker from '../../../../pickers/bankcardpicker.vue'
import * as api from '../../../../../api/wallet'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
  components: {
    'mi-header': header,
    'mi-toast':toast,
    bankcardpicker
  },
  data(){
    return{
      Amount:0,
      BankCard:{}
    }
  },
  mounted(){
  },
  methods: {
    goPage(page){
      this.$router.push({path:page})
    },
    withdrawall(){//全部提现按钮
      this.Amount=this.$store.state.global.walletinfo.Cash;
    },
    showbankcardpicker(){//拾取银行卡
      this.$refs.bankcardpicker.show();
    },
    bankcardPickerHandle(bankcard){//拾取银行卡回掉
      this.BankCard=bankcard;
    },
    apply(){//提交提现申请
      
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      if(checkJs.isNullOrEmpty(this.BankCard)){
        alertFuc('请选择提款银行')
	      return;
      }
      if(this.Amount<100 || this.Amount % 100>0)
      {
        alertFuc('单笔提现金额不得低于100，100的倍数')
	      return;
      }
      		
      let params = {
        Amount:this.Amount,
        BankCard:this.BankCard
      };
      api.ApplyWithdrawApi(params).then(
        res => {
          if (res.data.Code == 200) {
            var tipInfo={
              Type:'Tip',
              Message:'提现申请已经提交，等待审核',
              NextPage:'/wallet/cash',
              Remark:'公司一般审核日期为3个工作日内'
            }
            sessionStorage.TipInfo=JSON.stringify(tipInfo)
            this.$router.replace({name:'success'});
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    }
  }
}
</script>


<style lang="less" scoped>
.withdrawpage {
  width: 100%;
  .withdrowtip{
    padding:1rem 0;
    font-size:1rem;
  }
}
</style>

