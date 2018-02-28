<template>
  <div>
    <mi-header title="退款信息"></mi-header>
    <div class="refundtlt">
      <h3 v-if="StoreOrder.Status=='仅退款'">等待卖家处理</h3>
      <h3 v-if="StoreOrder.Status=='已关闭'">
        <svg>
          <use xlink:href="#ok"></use>
        </svg>
        已退款，款项已退回您账户余额
      </h3>
    </div>
    <div class="divider"></div>
    <div class="tablerowinfo">
      <div class="tlt">退款类型：</div>
      <div class="cnt">仅退款</div>
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
        <!-- <button v-if="StoreOrder.Status=='仅退款'" class="btn">撤销申请</button> -->
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'

export default {
  components:{
      'mi-header':header
  },
  data(){
    return{
      StoreOrder:{}
    }
  },
  mounted(){
    this.StoreOrder=JSON.parse(sessionStorage.UserStoreOrder)
  },
  methods:{
     
  }
}
</script>

<style lang="less" scoped>
.refundtlt{
  text-align:center;
  margin:1rem;
  border-radius:3px;
  padding:2rem 1.5rem;
  background:#fff2df;
  h3{
    font-weight:200;
    font-size:1.5rem;
    svg{
      width:1.5rem;
      height:1.5rem;
      fill:#096;
    }
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


