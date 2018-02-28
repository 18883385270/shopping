
<template>
  <div class="wripper">
      <mi-goodsimg :bannerList="GoodsDetails.Pics" @shareGoods="doShareGoods"></mi-goodsimg>
      <mi-goodsinfo :GoodsDetails="GoodsDetails" ref="control"></mi-goodsinfo> 
      <div class="divider"></div>
      <mi-goodscomments :GoodsDetails="GoodsDetails"></mi-goodscomments>
      <div class="divider"></div>
      <mi-goodsstoreinfo :StoreInfo="GoodsDetails.StoreInfo"></mi-goodsstoreinfo>
      <div class="divider"></div>
      <mi-goodsdetail :GoodsDetails="GoodsDetails"></mi-goodsdetail>
      <div style="height:5rem;"></div>
      <mi-gotop></mi-gotop>
  </div>
</template>
<script>
import goodsimg from './goodsimg.vue'
import goodsinfo from './goodsinfo.vue'
import goodsdetail from './goodsdetail.vue'
import goodsstoreinfo from './goodsstoreinfo.vue'
import goodscomments from './goodscomments.vue'

import modal from '../../../../components/modal.vue'
import gotop from '../../../../components/gotop.vue'
import * as api from '../../../../api/goods'
import * as shareService from '../../../../services/shareservice'

export default {
  props:{
    id:{
      type:String,
      default:''
    }
  },
  components: {
    'mi-goodsimg': goodsimg,
    'mi-goodsinfo': goodsinfo,
    'mi-goodsdetail': goodsdetail,
    'mi-goodsstoreinfo':goodsstoreinfo,
    'mi-goodscomments': goodscomments,
    'mi-modal': modal,
    'mi-gotop':gotop
  },
  data() {
    return {
      Id:'',
      GoodsDetails: {},
      searchState: false
    };
  },
  created() {
    this.Id=this.id||sessionStorage.GoodsId;
  },
  mounted(){
    this.fatchData();
  },
  
  methods: {
    fatchData(){
      //获取商品信息
      let params = {
        Id:this.Id
      };
      api.GoodsInfoApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.GoodsDetails=res.data.GoodsDetails;
            this.GoodsDetails.Specifications=res.data.Specifications;
            this.GoodsDetails.StoreInfo=res.data.StoreInfo;
            this.GoodsDetails.Comments=res.data.Comments;
            this.GoodsDetails.GoodsParams=res.data.GoodsParams;
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    },
    doShareGoods(){
      var goodsInfo={
        Id:this.GoodsDetails.Id,
        Name:this.GoodsDetails.Name,
        Thumb:this.GoodsDetails.Pics[0] || "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png"
      }
      shareService.shareGoods(goodsInfo);
    }
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
