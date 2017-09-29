/*
物流详情页面
*/
<template>
    <div class="exppage">
        <mi-header title="物流信息"></mi-header>
        <div class="exinfo">
            <p>
                <span>订单编号：</span>{{StoreOrder.Number}}</p>
            <p>
                <span>物流公司：</span>{{ExpressInfo.showapi_res_body.expTextName}}</p>
            <p>
                <span>货运单号：</span>{{ExpressInfo.showapi_res_body.mailNo}}</p>
        </div>
        <mi-vstepindicator :ExpressSteps="ExpressInfo.showapi_res_body.data"></mi-vstepindicator>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import vstepindicator from '../../../../../components/vstepindicator.vue';
import * as api from '../../../../../api/storeorder';


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
.exppage {
    .exinfo {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        background: #fff;
        p {
            padding: 0.3rem 0;
            span {
                display: inline-block;
                color: #666;
                width: 7rem;
            }
        }
    }
}
</style>


