<template>
  <div class="pagewp" :style="{height:pageHeight}">
      <mi-header title="线下消费"></mi-header>
      <div class="payeeinfo">
          <img class="touxiang" :src="OfflineStore.Thumb" alt="">
          <p class="storename">在 {{OfflineStore.Name}} 消费</p>
          <p>询问商家您的消费额</p>
      </div>
      <div class="spendinfo">
          <p class="tlt">消费金额</p>
          <p class="spendamount">
              <span>￥</span>
              <input type="number" maxlength="8" ref="amountinput" class="amount" v-model="Amount">
          </p>
          <p class="getben">本次消费可得福豆：{{calBenevolence()}} </p>
          <button class="button success" @click="handlePay">立即支付</button>
          <mi-toast ref="toast"></mi-toast>
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue'
import toast from '../../components/toast.vue'
import * as util from '../../utils/util'

export default {
  components:{
      'mi-header':header,
      'mi-toast':toast
  },
  data(){
      return{
          pageHeight:"100%",
          OfflineStore:{},
          Amount:null
      }
  },
  mounted(){
      this.pageHeight=util.screenSize().height+'px'
      this.OfflineStore=JSON.parse(sessionStorage.OfflineStore)
      this.$nextTick(_ => {
        this.$refs.amountinput.focus();
      });
  },
  methods:{
      calBenevolence(){
          if(this.Amount>0){
              var benevolence= this.Amount*(this.OfflineStore.Persent/100)/35;
              return benevolence.toFixed(4);
          }
          return 0;
      },
      handlePay(){
          let alertFuc = (msg) => {
            const toast = this.$refs.toast;
            toast.show(msg);
            return false
        }
        if(this.Amount<=0 || this.Amount>10000000)
        {
        alertFuc('请输入正确的消费金额')
        return;
        }
        this.goPayPage()
      },
      goPayPage()
      {
          let toPayInfo={
                Type:'offlinespend',
                OfflineStoreId:this.OfflineStore.Id,
                Amount:this.Amount,
                Remark:'线下消费付款',
                CreatedOn:(new Date()).valueOf()
            }
            sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
            this.$router.push({name:'pay'});
      }
  }
}
</script>

<style lang="less" scoped>
.pagewp{
    background:#eee;
}
.payeeinfo{
    text-align: center;
    padding:1.5rem 2rem;
    background:#F9FCF8;
    margin:1rem 1rem 0 1rem;
    .touxiang{
        width:4rem;
        height:4rem;
    }
    .storename{
        font-size:1.3rem;
        padding:0.5rem 0;
    }
}
.spendinfo{
    background:#fff;
    padding:2rem 2rem 3rem 2rem;
    margin:0 1rem;
    
    .spendamount{
        padding:1rem 0;
        margin:1rem 0;
        border-bottom:1px solid #eee;
        span{
            font-size:2.7rem;
            line-height:3rem;
        }
        .amount{
            font-size:4rem;
            line-height:4rem;
            outline:none;
            width:80%;
            border:0;
        }
    }
    .getben{
        color:#065279;
        padding:0.5rem 0 1.5rem 0;
    }
}
</style>


