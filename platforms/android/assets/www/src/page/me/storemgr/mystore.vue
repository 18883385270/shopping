<template>
  <div class="pagewp" :style="{height:pageHeight}">
    <mi-header title="店铺管理"></mi-header>
    <div class="divider"></div>
    <div class="tip error" v-if="StoreInfo.Status && StoreInfo.Status!='正常'">
      <svg>
        <use xlink:href="#x"></use>
      </svg>
      您的店铺未上线，因为店铺资料在审核中
    </div>
    <div class="pd-topbtn-xlg text-center" v-if="!StoreInfo.Name">
            <svg class="icon-xxxlg">
                <use xlink:href="#onlineshop"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您没有开通线上店铺</p>
        </div>
  
    <div v-if="StoreInfo.Name">
      <div class="bg-white">
        <div class="pd">
          <svg class="icon-sm pull-right" @click="goSettingPage">
            <use xlink:href="#settingline" />
          </svg>
          <p class="text-md"> {{StoreInfo.Name}}</p>
          <p>{{StoreInfo.Region}}{{StoreInfo.Address}}</p>
        </div>
        <div class="flexwarp bd-top text-center pd-topbtn-sm">
          <div class="wd-25p">
            <span>{{StatisticsInfo.TodayOrder}}</span>
            <p class="text-gray">今日订单</p>
          </div>
          <div class="wd-25p bd-lf">
            <span>{{StatisticsInfo.TodaySale|currency('￥',2)}}</span>
            <p class="text-gray">今日销售额</p>
          </div>
          <div class="wd-25p bd-lf">
            <span>{{StatisticsInfo.TotalOrder}}</span>
            <p class="text-gray">累计订单</p>
          </div>
          <div class="wd-25p bd-lf">
            <span>{{StatisticsInfo.TotalSale|currency('￥',2)}}</span>
            <p class="text-gray">累计销售</p>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="newordertip" v-for="StoreOrder in StoreOrders" @click="goOrderInfoPage(StoreOrder)">
        <div class="title">
          <p class="tiplabel">新订单，提醒</p>
          <p>订单号：{{StoreOrder.Number}}</p>
          <p v-if="StoreOrder.Remark">备注：{{StoreOrder.Remark}}</p>
        </div>
        <div class="ordergoodses">
          <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses">
            <div class="pic">
              <img :src="Goods.GoodsPic" alt="">
            </div>
            <div class="cnt">
              <p>{{Goods.GoodsName}}</p>
              <p>{{Goods.SpecificationName}}</p>
              <p>数量：x{{Goods.Quantity}}</p>
            </div>
          </div>
        </div>
        <div class="expressaddress text-gray">
          <p>
            {{StoreOrder.ExpressRegion}}{{StoreOrder.ExpressAddress}}
          </p>
          <p>
            {{StoreOrder.ExpressName}} {{StoreOrder.ExpressMobile}}
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tablerow" @click="goPage('ordermgr')">
        <div class="tlt">订单管理</div>
        <div class="cnt">
          <svg>
            <use xlink:href="#rightarrowsline"></use>
          </svg>
        </div>
      </div>
  
      <div class="tablerow" @click="goPage('goodsmgr')">
        <div class="tlt">商品管理</div>
        <div class="cnt">
          <svg>
            <use xlink:href="#rightarrowsline"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import header from '../../../components/header.vue';
import * as api from '../../../api/store'
import * as util from '../../../utils/util'

export default {
  components: {
    'mi-header': header
  },
  data() {
    return {
      pageHeight:"100%",
      StoreInfo: {},
      StatisticsInfo: {},
      SubjectInfo:{},
      StoreOrders: []
    }
  },
  mounted() {
    this.pageHeight=util.screenSize().height+'px'
    this.GetMyStoreInfo();
  },
  methods: {
    GetMyStoreInfo() {
      //加载店铺信息
      let params = {};
      api.InfoApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.StoreInfo = res.data.StoreInfo;
            this.StatisticsInfo = res.data.StatisticsInfo;
            this.SubjectInfo = res.data.SubjectInfo;
            this.StoreOrders = res.data.StoreOrders;
            //将数据保存到sessionStore 方便页面传值
            sessionStorage.StoreInfo = JSON.stringify(this.StoreInfo)
            sessionStorage.SubjectInfo = JSON.stringify(this.SubjectInfo)
          } else {

          }
        },
        err => {
          console.log('网络错误');
        }
      )
    },
    goPage(page) {
      this.$router.push({ name: page })
    },
    goSettingPage(){
      this.$router.push({name:'storesetting',params:{Store:this.StoreInfo,SubjectInfo:this.SubjectInfo}})
    },
    goOrderInfoPage(order) {
      //要传递的订单信息存到sessionStorage
      sessionStorage.StoreStoreOrder = JSON.stringify(order)
      this.$router.push({name:'orderinfomgr'})
    }
  }
}
</script>


<style lang="less" scoped>
.pagewp{
    background:#eee;
}
.newordertip {
  border-top: 0.05rem solid #096;
  background: #fff;
  .title {
    padding: 1rem;
    .tiplabel {
      color: #fff;
      float: right;
      background: #096;
      padding: 0.2rem 0.4rem;
      margin-top: -1rem;
      margin-right: -1rem;
    }
  }
  .ordergoodses {
    padding-top: 1rem;
    .goods {
      display: flex;
      border-bottom: 1px dashed #eee;
      .pic {
        width: 30%;
        padding: 0 1rem 0 1rem;
        img {
          width: 100%;
        }
      }
      .cnt {
        width: 70%;
      }
    }
  }
  .expressaddress {
    padding: 1rem;
  }
}

</style>

