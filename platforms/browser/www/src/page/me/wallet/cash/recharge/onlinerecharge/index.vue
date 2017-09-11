<template>
  <div class="bg-gray" :style="{height:bodyHeight}">
      <mi-header title="充值"></mi-header>
      <div class="rechargewp">
          <p>输入充值金额</p> 
          <input type="number" placeholder="输入充值金额" v-model="Amount">
          <button class="button success" @click="recharge">去支付</button>
      </div>
      <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../../../components/header.vue'
import toast from '../../../../../../components/toast.vue'
import * as api from '../../../../../../api/wallet'
import * as util from '../../../../../../utils/util'

export default {
  components:{
    'mi-header':header,
    'mi-toast':toast
  },
  data(){
    return{
      Amount:0,
      bodyHeight: '100%'
    }
  },
  mounted(){
        this.bodyHeight = util.screenSize().height + 'px';
  },
  methods:{
    goPage(page){
      this.$router.push({path:page});
    },
    recharge(){
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
        if(this.Amount<=0)
        {
          alertFuc('请输入正确的充值金额')
	        return;
        }
        if(this.Amount>1000000)
        {
          alertFuc('您的充值金额过多，单笔充值最好不超过100万')
	        return;
        }

        
        let toPayInfo={
            Type:'recharge',
            OrderId:'',
            OrderNumber:'',
            Amount:this.Amount,
            Remark:'在线充值',
            CreatedOn:(new Date()).valueOf()
        }
        sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
        this.$router.push({name:'pay'});

        // let params = {
        //   Amount:this.Amount
        // };
        // api.RechargeApi(params).then(
        //   res => {
        //     if (res.data.Code == 200) {
        //       //转到成功页面
        //       var tipInfo={
        //         Type:'Tip',
        //         Message:'充值成功',
        //         NextPage:'/wallet'
        //       }
        //       sessionStorage.TipInfo = JSON.stringify(tipInfo)
        //       this.$router.push({name:'success'});
        //     } else {
        //       alertFuc(res.data.Message);
        //     }
        //   },
        //   err => {
        //     alertFuc('网络错误');
        //   }
        // )

    }
  }
}
</script>

<style lang="less" scoped>
.bg-gray{
  background:#eee;
}
  .rechargewp{
    padding:2rem;
    p{
      font-size:1.3rem;margin-bottom:1rem;
    }
    input{
      width:100%;
      font-size:1.5rem;
      padding:1rem 0;
      text-indent: 1rem;
    }
  }
</style>


