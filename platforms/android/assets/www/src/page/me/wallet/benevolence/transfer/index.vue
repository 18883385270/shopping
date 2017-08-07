<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :categorys="transferTypes"></mi-category>
        <div class="transferls">
            <ul>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>购物奖励</p>
                    <p>
                        <span class="amount">+1000.00</span>消费1000元</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>商城消费</p>
                    <p>
                        <span class="amount">-500.00</span>订单：2343633435</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>转账</p>
                    <p>
                        <span class="amount">+1000.00</span>对方账号xiazhaowei</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>转账</p>
                    <p>
                        <span class="amount">+1000.00</span>对方账号xiazhaowei</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import category from '../../../../../components/category.vue';

export default {
    components: {
        'mi-header': header,
        'mi-category': category
    },
    data() {
        return {
            transferTypes: ['全部', '购物奖励', '商家激励','推荐用户','推荐商家','联盟','激励']
        }
    }
}
</script>

<style lang="less" scoped>
.transferpage {
    width: 100%;
    .transferls {
        li {
            background:#fff;
            list-style: none;
            padding: 1rem;
            border-bottom: 1px solid #eee;
            font-size: 1.3rem;
            .tlt {
                font-weight: 400;padding-bottom:0.3rem;
                .time {
                    float: right;
                    font-size: 1rem;
                    color: #999;font-weight: 200;
                }
            }

            .amount {
                float: right;
                font-size: 1.4rem;font-weight:400;
            }
        }
    }
}
</style>


