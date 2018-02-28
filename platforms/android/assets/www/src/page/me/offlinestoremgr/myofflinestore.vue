<template>
  <div>
      <mi-header title="线下店铺"></mi-header>
      <div class="emptybox" v-if="!MyOfflineStores.length">
            <svg>
                <use xlink:href="#emptyline"></use>
            </svg>
            <p>您没有开通线下店铺</p>
        </div>
      <div class="storels" v-for="OfflineStore in MyOfflineStores" :key="OfflineStore.Id" @click="goPayeeCodePage(OfflineStore)">
          <div class="storewp">
              <div class="thumb">
                  <img :src="OfflineStore.Thumb" alt="">
              </div>
              <div class="name pd-lf-md">
                  <p class="text-md">{{OfflineStore.Name}}
                      <svg>
                          <use xlink:href="#qrcode"></use>
                      </svg>
                  </p>
                  <p class="text-gray pd-top-md">{{OfflineStore.Region}}{{OfflineStore.Address}}</p>
                  <p class="text-gray pd-top-md">合同让利：{{OfflineStore.Persent}}%</p>
              </div>
          </div>
          <div class="tongji">
              <div>
                  今日销售额：{{OfflineStore.TodaySale | currency('￥',2)}}
              </div>
              <div>
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
            //将数据保存到sessionStore 方便页面传值
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
.storels{
    margin-top:1.5rem;
    border-top:1px solid #096;
    border-bottom:1px solid #eee;
}
.storewp{
    display:flex;
    padding:1rem;
    background:#F6FAF7;
    .thumb{
        width:30%;
        img{
            width:100%;
            border-radius:3px;
        }
    }
    .name{
        width:70%;
        svg{
            width:1.5rem;
            height:1.5rem;
            fill:#333;
            float:right;
        }
    }
}
.tongji{
    display:flex;
    background:#eee;
    
    >div{
        width:50%;
        text-align:center;
        padding:1rem 0;
        +div{
            border-left:1px solid #ddd;
        }
    }
}
</style>


