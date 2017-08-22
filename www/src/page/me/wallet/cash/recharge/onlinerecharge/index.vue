<template>
  <div>
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

export default {
  components:{
    'mi-header':header,
    'mi-toast':toast
  },
  data(){
    return{
      Amount:0
    }
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
          alertFuc('去你麻痹我不让你充这么多~')
	        return;
        }
			
        let params = {
          Amount:this.Amount
        };
        api.RechargeApi(params).then(
          res => {
            if (res.data.Code == 200) {
              alertFuc('充值成功~');
              this.$router.replace({path:'/wallet'});
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


