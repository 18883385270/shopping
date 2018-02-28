
<template>
    <div class="exppage">
        <mi-header title="物流信息"></mi-header>
        <div class="pd">
            <p class="pd-btn-sm">
                <span class="inlineblock pd-rt">订单编号：</span><span class="text-gray">{{StoreOrder.Number}}</span></p>
            <p class="pd-btn-sm">
                <span class="inlineblock pd-rt">物流公司：</span><span class="text-gray">{{ExpressInfo.showapi_res_body.expTextName}}</span></p>
            <p>
                <span class="inlineblock pd-rt">货运单号：</span><span class="text-gray">{{ExpressInfo.showapi_res_body.mailNo}}</span></p>
        </div>
        <div class="divider"></div>
        <mi-vstepindicator :ExpressSteps="ExpressInfo.showapi_res_body.data"></mi-vstepindicator>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import vstepindicator from '../../../../../components/vstepindicator.vue'
import * as api from '../../../../../api/storeorder'


export default {
    components: {
        'mi-header': header,
        'mi-vstepindicator': vstepindicator
    },
    data(){
        return{
            ExpressInfo:{},
            StoreOrder:{}
        }
    },
    mounted(){
        this.StoreOrder=JSON.parse(sessionStorage.UserStoreOrder)
        this.GetExpressSchedule();
    },
    methods:{
        GetExpressSchedule(){
            let params = {
                ExpressName:this.StoreOrder.DeliverExpressCode,
                ExpressNumber:this.StoreOrder.DeliverExpressNumber
            };
            api.ExpressScheduleApi(params).then(
                res => {
                    this.ExpressInfo=JSON.parse(res.data);
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


