<template>
  <div>
      <mi-header title="线下转账记录"></mi-header>
      
        <div class="pd-topbtn-xlg text-center" v-if="!RechargeApplys.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有记录</p>
        </div>
      <div class="transferls">
                <div class="pd bd-btn text-md" v-for="(RechargeApply,index) in RechargeApplys" :key="index">
                    <p class="pd-btn bd-btn">
                        <span class="pull-right text-lightgray">{{RechargeApply.CreatedOn}}</span>{{RechargeApply.Status}}</p>
                    <p class="text-gray">
                        <span class="pull-right text-danger text-lg">
                            <span>+</span>
                            {{RechargeApply.Amount}}</span>{{RechargeApply.Remark}}({{RechargeApply.BankName}}尾号{{RechargeApply.BankNumber|endword(4)}})</p>
                </div>
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
        this.fatchData();
    },
    methods:{
        fatchData(){
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
        }
    }
}
</script>

<style lang="less" scoped>


</style>


