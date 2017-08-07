<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :categorys="transferTypes"></mi-category>
        <div class="transferls">
            <ul>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>转账</p>
                    <p class="cnt">
                        <span class="amount">+1000.00</span>对方账号xiazhaowei</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>商城消费</p>
                    <p class="cnt">
                        <span class="amount">-500.00</span>订单：2343633435</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>转账</p>
                    <p class="cnt">
                        <span class="amount">+1000.00</span>对方账号xiazhaowei</p>
                </li>
                <li>
                    <p class="tlt">
                        <span class="time">2012-7-21</span>转账</p>
                    <p class="cnt">
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
            transferTypes: ['全部', '支出', '收入']
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
                padding-bottom:0.3rem;font-size:1.3rem;
                .time {
                    float: right;
                    font-size: 1rem;
                    color: #999;
                }
            }
            .cnt{
                font-size:1.2rem;color:#999;
            }

            .amount {
                float: right;
                font-size: 1.4rem;color:#333;
            }
        }
    }
}
</style>


