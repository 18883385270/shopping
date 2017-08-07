<template>
    <div>
        <mi-header title="添加银行卡"></mi-header>
        <div class="formgroup">
            <span>卡号</span>
            <input type="number" placeholder="输入卡号" v-model="number">
        </div>
        <div class="formgroup">
            <span>持卡人姓名</span>
            <input type="text" placeholder="输入开户人姓名" v-model="ownername">
        </div>
        <div class="formgroup">
            <span>开户银行</span>
            <input type="text" placeholder="输入开户银行" v-model="bankname">
        </div>
        <div class="btnwp"><button type="button" @click="submit">确认</button></div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import toast from '../../../../../components/toast.vue'
import * as api from '../../../../../api/wallet'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast
    },
    data(){
        return{
            bankname:'',
            ownername:'',
            number:''
        }
    },
    methods:{
        submit(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            //字段验证
            let self=this;
            if (!checkJs.isBankCard(this.number)) {
                alertFuc('请输入正确的银行卡号！')
                return;
            }
            if (checkJs.isNullOrEmpty(this.ownername)) {
                alertFuc('请输入持卡人姓名')
                return;
            }
            if (checkJs.isNullOrEmpty(this.bankname)) {
                alertFuc('请输入开户银行')
                return;
            }
            let params = {
                BankName: this.bankname,
                OwnerName: this.ownername,
                Number: this.number
            }
            api.AddBankCardApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        self.$router.go(-1);
                    } else {
                        alertFuc(res.data.Message)
                    }
                },
                err => {
                    alertFuc('网络错误，请稍后再试');
                }
            );

        }
    }
}
</script>


<style lang="less" scoped>
.formgroup {
    padding: 1rem;
    background: #fff;
    border-bottom:1px solid #eee;
    span {
        display: block;
        margin-bottom: 1rem;
    }
    input {
        width: 100%;
        font-size: 1.3rem;
        border: 0;
        padding: 0.5rem 0;
        &:focus {
            outline: none;
        }
    }
}
.btnwp{
    padding:1rem;
    background: #fff;
    button{
        width:100%;
        padding:1.3rem;
        text-align:center;
        font-size:1.3rem;
        color:#fff;
        border: 0;
        background:#c03;
    }
}
</style>

