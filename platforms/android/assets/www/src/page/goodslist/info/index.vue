/*
* 商品详情页面
*/
<template>
  <div class="wripper">
    <mi-goodsimg :bannerList="GoodsDetails.Pics"></mi-goodsimg>
     <mi-goodsinfo :GoodsDetails="GoodsDetails" ref="control"></mi-goodsinfo> 
    <mi-goodscomments :GoodsDetails="GoodsDetails"></mi-goodscomments>
    <mi-goodsdetail :GoodsDetails="GoodsDetails"></mi-goodsdetail>
    <div style="height:5rem;"></div>
    
    <!--弹出框-->
    <!-- <mi-modal ref="alert" type="alert" @alertEvent="alertBtnEvent">
      <div slot="alert" class="alert">
        <h5>您选择的产品</h5>
        <h6>{{ popInfo.title }}</h6>
        <p>{{ popInfo.ram }}　　{{ popInfo.color }}</p>
      </div>
    </mi-modal> -->
  </div>
</template>
<script>
import goodsimg from './goodsimg.vue'
import goodsinfo from './goodsinfo.vue'
import goodsdetail from './goodsdetail.vue'
import goodscomments from './goodscomments.vue'

//import data from '../../../../../data.json'
import modal from '../../../components/modal.vue'
import * as api from '../../../api/goods'

export default {
  components: {
    'mi-goodsimg': goodsimg,
    'mi-goodsinfo': goodsinfo,
    'mi-goodsdetail': goodsdetail,
    'mi-goodscomments': goodscomments,
    'mi-modal': modal
  },
  data() {
    return {
      Id:'',
      GoodsDetails: {},
      searchState: false,
      popInfo: {}
    };
  },
  created() {
    this.Id=this.$route.params.id
  },
  mounted(){
    //获取商品信息
    let params = {
      Id:this.Id
    };
    api.GoodsInfoApi(params).then(
      res => {
        if (res.data.Code == 200) {
          this.GoodsDetails=res.data.GoodsDetails;
          this.GoodsDetails.Specifications=res.data.Specifications;
          this.GoodsDetails.Comments=res.data.Comments;
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
