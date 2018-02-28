
<template>
  <div class="ordspage">
      <mi-header title="我的订单"></mi-header>
      <mi-category :CurrentIndex="CurrentIndex" :categorys="StoreOrderStatus" @categoryChanged="categoryChangedHandle"></mi-category>
      
        <div class="pd-topbtn-xlg text-center" v-if="!StoreOrders.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有订单，去逛逛吧</p>
        </div>
        <div>
            <div class="bd-topbtn" v-for="StoreOrder in StoreOrders" :key="StoreOrder.Id">
                <div class="divider"></div>
                <div class="header flexwarp pd" :class="{placed:StoreOrder.Status=='待发货',comfirmexpress:StoreOrder.Status=='确认收货',closed:StoreOrder.Status=='已关闭'}" @click="goInfoPage(StoreOrder)">
                    <div class="wd-50p">订单号：{{StoreOrder.Number}}</div>
                    <div class="wd-50p text-right text-danger">{{StoreOrder.Status}}</div>
                </div>
                <div class="pd bd-btn bg-xlightgray" @click="goInfoPage(StoreOrder)">
                    <div class="flexwarp marg-btn-sm" v-for="Goods in StoreOrder.StoreOrderGoodses" :key="Goods.Id">
                        <div class="wd-20p">
                            <img class="wd-100p img-round" :src="Goods.GoodsPic" />
                        </div>
                        <div class="wd-80p marg-lf">
                            <p class="goodsname">{{Goods.GoodsName}}</p>
                            <p class="text-gray pd-top">{{Goods.SpecificationName}} {{Goods.Quantity}}件</p>
                        </div>
                    </div>
                </div>
                <div class="flexwarp pd">
                    <div class="wd-50p">总计：<span>{{StoreOrder.Total|currency('￥',0)}}</span> (免运费)
                    </div>
                    <div class="wd-50p text-right">
                        <button class="smbtn" v-if="StoreOrder.Status=='已发货' || StoreOrder.Status=='确认收货'" @click="viewExpress(StoreOrder)">查看物流</button>
                        <button class="smbtn" v-if="StoreOrder.Status=='仅退款'" @click="viewRefund(StoreOrder)">退款信息</button>
                        <button class="smbtn" v-if="StoreOrder.Status=='退货退款'" @click="viewReturnAndRefund(StoreOrder)">退货信息</button>
                        <button class="smbtn danger" v-if="StoreOrder.Status=='已关闭'"  @click="delOrder(StoreOrder)">删除订单</button>
                    </div>
                </div>
            </div>
            <div class="nextpage" @click="NextPage" v-if="!NotAnyMore">
                <span>加载更多</span>
            </div>
            <div class="nextpage" @click="NextPage" v-if="NotAnyMore">
                <span>没有更多了</span>
            </div>
        </div>
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="ConfirmDeleteOrder">
            <div slot="confirm" class="confirm">
                <p class="tlt">确认删除订单？</p>
                <p>删除之后，您将无法继续查看该订单</p>
            </div>
        </mi-modal>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import modal from '../../../components/modal.vue'
import category from '../../../components/category.vue'
import * as api from '../../../api/storeorder'
import * as checkJs from '../../../utils/pubfunc'

export default {
  components:{
      'mi-header':header,
      'mi-category':category,
      'mi-modal': modal
  },
  data(){
    return {
      StoreOrderStatus:['全部','待发货','待收货','待评价','退款中','退货退款','完成'],
      StoreOrderStatusValue:['All','Placed', 'Expressing','Success','OnlyRefund','ReturnAndRefund','Closed'],
      StoreOrders:[],
      CurrentIndex:0,
      CurrentPage:1,
      NotAnyMore:false,
      CurrentOrder:{}
    }
  },
  mounted(){
    if(!checkJs.isNullOrEmpty(sessionStorage.MyOrderStatusIndex)){
        this.CurrentIndex=sessionStorage.MyOrderStatusIndex
    }
    this.fetchData(this.CurrentIndex,this.CurrentPage);
  },
  methods:{
    categoryChangedHandle(index){
        this.CurrentIndex=index;
        this.CurrentPage=1;
        this.NotAnyMore=false;
        this.StoreOrders.splice(0,this.StoreOrders.length);//清空数据
        this.fetchData(this.CurrentIndex,this.CurrentPage);
    },
    fetchData(index,page){
        let params = {
            Status:this.StoreOrderStatusValue[index],
            Page:page
        };
        api.UserOrdersApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    if(res.data.StoreOrders.length){
                        this.StoreOrders=this.StoreOrders.concat(res.data.StoreOrders);
                    }
                    else{
                        this.NotAnyMore=true;
                    }
                } else {
                    console.log(res.data.Message);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    goInfoPage(order) {
        //要传递的订单信息存到sessionStorage
        sessionStorage.UserStoreOrder = JSON.stringify(order)
        this.$router.push({ name: 'orderinfo' })
    },
    delOrder(order){
        this.CurrentOrder=order
        this.$refs.confirm.modalOpen();
    },
    viewExpress(order){
        sessionStorage.UserStoreOrder = JSON.stringify(order)
        this.$router.push({ name: 'expressinfo' })
    },
    viewRefund(order){
        sessionStorage.UserStoreOrder = JSON.stringify(order)
        this.$router.push({ name: 'refundinfo' })
    },
    viewReturnAndRefund(order){
        sessionStorage.UserStoreOrder = JSON.stringify(order)
        this.$router.push({ name: 'returnandrefundinfo' })
    },
    ConfirmDeleteOrder(num){
        if(num==0){
            return
        }
        let params = {
            Id:this.CurrentOrder.Id
        };
        //删除本地订单
        let removeData=(order)=>{
            for(var i=0; i<this.StoreOrders.length; i++) {
                if(this.StoreOrders[i].Id == order.Id) {
                    this.StoreOrders.splice(i, 1);
                    break;
                }
            }
        }

        api.DeleteApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    removeData(this.CurrentOrder)
                } else {
                    console.log(res.data.Message);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    NextPage(){
        this.CurrentPage++;
        this.fetchData(this.CurrentIndex,this.CurrentPage);
    }
  }
}
</script>

<style lang="less" scoped>
 
    .header {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        &.placed{
            border-top-color:#f66;
        }
        &.closed{
            border-top-color:#333;
        }
        &.comfirmexpress{
            border-top-color:#096;
        }
        
    }
    
            &.price {
                font-size: 1rem;
                margin-left: 1rem;
                padding: 1rem 0;
                span {
                    font-size:1.2rem;
                }
            }
            &.btns {
                padding: 0.8rem 0;
                text-align: right;
                margin-right: 1rem;
                button {
                    border: 1px solid #eee;
                    padding: 0.3rem 1rem;
                    margin-left: 0.5rem;
                    border-radius: 2px;
                    background:#fff;
                    color:#666;
                    &.del {
                        background: #c33;
                        color: #fff;
                    }
                }
            }
    
.confirm{
    font-size:1.3rem;
    .tlt{
        border-bottom:0.05rem solid #ccc;
        text-align:center;
        padding-bottom:1rem;
        margin-bottom:1rem;
    }
}
.nextpage{
    text-align:center;
    padding:1rem;
    background:#fff;
}
</style>

