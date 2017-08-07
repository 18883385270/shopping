/*
* 商品详情页面
*/
<template>
  <div class="wripper">
    <mi-goodsimg></mi-goodsimg>
    <mi-goodsinfo :goodsAttr="goodsAttr" ref="control"></mi-goodsinfo>
    <mi-goodscomments></mi-goodscomments>
    <mi-goodsdetail :detailData="detailData"></mi-goodsdetail>
    <!--底部bar-->
    <div class="btnbar">
      <div class="store" @click="toHomeEvent">
        <svg>
          <use xlink:href="#home"></use>
        </svg>
        进店
      </div>
      <div class="store bdlf" @click="toHomeEvent">
        <svg>
          <use xlink:href="#cart"></use>
        </svg>
        购物车
      </div>
      <div class="cart" @click="addCartEvent">加入购物车</div>
      <div class="buy" @click="butEvent">
        立即购买
      </div>
  
    </div>
    <!--弹出框-->
    <mi-modal ref="alert" type="alert" @alertEvent="alertBtnEvent">
      <div slot="alert" class="alert">
        <h5>您选择的产品</h5>
        <h6>{{ popInfo.title }}</h6>
        <p>{{ popInfo.ram }}　　{{ popInfo.color }}</p>
      </div>
    </mi-modal>
  </div>
</template>
<script>
import goodsimg from './goodsimg.vue';
import goodsinfo from './goodsinfo.vue';
import goodsdetail from './goodsdetail.vue';
import goodscomments from './goodscomments.vue';

import data from '../../../../../data.json';
import modal from '../../../components/modal.vue';

export default {
  components: {
    'mi-goodsimg': goodsimg,
    'mi-goodsinfo': goodsinfo,
    'mi-goodsdetail': goodsdetail,
    'mi-goodscomments': goodscomments,
    'mi-modal': modal
  },
  created() {
    this.detailData = data.detail;
    this.goodsAttr = data.detail.goodsAttr;
  },
  data() {
    return {
      detailData: [],
      goodsAttr: {},
      searchState: false,
      popInfo: {}
    };
  },
  methods: {
    toHomeEvent() {
      this.$router.replace({ path: '/' });
    },
    butEvent() {
      var checkInfo = this.$refs.control.submitBuyInfo();
      var info = {};
      info.title = data.detail.goodsAttr.title;
      info.ram = checkInfo.ram.text;
      info.color = checkInfo.color.text;
      this.popInfo = info;
      this.$refs.alert.modalOpen();
    },
    addCartEvent() {
      console.log('添加到购物车成功');
    },
    searchHandle(Boolean) {
      if (Boolean) {
        this.searchState = true;
      } else {
        this.searchState = false;
      }
    },
    alertBtnEvent() { }
  }
};
</script>

<style lang="less">
.bdlf {
  border-left: 1px solid #eee;
}

.wripper {

  .btnbar {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 4rem;
    div {
      text-align: center;
      &.store {
        width: 15%;
        color: #333;
        svg {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          margin: 0.5rem auto 0.3rem auto;
          fill: #999;
        }
      }

      &.cart {
        width: 35%;
        color: #fff;
        text-align: center;
        background: #F6A376;
        font-size: 1.3rem;
        padding: 1.1rem 0;
      }
      &.buy {
        width: 35%;
        padding: 1.1rem 0;
        color: #fff;
        text-align: center;
        background: #FF5722;
        font-size: 1.3rem;
      }
    }
  }
}

.alert {
  h5 {
    margin: 0.5rem;
    text-align: center;
    font-weight: normal;
    color: #333;
    font-size: 1.6rem;
  }
  h6 {
    margin: 1rem;
    color: #ff8a27;
    font-size: 1.4rem;
    font-weight: normal;
  }
  p {
    line-height: 2.5rem;
    font-size: 1.4rem;
    margin: 0.5rem;
    color: #666;
  }
}
</style>
