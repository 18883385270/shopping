<template>
    <div>
        <mi-header title="支付成功"></mi-header>
        <div class="succinfo">
            <svg>
                <use xlink:href="#ok"></use>
            </svg>
            <div class="tlt">支付成功</div>
        </div>
        <div class="pd1">
            <button class="button success" @click="goPage('/me')">确定</button>
        </div>
    </div>
</template>

<script>
import header from '../../components/header.vue'

export default {
    components: {
        'mi-header':header
    },
    data() {
        return {
            type: '',//类型 订单支付 / 大使支付
            amount: 0,//实际支付金额
            orderid: ''//订单ID
        }
    },
    mounted() {
        this.type = this.$route.params.type;
        this.amount = this.$route.params.amount;
        this.orderid = this.$route.params.orderid;
    },
    methods:{
        goPage(page){
            this.$router.replace({path:page})
        }
    }
}
</script>


<style lang="less" scoped>
.succinfo {
    text-align: center;
    padding: 2rem 1rem;
    svg {
        width: 2rem;
        height: 2rem;
        fill: #096;
        margin: auto;
    }
    .tlt {
        font-size: 2rem;
        color: #096;
        margin-top:1rem;
    }
}
</style>

