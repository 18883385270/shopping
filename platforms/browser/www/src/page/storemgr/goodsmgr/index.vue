<template>
  <div>
    <mi-header title="商品管理"></mi-header>
    <div class="divider"></div>
    <div class="emptybox" v-if="!Goodses.length">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p> 您还未添加任何商品</p>
    </div>
    <div class="goodslist">
      <div class="goodswp" v-for="Goods in Goodses">
        <div class="pic">
          <img :src="Goods.Pics[0]" alt="">
        </div>
        <div class="info">
          <p>{{Goods.Name|truncate(20)}}</p>
          <p class="text-gray">{{Goods.Description|truncate(40)}}</p>
          <p>{{Goods.Price|currency('￥',2)}}</p>
        </div>
        <div class="ops">

        </div>
      </div>
    </div>
    <div class="mgrtip">
      管理商品请用电脑登录：store.wftx666.com
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/goods'

export default {
  components: {
    'mi-header': header
  },
  data() {
    return {
      Goodses: []
    }
  },
  mounted() {
    //加载商品

    let params = {};
    api.MgrAllGoodsesApi(params).then(
      res => {
        if (res.data.Code == 200) {
          this.Goodses = res.data.Goodses;
        } else {
          console.log(res.data.Message);
        }
      },
      err => {
        console.log('网络错误');
      }
    )
  },
  methods: {
    rightNavBarHandle() {
      this.$router.push({ path: '/me/storemgr/goodsmgr/add' });
    }
  }
}
</script>


<style lang="less" scoped>
.goodswp {
  background: #fff;
  display: flex;
  border-bottom: 1px dashed #eee;
  padding: 1rem;
  .pic {
    width: 25%;
    img {
      width: 100%;
    }
  }
  .info {
    width: 70%;
    padding: 0 1rem;
  }
  .ops {
    width: 10%;
    text-align: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: #333;
      margin-top: 1rem;
    }
  }
}

.mgrtip {
  padding: 1rem;
  text-align: center;
}
</style>

