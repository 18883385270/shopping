<template>
  <div>
    <mi-header title="店铺管理"></mi-header>
    <div class="divider"></div>
    <div class="tip error" v-if="StoreInfo.Status && StoreInfo.Status!='正常'">
      <svg>
        <use xlink:href="#x"></use>
      </svg>
      您的店铺未上线，因为店铺资料在审核中
    </div>
    <div class="emptybox" v-if="!StoreInfo.Name">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p> 您还未开通店铺，现在开通?</p>
      <button class="button success" @click="goPage('/bindex/storeowner')">现在开店</button>
    </div>
  
    <div v-if="StoreInfo.Name">
      <div class="storeinfo">
        <div class="storename">
          <svg @click="goSettingPage">
            <use xlink:href="#settingline" />
          </svg>
          <p class="name"> {{StoreInfo.Name}}</p>
          <p>{{StoreInfo.Region}}{{StoreInfo.Address}}</p>
        </div>
        <div class="tongjiinfo">
          <div>
            <span>{{StatisticsInfo.TodayOrder}}</span>
            <p>今日订单</p>
          </div>
          <div>
            <span>{{StatisticsInfo.TodaySale|currency('￥',2)}}</span>
            <p>今日销售额</p>
          </div>
          <div>
            <span>{{StatisticsInfo.TotalOrder}}</span>
            <p>累计订单</p>
          </div>
          <div>
            <span>{{StatisticsInfo.TotalSale|currency('￥',2)}}</span>
            <p>累计销售</p>
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
      <div class="tablerow" @click="goPage('/storemgr/ordermgr')">
        <div class="tlt">订单管理</div>
        <div class="cnt">
          <svg>
            <use xlink:href="#rightarrowsline"></use>
          </svg>
        </div>
      </div>
  
      <div class="tablerow" @click="goPage('/storemgr/goodsmgr')">
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
import header from '../../components/header.vue';
import * as api from '../../api/store'

export default {
  components: {
    'mi-header': header
  },
  data() {
    return {
      StoreInfo: {},
      StatisticsInfo: {},
      SubjectInfo:{},
      StoreOrders: []
    }
  },
  mounted() {
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
      //未开店，进入开店
      this.$router.push({ path: page })
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

.storeinfo {
  background: #fff;
  .storename {
    font-size: 1rem;
    border-bottom: 1px solid #eee;
    padding: 1rem;
    .name {
      font-size: 1.3rem;
      padding: 0.8rem 0;
    }
    svg{
      width:1.6rem;
      height:1.6rem;
      fill:#333;
      float:right;
    }
  }
  .tongjiinfo {

    display: flex;
    div {
      text-align: center;
      width: 25%;
      padding: 0.5rem 0;
      border-left: 1px solid #eee;
      p {
        padding-top: 0.3rem;
      }
      &:first-child {
        border-left: none;
      }
    }
  }
}
</style>

