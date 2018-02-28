<template>
  <div>
      <mi-header title="提现记录"></mi-header>
      <div class="emptybox" v-if="!WithdrawApplys">
            <svg>
                <use xlink:href="#emptyline"></use>
            </svg>
            <p> 没有记录</p>
        </div>
      <div class="transferls">
            <ul>
                <li v-for="WithdrawApply in WithdrawApplys" :key="WithdrawApply.Id">
                    <p class="tlt">
                        <span class="time">{{WithdrawApply.CreatedOn}}</span>{{WithdrawApply.Status}}</p>
                    <p class="cnt">
                        <span class="amount">
                            <span>-</span>
                            {{WithdrawApply.Amount}}</span>到账银行：{{WithdrawApply.BankName}}(尾号{{WithdrawApply.BankNumber|endword(4)}})</p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import header from '../../../../../../components/header.vue'
import * as api from '../../../../../../api/wallet'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            WithdrawApplys:null
        }
    },
    mounted(){
        this.fatchData();
    },
    methods:{
        fatchData(){
            let params = {};
            api.WithdrawApplyLogsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.WithdrawApplys=res.data.WithdrawApplys;
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>


