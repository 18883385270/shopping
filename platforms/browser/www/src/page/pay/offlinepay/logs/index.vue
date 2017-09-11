<template>
  <div>
      <mi-header title="线下转账记录"></mi-header>
      <div class="emptybox" v-if="!RechargeApplys.length">
            <svg>
                <use xlink:href="#emptyline"></use>
            </svg>
            <p> 没有记录</p>
        </div>
      <div class="transferls">
            <ul>
                <li v-for="RechargeApply in RechargeApplys">
                    <p class="tlt">
                        <span class="time">{{RechargeApply.CreatedOn}}</span>{{RechargeApply.Status}}</p>
                    <p class="cnt">
                        <span class="amount">
                            <span>+</span>
                            {{RechargeApply.Amount}}</span>{{RechargeApply.Remark}}({{RechargeApply.BankName}}尾号{{RechargeApply.BankNumber|endword(4)}})</p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as api from '../../../../api/wallet'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            RechargeApplys:[]
        }
    },
    mounted(){
        let params = {};
        api.RechargeApplyLogsApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    this.RechargeApplys=res.data.RechargeApplys;
                } else {
                    console.log(res.data.Message);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    methods:{
        
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


