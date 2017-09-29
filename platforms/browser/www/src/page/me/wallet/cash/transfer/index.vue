<template>
  <div>
      <mi-header title="现金转账"></mi-header>
      <div class="payeeinfo">
          <img :src="UserInfo.Portrait" alt="">
          <p>向 {{UserInfo.NickName}} 转账</p>
      </div>
      <div class="payeeamount">
            <input type="number" placeholder="输入转账金额" v-model="Amount">
            <button type="button" class="button success" :disabled="Amount<=0" @click="goPay">去支付</button>
      </div>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    },
    data(){
        return{
            UserInfo:{},
            Amount:0,
        }
    },
    mounted(){
        this.UserInfo=JSON.parse(sessionStorage.UserInfo)
    },
    methods:{
        goPay(){
            let toPayInfo={
                Type:'transfer',
                PayeeId:this.UserInfo.Id,
                PayeeName:this.UserInfo.NickName,
                OrderNumber:'',
                Amount:this.Amount,
                Remark:'转账付款',
                CreatedOn:(new Date()).valueOf()
            }
            sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
            this.$router.push({name:'pay'});
        }
    }
}
</script>

<style lang="less" scoped>
.payeeinfo{
    padding-top:4rem;
    text-align:center;
    img{
        width:6rem;
        height:6rem;
        border-radius:50%;
        margin-bottom:1rem;
    }
    p{
        font-size:1.5rem;
    }
}
.payeeamount{
    padding:1rem;
    input{
        padding:1rem 0;
        text-indent:1rem;
        font-size:1.5rem;
        color:#999;
        width:100%;
        border:1px solid #eee;
        margin-top:1rem;
        &:focus{
            outline:none;
        }
    }
}
</style>


