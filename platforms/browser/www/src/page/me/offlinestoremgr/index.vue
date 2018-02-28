<template>
  <div>
      <mi-header title="线下店铺"></mi-header>
        <div class="pd-topbtn-xlg text-center" v-if="!MyOfflineStores.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#offlineshop"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您没有开通线下店铺</p>
        </div>
      <div class="marg-top bd-top" v-for="OfflineStore in MyOfflineStores" :key="OfflineStore.Id" @click="goPayeeCodePage(OfflineStore)">
          <div class="flexwarp">
              <div class="wd-30p pd">
                  <img class="wd-100p img-round" :src="OfflineStore.Thumb" alt="">
              </div>
              <div class="wd-70p pd">
                  <p class="text-md">
                      {{OfflineStore.Name}}
                      <svg class="pull-right icon icon-sm">
                          <use xlink:href="#qrcode"></use>
                      </svg>
                  </p>
                  <p class="text-gray pd-top">{{OfflineStore.Region}}{{OfflineStore.Address}}</p>
                  <p class="text-gray pd-top">合同让利：{{OfflineStore.Persent}}%</p>
              </div>
          </div>
          <div class="flexwarp pd-topbtn bg-success text-white">
              <div class="wd-50p text-center">
                  今日销售额：{{OfflineStore.TodaySale | currency('￥',2)}}
              </div>
              <div class="wd-50p text-center">
                  累计销售额：{{OfflineStore.TotalSale| currency('￥',2)}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import header from "../../../components/header.vue";
import * as api from "../../../api/offlinestore";
import * as checkJs from "../../../utils/pubfunc";

export default {
  components: {
    "mi-header": header
  },
  data() {
    return {
        Total:0,
      MyOfflineStores: []
    };
  },
  mounted() {
    if (!checkJs.isNullOrEmpty(sessionStorage.MyOfflineStores)) {
      this.MyOfflineStores = JSON.parse(sessionStorage.MyOfflineStores);
    }
    this.getMyOfflineStores();
  },
  methods: {
    getMyOfflineStores() {
      let params = {};
      api.MyOfflineStoresApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.Total=res.data.Total;
            this.MyOfflineStores = res.data.OfflineStores;
            sessionStorage.MyOfflineStores = JSON.stringify(
              this.MyOfflineStores
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
    goPayeeCodePage(offlineStore){
        sessionStorage.MyOfflineStore=JSON.stringify(offlineStore);
        this.$router.push({name:'payeecode'});
    }
  }
};
</script>

<style lang="less" scoped>

</style>


