<template>
  <div>
      <mi-header title="充值"></mi-header>
      <div class="rechargewp">
          <p>输入充值金额</p> 
          <input type="number" placeholder="输入充值金额" v-model="amount">
          <button class="button success" @click="recharge">去支付</button>
      </div>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import * as api from '../../../../../api/wallet'

export default {
  components:{
    'mi-header':header
  },
  data(){
    return{
      amount:0
    }
  },
  methods:{
    goPage(page){
      this.$router.push({path:page});
    },
    recharge(){
        if(this.amount<=0)
        {
          return false;
        }
			
        let params = {
          Amount:this.amount
        };
        api.RechargeApi(params).then(
          res => {
            if (res.data.Code == 200) {
              console.log('充值成功');
            } else {
              console.log("返回错误码：" + res.data.Code);
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


