<template>
  <div>
      <mi-header title="我的收益"></mi-header>
      <div class="tabindicator">
        <div @click="replacePage('award')" class="active">推荐奖励</div>
        <div @click="replacePage('incentive')">福豆激励</div>
        </div>
        <div class="pd-topbtn-xlg text-center" v-if="!Transfers.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有记录</p>
        </div>
      <div class="marg bd bg-xxlightgray img-round" v-for="(Transfer,index) in Transfers" :key="index">
          <div class="flexwarp pd">
              <div class="wd-50p"><span class="label label-success">{{Transfer.Type}}</span></div>
              <div class="wd-50p text-right">
                  <p class="text-lightgray">{{Transfer.CreatedOn}}</p>
              </div>
          </div>
          <div class="flexwarp pd bd-topbtn">
              <div class="wd-40p">
                  <p>{{Transfer.Remark}}</p>
              </div>
              <div class="wd-60p bd-lf text-right">
                  <p class="text-xxlg text-danger">+{{Transfer.Amount}}</p>
              </div>
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
          Transfers:[]
      }
  },
  mounted(){
      this.fetchData();
  },
  methods:{
      replacePage(page) {
            this.$router.replace({ name: page })
        },
        fetchData(index, page) {
            let params = {
                Type: "RecommendUserAward",
                Page: 1
            };
            api.CashTransfersApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                       this.Transfers = res.data.CashTransfers;
                        
                    } else {
                        console.log("返回错误码：" + res.data.Code);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
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

