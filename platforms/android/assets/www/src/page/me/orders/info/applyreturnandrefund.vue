<template>
    <div class="page">
        <mi-header title="申请退货退款"></mi-header>
        <div class="tablerow">
            <div class="tlt">退货原因</div>
            <div class="cnt">
                <input type="text" placeholder="输入退货原因" v-model="Reason" />
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">退款金额</div>
            <div class="cnt">
                <input type="number" placeholder="退款金额" v-model="RefundAmount" />
            </div>
        </div>
        <div class="btnwp">
            <button class="button success" @click="ApplyReturnAndRefund">提交申请</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';
import toast from '../../../../components/toast.vue';
import * as api from '../../../../api/storeorder'
import * as checkJs from '../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast
    },
    data() {
        return {
            StoreOrder: {},
            Reason:'',
            RefundAmount:0
        }
    },
    mounted() {
        this.StoreOrder=JSON.parse(sessionStorage.UserStoreOrder)
        this.RefundAmount=this.StoreOrder.Total;
    },
    methods: {
        ApplyReturnAndRefund(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            let self = this;
            if (checkJs.isNullOrEmpty(this.Reason)) {
                alertFuc('请输入退款原因')
                return;
            }
            if (this.RefundAmount<0 ||this.RefundAmount>this.StoreOrder.Total) {
                alertFuc('退款金额不得小于0，大于订单额')
                return;
            }
            let params = {
                Id:this.StoreOrder.Id,
                Reason:this.Reason,
                RefundAmount:this.RefundAmount
            };
            console.log(params);
            api.ApplyReturnAndRefundApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.goSuccessPage('orders','申请成功，等待商家处理')
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        goSuccessPage(returnPage,message)
        {
          //转到成功页面
          var tipInfo={
              Type:'Tip',
              NextPage:returnPage,
              Message:message
          }
          sessionStorage.TipInfo = JSON.stringify(tipInfo)
          this.$router.replace({name:'success'})
        }
    }
}
</script>

<style lang="less">
.btnwp{
    padding:0 1rem 1rem 1rem;
    background:#fff;
}
</style>


