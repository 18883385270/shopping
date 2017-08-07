/*
物流详情页面
*/
<template>
    <div class="exppage">
        <mi-header title="物流信息"></mi-header>
        <div class="exinfo">
            <p>
                <span>订单编号：</span>234353468934</p>
            <p>
                <span>物流公司：</span>顺丰速运</p>
            <p>
                <span>货运单号：</span>2456678865445</p>
        </div>
        <mi-vstepindicator></mi-vstepindicator>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import vstepindicator from '../../../../../components/vstepindicator.vue';


export default {
    components: {
        'mi-header': header,
        'mi-vstepindicator': vstepindicator
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


