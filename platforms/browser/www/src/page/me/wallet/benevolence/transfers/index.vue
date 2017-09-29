<template>
    <div class="transferpage">
        <mi-header title="记录"></mi-header>
        <mi-category :categorys="TransferTypes" @categoryChanged="categoryChangedHandle"></mi-category>
        <div class="divider"></div>
        <div class="emptybox" v-if="!Transfers.length">
            <svg>
                <use xlink:href="#emptyline"></use>
            </svg>
            <p> 没有记录</p>
        </div>
        <div class="transferls"v-if="Transfers.length">
            <ul>
                <li v-for="transfer in Transfers">
                    <p class="tlt">
                        <span class="time">{{transfer.CreatedOn}}</span>{{transfer.Type}}</p>
                    <p class="cnt">
                        <span class="amount">
                            <span v-if="transfer.Direction=='进账'">+</span>
                            <span v-if="transfer.Direction!='进账'">-</span>
                            {{transfer.Amount}}</span>{{transfer.Remark}}</p>
                </li>
            </ul>
            <div class="nextpage" @click="NextPage" v-if="!NotAnyMore">
                <span>加载更多</span>
            </div>
            <div class="nextpage" @click="NextPage" v-if="NotAnyMore">
                <span>没有更多了</span>
            </div>
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
            TransferTypes: ['全部','购物奖励', '商家奖励','推荐奖励','推荐商家','联盟分成','转账','善心激励','系统操作'],
            TransferTypesValue:['All','ShoppingAward', 'StoreAward','RecommendUserAward','RecommendStoreAward','UnionAward','Transfer','Incentive','SystemOp'],
            Transfers: [],
            CurrentIndex:0,
            CurrentPage:1,
            NotAnyMore:false
        }
    },
    mounted() {
        this.fetchData(this.CurrentIndex,this.CurrentPage);
    },
    methods:{
        categoryChangedHandle(index){
            this.CurrentIndex=index;
            this.CurrentPage=1;
            this.NotAnyMore=false;
            this.Transfers.splice(0,this.Transfers.length);//清空数据
            this.fetchData(this.CurrentIndex,this.CurrentPage);
        },
        fetchData(index,page){
            let params = {
                Type:this.TransferTypesValue[index],
                Page:page
            };
            api.BenevolenceTransfersApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //加入到数组
                        if(res.data.BenevolenceTransfers.length){
                            this.Transfers=this.Transfers.concat(res.data.BenevolenceTransfers);
                        }
                        else{
                            this.NotAnyMore=true;
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
        NextPage(){
            this.CurrentPage++;
            this.fetchData(this.CurrentIndex,this.CurrentPage);
        }
    }
}
</script>

<style lang="less" scoped>
.transferpage {
    width: 100%;
    .transferls {
        margin-top:1rem;
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
.nextpage{
    text-align:center;
    padding:1rem;
    background:#fff;
}
</style>


