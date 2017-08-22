<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :categorys="TransferTypes"></mi-category>
        <div class="emptybox" v-if="!Transfers.length">
            <svg>
                <use xlink:href="#empty"></use>
            </svg>
            <p> 没有记录</p>
        </div>
        <div class="transferls">
            <ul>
                <li v-for="transfer in Transfers">
                    <p class="tlt">
                        <span class="time">{{transfer.CreatedOn}}</span>{{transfer.Type}}</p>
                    <p class="cnt">
                        <span class="amount">
                            <span v-if="transfer.Direction=='进账'">+</span>
                            <span v-if="transfer.Direction!='进账'">-</span>
                            {{transfer.Amount}}</span>备注：{{transfer.Remark}}</p>
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
            TransferTypes: ['全部', '购物奖励', '商家激励','推荐用户','推荐商家','联盟','激励'],
            Transfers: []
        }
    },
    mounted() {
        let params = {};
        api.BenevolenceTransfersApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    this.Transfers = res.data.BenevolenceTransfers;
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
            background: #fff;
            list-style: none;
            padding: 1rem;
            border-bottom: 1px solid #eee;
            font-size: 1.3rem;

            .tlt {
                padding-bottom: 0.3rem;
                font-size: 1.3rem;
                .time {
                    float: right;
                    font-size: 1rem;
                    color: #999;
                }
            }
            .cnt {
                font-size: 1.2rem;
                color: #999;
            }

            .amount {
                float: right;
                font-size: 1.4rem;
                color: #333;
            }
        }
    }
}
</style>


