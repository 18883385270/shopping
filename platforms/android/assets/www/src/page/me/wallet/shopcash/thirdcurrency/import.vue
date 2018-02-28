<template>
  <div>
      <mi-header :title="ThirdCurrency.Name +'导入'"></mi-header>
      <div class="pd-md marg-md bg-info text-white">
          请输入对方系统的用户名密码和导入数量，然后点击导入，导入过程中，系统自动进行换算。
      </div>
      <div class="accountinfo">
          <input type="text" :placeholder="ThirdCurrency.Name +'账号'" v-model="Account" />
          <input type="password" :placeholder="ThirdCurrency.Name +'密码'" v-model="Password"/>
          <input type="number" placeholder="输入导入数量" v-model="Amount"/>
          <p class="pd-top-md">有些第三方系统可能要求输入交易密码</p>
      </div>
      <div class="pd-md">
          <button class="button success" @click="importCurrency" >立即导入</button>
      </div>
      <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import toast from '../../../../../components/toast.vue'

import * as api from '../../../../../api/thirdcurrency'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast,
    },
    data(){
        return {
            ThirdCurrency:{},
            Account:'',
            Password:'',
            Amount:0
        }
    },
    mounted(){
        this.ThirdCurrency = JSON.parse(sessionStorage.ThirdCurrency)
    },
    methods: {
        importCurrency(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            if(checkJs.isNullOrEmpty(this.Account)){
                alertFuc('请输入账号')
                return;
            }
            if(checkJs.isNullOrEmpty(this.Password)){
                alertFuc('请输入密码')
                return;
            }
            if(this.Amount<0 || this.Amount>50000)
            {
                alertFuc('请输入正确的导入量')
                return;
            }
            let params = {
                Amount:this.Amount,
                Account:this.Account,
                Password:this.Password,
                Id:this.ThirdCurrency.Id
            };
            api.ImportCurrencyApi(params).then(
                res => {
                if (res.data.Code == 200) {
                    var tipInfo={
                    Type:'Tip',
                    Message:'导入成功',
                    NextPage:'shopcash',
                    Remark:'导入的第三方货币可以直接进行消费购物'
                    }
                    sessionStorage.TipInfo=JSON.stringify(tipInfo)
                    this.$router.replace({name:'success'});
                } else {
                    alertFuc(res.data.Message);
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
.accountinfo{
    padding:1rem;
    input{
        width:100%;
        padding:1.3rem 0;
        text-indent:1.3rem;
        border:0;
        border-bottom:1px solid #eee;
        outline:none;
    }
}
</style>


