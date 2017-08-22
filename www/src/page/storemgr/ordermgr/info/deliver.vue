<template>
    <div class="page">
        <mi-header title="订单发货"></mi-header>
        <div class="tablerow">
            <div class="tlt">快递公司</div>
            <div class="cnt">
                <input type="text" placeholder="快递公司名称" v-model="ExpressInfo.ExpressName" />
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">运单号</div>
            <div class="cnt">
                <input type="text" placeholder="运单号" v-model="ExpressInfo.ExpressNumber" />
            </div>
        </div>
        <div class="btnwp">
            <button class="button success" @click="DeliverEvent">确认发货</button>
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
            ExpressInfo:{
                ExpressName:'',
                ExpressNumber:''
            }
        }
    },
    mounted() {
        this.StoreOrder = this.$route.params.StoreOrder || {};
    },
    methods: {
        DeliverEvent(){
            //发货
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            let self = this;
            if (checkJs.isNullOrEmpty(this.ExpressInfo.ExpressName)) {
                alertFuc('请输入快递公司')
                return;
            }
            if (checkJs.isNullOrEmpty(this.ExpressInfo.ExpressNumber)) {
                alertFuc('请输入货运单号')
                return;
            }
            let params = {
                Id:this.StoreOrder.Id,
                ExpressInfo:this.ExpressInfo
            };
            console.log(params);
            api.DeliverApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.$router.replace({name:'storemgr'})
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

<style lang="less">
.btnwp{
    padding:0 1rem 1rem 1rem;
    background:#fff;
}
</style>


