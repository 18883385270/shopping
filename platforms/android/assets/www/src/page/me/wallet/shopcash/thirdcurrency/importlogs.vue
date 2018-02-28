<template>
    <div class="transferpage">
        <mi-header title="导入记录"></mi-header>
        <div class="divider"></div>
        <div class="pd-topbtn-xlg text-center" v-if="!ImportLogs.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有记录</p>
        </div>
        
        <div class="transferls" v-if="ImportLogs.length">
            <ul>
                <li v-for="importLog in ImportLogs" :key="importLog.Id">
                    <div class="icon">
                      <svg>
                        <use xlink:href="#cashticket"></use>
                      </svg>
                    </div>
                    <div class="content">
                      <span class="pull-right text-gray">{{importLog.CreatedOn}}</span>
                      账号：{{importLog.Account}}
                    
                      <div class="text-gray pd-top-md">
                        <span class="pull-right text-gray text-s">兑换比 1 : {{importLog.Conversion}}</span>
                        {{importLog.Amount}} -> {{importLog.ShopCashAmount}} 
                      </div>
                    </div>
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
import * as api from '../../../../../api/thirdcurrency'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header
    },
    data() {
        return {
            ImportLogs: [],
            CurrentPage: 1,
            NotAnyMore: false
        }
    },
    mounted() {
        if (!checkJs.isNullOrEmpty(sessionStorage.ThirdCurrency)) {
            this.ThirdCurrency = JSON.parse(sessionStorage.ThirdCurrency)
        }
        
        this.fetchData(this.CurrentPage);
    },
    methods: {
        
        fetchData(page) {
            let params = {
                Id: this.ThirdCurrency.Id,
                Page: page
            };
            api.ImportLogsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //加入到数组
                        if (res.data.ImportLogs.length) {
                            this.ImportLogs = this.ImportLogs.concat(res.data.ImportLogs);
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
            this.fetchData(this.CurrentPage);
        }
    }
}
</script>

<style lang="less" scoped>
.transferpage {
    width: 100%;
    .transferls {
        margin-top: 1rem;
        li {
            background: #fff;
            list-style: none;
            padding: 1rem;
            border-bottom: 1px solid #eee;
            display:flex;

            .icon{
              width:15%;
              svg{
                width:3rem;
                height:3rem;
                fill:#096;
              }
            }
            .content{
              width:85%;
            }
        }
    }
}

.nextpage {
    text-align: center;
    padding: 1rem;
    background: #fff;
}
</style>


