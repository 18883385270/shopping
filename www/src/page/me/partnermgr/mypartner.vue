<template>
  <div>
    <mi-header title="我的代理"></mi-header>
    <div class="pd-topbtn-xlg text-center" v-if="!MyPartners.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#proxy"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您没有代理任何地区</p>
        </div>
    <div class="pd-lfrt bg-xxlightgray marg" v-for="(Partner,index) in MyPartners" :key="index">
          <div class="pd">
              <div class="bd-btn pd-btn">
                <span class="pull-right text-md">{{Partner.Level}}代理</span>
                  <p class="text-lg text-success">
                    {{Partner.Region}}
                  </p>
              </div>
              <table>
                <tr>
                  <td width="80px"><p class="pd-top">分红比例：</p></td>
                  <td><p class="pd-top">{{Partner.Persent * 1000}}‰ (代理地区累计订单销售额的提成比例)</p></td>
                </tr>
                <tr>
                  <td><p class="pd-top">分红周期：</p></td>
                  <td><p class="pd-top">{{Partner.BalanceInterval}}天，(每{{Partner.BalanceInterval}}天结算一次分红)</p></td>
                </tr>
                <tr>
                  <td><p class="pd-top">分红方式：</p></td>
                  <td><p class="pd-top">现金：{{Partner.CashPersent}}%，福豆：{{100-Partner.CashPersent}}%</p></td>
                </tr>
                <tr>
                  <td><p class="pd-top">分红日期：</p> </td>
                  <td><p class="pd-top">{{Partner.BalancedDate}}, 下次分红日期：{{Partner.NextBalancedDate}}</p> </td>
                </tr>
              </table>     
          </div>
          <div class="flexwarp pd bd-top text-center">
              <div class="wd-50p text-center">
                  上次分红：<span class="text-success text-md"> {{Partner.LastBalancedAmount | currency('￥',2)}}</span>
              </div>
              <div class="wd-50p text-center bd-lf">
                  累计分红：<span class="text-success text-md">{{Partner.TotalBalancedAmount| currency('￥',2)}}</span> 
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as checkJs from "../../../utils/pubfunc"
import * as api from '../../../api/partner'

export default {
  components: {
    'mi-header': header
  },
  data(){
    return {
      MyPartners:[]
    }
  },
  mounted() {
    if (!checkJs.isNullOrEmpty(sessionStorage.MyPartners)) {
      this.MyPartners = JSON.parse(sessionStorage.MyPartners);
    }
    this.getMyPartners();
  },
  methods:{
    getMyPartners() {
      let params = {};
      api.MyPartnersApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.Total=res.data.Total;
            this.MyPartners = res.data.Partners;
            sessionStorage.MyPartners = JSON.stringify(
              this.MyPartners
            );
          } else {
            console.log("网络错误");
          }
        },
        err => {
          console.log("网络错误");
        }
      );
    },
    
  }
}
</script>


<style lang="less" scoped>

</style>

