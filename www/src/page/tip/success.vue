<template>
    <div>
        <mi-header title="成功"></mi-header>
        <div class="succinfo">
            <svg>
                <use xlink:href="#ok"></use>
            </svg>
            <div class="orderinfo" v-if="payinfo.orderid">
                <h2>{{payinfo.orderid}}</h2>
            </div>
            <div class="tlt">{{message}}</div>
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
            type: '',//类型  订单支付 / 大使支付
            payinfo:{
                amount: 0,//支付金额
                orderid: '',//订单ID
            },
            message:''
        }
    },
    mounted() {
        this.type = this.$route.params.type;
        if(this.type=='pay')
        {
            this.amount = this.$route.params.amount;
            this.orderid = this.$route.params.orderid;
        }
        this.message=this.$route.params.message;
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
        width: 6rem;
        height: 6rem;
        fill: #096;
        margin:1rem auto;
    }
    .tlt {
        font-size: 2rem;
        color: #096;
        margin-top:1rem;
    }
}
</style>

