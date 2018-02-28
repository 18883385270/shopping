<template>
    <div class="mobilevfwp">
        <mi-header title="设置支付密码"></mi-header>
        <div class="text-center marg-top-lg text-md text-gray pd-topbtn-lg">设置6为数字支付密码
        </div>
        <div class="pd-xlg">
            <mi-paypassword v-model="accesscode"></mi-paypassword>
            <button class="button success" @click="setaccesscode">设置</button>
        </div>
        <div class="pd text-gray text-center">
          为更好的体验，商城余额付款，转账，提现等将全部用支付密码验证
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import paypassword from '../../../../components/paypassword.vue'

import toast from '../../../../components/toast.vue'
import * as api from '../../../../api/wallet';
import * as checkJs from '../../../../utils/pubfunc'
import * as util from '../../../../utils/util.js';

export default {
    components: {
        'mi-header': header,
        'mi-paypassword':paypassword,
        'mi-toast':toast
    },
    data() {
        return {
            accesscode:'',
            token:''
        }
    },
    mounted() {
        
        //检查是否验证
        var verify= sessionStorage.verify || JSON.stringify({verifypage:'setpaypassword',verifyed:false});
        if(verify)
        {
            verify=JSON.parse(verify)
            if(!verify.verifyed)
            {
                sessionStorage.verify=JSON.stringify(verify);
                this.$router.replace({path:'/me/verify'});
            }
            
        }
    },
    methods:{
        
        setaccesscode(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self = this;
            if (!checkJs.isPayPassword(this.accesscode)) {
                alertFuc('请填写6位数字')
                return;
            }

            let params = {
                AccessCode:this.accesscode
            };

            api.SetAccessCodeApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //删除验证信息
                        sessionStorage.removeItem('verify');
                        //跳转到成功页面
                        self.goSuccessPage();
                    } else {
                        alertFuc(res.data.Message)
                    }
                },
                err => {
                alertFuc('服务访问错误~');
                }
            )
        },
        goSuccessPage(){
            //转到成功页面
            var tipInfo={
                Type:'Tip',
                NextPage:'wallet',
                Message:'设置成功'
            }
            sessionStorage.TipInfo = JSON.stringify(tipInfo)
            this.$router.replace({name:'success'})
        }
    }
}
</script>


<style lang="less" scoped>


</style>

