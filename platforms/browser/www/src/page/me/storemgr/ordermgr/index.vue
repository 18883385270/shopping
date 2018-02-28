<template>
  <div>
    <mi-header title="订单管理" ></mi-header>
    <mi-category :CurrentIndex="CurrentIndex" :categorys="StoreOrderStatus" @categoryChanged="categoryChangedHandle"></mi-category>
    <div class="divider"></div>
    <div class="pd-topbtn-xlg text-center" v-if="!StoreOrders.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您店铺没有订单</p>
        </div>
    <div class="orderlswarp">
            <div class="orderwarp" v-for="StoreOrder in StoreOrders" :key="StoreOrder.Id" @click="goInfoPage(StoreOrder)">
                <div class="header" @click="goInfoPage(StoreOrder)">
                    <div class="ordernumber">订单号：{{StoreOrder.Number}}</div>
                    <div class="orderstatus">{{StoreOrder.Status}}</div>
                </div>
                <div class="ordgoods" >
                    <div class="storetlt">{{StoreOrder.StoreName}}</div>
                    <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses" :key="Goods.Id">
                        <div class="goodspic">
                            <img :src="Goods.GoodsPic" />
                        </div>
                        <div class="goodstlt">
                            <p class="goodsname">{{Goods.GoodsName}}</p>
                            <p>{{Goods.SpecificationName}} {{Goods.Quantity}}件</p>
                        </div>
                    </div>
                </div>
                <div class="ordertools">
                    <div class="price">总计：<span>{{StoreOrder.Total|currency('￥',2)}}</span></div>
                    <div class="btns">
                        <!-- <button>再次购买</button><button class="del">删除</button> -->
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
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import category from '../../../../components/category.vue';

import * as api from '../../../../api/storeorder'

export default {
  components:{
    'mi-header':header,
    'mi-category': category
  },
  data(){
    return{
      StoreInfo:{},
      StoreOrders:[],
      StoreOrderStatus: ['全部','待发货','已发货','确认收货','退款申请','退货退款','已关闭'],
      StoreOrderStatusValue:['All','Placed','Expressing','Success', 'OnlyRefund','ReturnAndRefund','Closed'],
      StoreInfo:{},
      CurrentIndex:0,
      CurrentPage:1,
      NotAnyMore:false
    }
  },
  mounted(){
    this.StoreInfo=JSON.parse(sessionStorage.StoreInfo)
    this.fetchData(this.CurrentIndex,this.CurrentPage)		
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
        Id:this.StoreInfo.Id,
        Status:this.StoreOrderStatusValue[index],
        Page:page
      };
      api.StoreOrdersApi(params).then(
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
    goInfoPage(order){
        sessionStorage.StoreStoreOrder = JSON.stringify(order)
        this.$router.push({name:'orderinfomgr'})
    },
    NextPage(){
        this.CurrentPage++;
        this.fetchData(this.CurrentIndex,this.CurrentPage);
    }
  }
}
</script>


<style lang="less" scoped>
  .orderlswarp {
    background: #eee;

    .orderwarp {
        background:#fff;
        margin-bottom: 1rem;border-top:1px solid #eee;border-bottom:1px solid #eee;
        .header{
            display:flex;border-bottom:1px solid #eee;
            .ordernumber{
                width:50%;padding:1rem 0;
                text-indent: 1rem;
            }
            .orderstatus{
                width:50%;text-align:right;margin-right:1rem;padding:1rem 0;
            }
        }
        .ordgoods{
            padding:0 1rem;border-bottom:1px solid #eee;
            .storetlt{
                font-size:1.3rem;font-weight:400;padding:1rem 0;
            }
            .goods{
                display:flex;margin-bottom:0.5rem;
                .goodspic{
                    width:20%;
                    img{
                        width:100%;
                    }
                }
                .goodstlt{
                    width:80%;margin-left:1rem;
                    .goodsname{
                        margin-bottom:0.7rem;
                    }
                }
            }
        }
        .ordertools{
            display: flex;
            >div{
                width:50%;
                &.price{
                    font-size:1.2rem;margin-left:1rem;padding:1rem 0;
                    span{
                        color:#c33;font-weight:400;
                    }
                }
                &.btns{
                    padding:0.8rem 0;text-align:right;margin-right:1rem;
                    button{
                        border:0;padding:0.3rem 1rem;margin-left:0.5rem;border-radius:2px;
                        &.del{
                            background:#c33;color:#fff;
                        }
                    }
                }
            }
        }
    }
}
.nextpage{
    text-align:center;
    padding:1rem;
    background:#fff;
}
</style>

