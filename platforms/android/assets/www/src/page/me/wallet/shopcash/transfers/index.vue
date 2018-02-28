<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :CurrentIndex="CurrentIndex" :categorys="TransferTypes" @categoryChanged="categoryChangedHandle"></mi-category>
        <div class="divider"></div>
        <div class="pd-topbtn-xlg text-center" v-if="!Transfers.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有记录</p>
        </div>
        <div class="pd-lfrt" v-if="Transfers.length">
            <div class="bd-btn pd-topbtn" v-for="transfer in Transfers" :key="transfer.Id">
                <div class="text-md">
                    <span class="pull-right text-sm text-gray">{{transfer.CreatedOn}} </span>
                    {{transfer.Type}}
                </div>
                <div class="pd-top">
                    <span class="text-xlg pull-right" :class="{'text-red':transfer.Direction=='进账','text-success':transfer.Direction!='进账'}">
                        <span v-if="transfer.Direction=='进账'">+</span>
                        <span v-if="transfer.Direction!='进账'">-</span>
                        {{transfer.Amount}} 
                    </span>
                    <span class="text-lightgray">
                        {{transfer.Remark}}
                        <span v-if="transfer.Fee>0">
                            ，手续费：{{transfer.Fee}}
                        </span> &nbsp;
                    </span>
                </div>
            </div>
            
            <div class="pd text-center" @click="NextPage" v-if="!NotAnyMore">
                <span>加载更多</span>
            </div>
            <div class="pd text-center" @click="NextPage" v-if="NotAnyMore">
                <span>没有更多了</span>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import category from '../../../../../components/category.vue';
import * as api from '../../../../../api/wallet'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-category': category
    },
    data() {
        return {
            TransferTypes: ['全部', '导入', '消费',  '系统操作', '退款'],
            TransferTypesValue: ['All', 'Charge', 'Shopping', 'SystemOp', 'Refund'],
            Transfers: [],
            CurrentIndex: 0,
            CurrentPage: 1,
            NotAnyMore: false
        }
    },
    mounted() {
        if (!checkJs.isNullOrEmpty(sessionStorage.MyCashTransferIndex)) {
            this.CurrentIndex = sessionStorage.MyCashTransferIndex
        }
        this.fetchData(this.CurrentIndex, this.CurrentPage);
    },
    methods: {
        categoryChangedHandle(index) {
            this.CurrentIndex = index;
            this.CurrentPage = 1;
            this.NotAnyMore = false;
            this.Transfers.splice(0, this.Transfers.length);//清空数据
            this.fetchData(this.CurrentIndex, this.CurrentPage);
        },
        fetchData(index, page) {
            let params = {
                Type: this.TransferTypesValue[index],
                Page: page
            };
            api.ShopCashTransfersApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //加入到数组
                        if (res.data.ShopCashTransfers.length) {
                            this.Transfers = this.Transfers.concat(res.data.ShopCashTransfers);
                        }
                        else {
                            this.NotAnyMore = true;
                        }
                    } else {
                        console.log("返回错误码：" + res.data.Code);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        NextPage() {
            this.CurrentPage++;
            this.fetchData(this.CurrentIndex, this.CurrentPage);
        }
    }
}
</script>

<style lang="less" scoped>

</style>


