<template>
    <div>
        <mi-header title="提交转账凭证"></mi-header>
        <div class="tocardpicker" @click="showbankcardpicker">
            <div class="cardinfo" v-if="BankCard">
                <p class="tlt">{{BankCard.BankName |truncate}}（尾号{{BankCard.Number|endword(4)}}）</p>
                <p>提现手续费率5%，工作日内24小时内到账</p>
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
        <div class="withdrawamount">
            <p>已转账金额￥</p>
            <input type="number" placeholder="输入您的转账金额" v-model="Amount" />
            <p class="desc">注意：这里的转账金额要和您实际转账金额相符，否则会导致会计审核不通过，造成充值失败
            </p>
        </div>
        <div class="withdrawamount">
            <p>转账凭证</p>
            <div style="padding:1rem 0;">
                <imginputer placeholder="选择凭证" size="small" @onChange="OnFileChangeHandle"></imginputer>
            </div>
            <p class="desc">如果有多次转账，请多次提交转账信息
            </p>
        </div>
        <div class="pd1">
            <button class="button success" @click="apply">提交转账信息</button>
        </div>
        <bankcardpicker ref="bankcardpicker" @bankcardPickerEvent="bankcardPickerHandle"></bankcardpicker>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import toast from '../../../../components/toast.vue'
import imginputer from '../../../../components/imginputer.vue'
import bankcardpicker from '../../../pickers/bankcardpicker.vue'
import * as api from '../../../../api/wallet'
import * as util from '../../../../utils/util'
import * as checkJs from '../../../../utils/pubfunc'


export default {
    components: {
        'mi-header': header,
        'mi-toast': toast,
        'imginputer':imginputer,
        'bankcardpicker':bankcardpicker
    },
    data() {
        return {
            Amount: 0,
            Pic:'',
            BankCard: {}
        }
    },
    mounted(){
    },
    methods: {
        OnFileChangeHandle(file){
            var ossfilename=util.uploadToOss(file,'pingzheng');
            this.Pic=ossfilename;
            console.log(ossfilename);
        },
        showbankcardpicker() {//拾取银行卡
            this.$refs.bankcardpicker.show();
        },
        bankcardPickerHandle(bankcard) {//拾取银行卡回掉
            this.BankCard = bankcard;
        },
        apply(){
            let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      if(checkJs.isNullOrEmpty(this.BankCard)){
          alertFuc('请选择打款银行')
	        return;
      }
      if(this.Amount<=0)
      {
        alertFuc('请输入正确的金额')
	    return;
      }
      if(checkJs.isNullOrEmpty(this.Pic))
      {
        alertFuc('选择凭证图片')
	    return;
      }
      		
      let params = {
        Amount:this.Amount,
        Pic:this.Pic,
        BankCard:this.BankCard
      };
      api.ApplyRechargeApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.$router.replace({
                                name:'success',
                                params:{
                                    type:'tip',
                                    message:'充值记录已经提交，等待审核'}})
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

</style>


