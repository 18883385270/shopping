<template>
    <div>
        <mi-header title="我的收益"></mi-header>
        <div class="tabindicator">
        <div @click="replacePage('award')">推荐奖励</div>
        <div @click="replacePage('incentive')" class="active">福豆激励</div>
        </div>

        <div class="pd-topbtn-xlg text-center" v-if="!IncentiveLogs.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有激励记录</p>
        </div>

        <div class="marg bd img-round bg-xxlightgray" v-for="Incentive in IncentiveLogs" :key="Incentive.Id">
            <div class="pd flexwarp">
                <div class="wd-30p">
                    <span class="label label-danger">福豆激励</span>
                </div>
                <div class="wd-70p text-lightgray text-right">
                    {{Incentive.CreatedOn}}
                </div>
            </div>
            
            <div class="flexwarp pd-topbtn">
                <div class="wd-33p text-center">
                    <svg class="icon icon-gray icon-md">
                        <use xlink:href="#integral"></use>
                    </svg>
                    <p class="text-md pd-topbtn">-{{Incentive.BenevolenceAmount |currency('',4)}}</p>
                </div>
                <div class="wd-33p text-center">
                    <svg class="icon icon-gray icon-sm">
                        <use xlink:href="#rightarrowsline"></use>
                    </svg>
                </div>
                <div class="wd-33p text-center">
                    <svg class="icon icon-success icon-md">
                        <use xlink:href="#cash"></use>
                    </svg>
                    <p class="text-xlg text-success pd-topbtn">+{{Incentive.Amount |currency('',2)}}</p>
                </div>
            </div>
            <div class="flexwarp text-center bd-top pd">
                <p class="wd-50p">{{Incentive.Remark}}</p>
                <p class="wd-50p">手续费：{{Incentive.Fee |currency('￥',2)}}</p>
            </div>
        </div>
        <div class="pd text-center text-lightgray">
            我会偷懒，仅显示最近5次激励~
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as api from '../../../../api/wallet'

export default {
    components: {
        'mi-header': header
    },
    data(){
        return{
            IncentiveLogs:[]
        }
    },
    mounted(){
        this.fatchData()
    },
    methods: {
        fatchData(){
            let params = {};
            api.IncentiveLogsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.IncentiveLogs=res.data.IncentiveLogs
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        replacePage(page) {
            this.$router.replace({ name: page })
        },
    }
}
</script>

<style lang="less" scoped>

.tabindicator {
  margin: 0 20% 2rem 20%;
  display: flex;
  div {
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
    width: 50%;
    font-size: 1.3rem;
    &.active {
      color: #096;
      border-bottom-color: #096;
    }
  }
}

</style>


