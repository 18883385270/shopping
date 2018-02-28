<template>
  <div>
    <mi-header title="退款信息"></mi-header>
    <div class="refundtlt">
      <h3 v-if="StoreOrder.Status=='退货退款'">等待卖家处理</h3>
      <h3 v-if="StoreOrder.Status=='同意退货'">商家同意退货，请处理</h3>
      <h3 v-if="StoreOrder.Status=='退货发货'">
        <svg>
          <use xlink:href="#ok"></use>
        </svg>
        您已发货，等待商家收货处理
      </h3>
    </div>
    <div v-if="StoreOrder.Status=='同意退货'">
      <div class="refundstep">
        退款步骤
        <p>1） 寄回【订单所有商品】 --------2） 及时填写退货信息</p>
      </div>
      <div class="refundstep">
        <p>退货地址：{{ReturnAddressInfo.ReturnAddress}}</p>
        <p>收件人：{{ReturnAddressInfo.ReturnAddressName}}</p>
        <p>联系电话：{{ReturnAddressInfo.ReturnAddressMobile}}</p>
        <p>商家留言：{{StoreOrder.StoreRemark}}</p>
      </div>
    </div>
    <div v-if="StoreOrder.Status=='退货发货'">
      <div class="refundstep">
        <p>快递公司：{{StoreOrder.ReturnDeliverExpressName}}</p>
        <p>快递单号：{{StoreOrder.ReturnDeliverExpressNumber}}</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="tablerowinfo">
      <div class="tlt">退款类型：</div>
      <div class="cnt">退货退款</div>
    </div>
    <div class="tablerowinfo">
      <div class="tlt">退款金额：</div>
      <div class="cnt"><span class="text-red">{{StoreOrder.RefundAmount | currency('￥',2)}}</span></div>
    </div>
    <div class="tablerowinfo">
      <div class="tlt">退款原因：</div>
      <div class="cnt">{{StoreOrder.Reason}}</div>
    </div>
    <div class="tablerowinfo">
      <div class="tlt">商品名称：</div>
      <div class="cnt"><span v-for="Goods in StoreOrder.StoreOrderGoodses">{{Goods.GoodsName}}</span></div>
    </div>
    <div class="tablerowinfo">
      <div class="tlt">订单编号：</div>
      <div class="cnt">{{StoreOrder.Number}}</div>
    </div>

    <div class="bottombar">
        <!-- <button class="btn">撤销申请</button> -->
        <button v-if="StoreOrder.Status=='同意退货'" class="btn danger" @click="goPage('returndeliver')">填写退货信息</button>
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as storeapi from '../../../../api/store'

export default {
  components:{
      'mi-header':header
  },
  data(){
    return{
      StoreOrder:{},
      ReturnAddressInfo:{}
    }
  },
  mounted(){
    this.StoreOrder=JSON.parse(sessionStorage.UserStoreOrder)
    if(this.StoreOrder.Status=='同意退货')
    {
      this.getStoreReturnAddress()
    }
  },
  methods:{
      goPage(page) {
          this.$router.push({ name: page });
      },
      getStoreReturnAddress(){
        let params={
          Id:this.StoreOrder.StoreId
        };
        storeapi.ReturnAddressInfoApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    this.ReturnAddressInfo=res.data.ReturnAddressInfo
                } else {
                    console.log("返回错误码："+res.data.Code);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
      }
  }
}
</script>

<style lang="less" scoped>
.refundtlt{
  border-radius:3px;
  padding:2rem 1rem;
  h3{
    font-weight:400;
    font-size:1.5rem;
    svg{
      width:1.5rem;
      height:1.5rem;
      fill:#096;
    }
  }
}
.refundstep{
  margin:1rem;
  padding:1rem;
  background:#fff2df;
  p{
    padding:0.5rem 0;
  }
}
.tablerowinfo{
  display:flex;
  padding:1.3rem 1rem;
  background:#fff;
  border-bottom:1px solid #eee;
  .tlt{
    width:20%;
  }
  .cnt{
    width:80%;
  }
}
.bottombar{
  position:fixed;
  width:100%;
  border-top:1px solid #eee;
  padding:0.8rem 0;
  bottom:0;
  text-align:right;
  .btn{
    border:0;
    padding:0.8rem 1rem;
    font-size:1.2rem;
    margin-right:1rem;
    border-radius:3px;
    &.danger{
      background:#c03;
      color:#fff;
    }
  }
  
}
</style>


