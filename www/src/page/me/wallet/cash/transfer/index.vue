<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :categorys="transferTypes"></mi-category>
        <div class="transferls">
            
            <ul>
                <li v-for="cashtransfer in cashtransfers">
                    <p class="tlt">
                        <span class="time">{{cashtransfer.CreatedOn}}</span>{{cashtransfer.Type}}</p>
                    <p class="cnt">
                        <span class="amount">
                            <span v-if="cashtransfer.Direction=='进账'">+</span>
                            <span v-if="cashtransfer.Direction!='进账'">-</span>
                            {{cashtransfer.Amount}}</span>{{cashtransfer.Remark}}</p>
                </li>
               
            </ul>
        </div>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import category from '../../../../../components/category.vue';
import * as api from '../../../../../api/wallet'

export default {
    components: {
        'mi-header': header,
        'mi-category': category
    },
    data() {
        return {
            transferTypes: ['全部', '支出', '收入'],
            cashtransfers:[]
        }
    },
    mounted(){
        let params = {};
        api.CashTransfersApi(params).then(
            res => {
                if (res.data.Code == 200) {
                this.cashtransfers=res.data.CashTransfers;
                } else {
                    console.log("返回错误码：" + res.data.Code);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
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


