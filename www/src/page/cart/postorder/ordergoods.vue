<template>
  <div>
    <div class="storewarp" v-for="store in StoreCartGoods">
      <div class="storetitle">
  
        <div class="title">{{store.StoreName}}</div>
      </div>
      <div class="cuxiao">优惠信息</div>
      <div class="storecontent">
        <div class="goodswarp" v-for="goods in store.CartGoodses">
          <div class="goodsimg">
            <img :src="goods.GoodsPic" />
          </div>
          <div class="goodsinfo">
            <p class="goodsname">{{goods.GoodsName}}</p>
            <p class="goodsspecification">规格：{{goods.SpecificationName}}</p>
          </div>
          <div class="buycount">
              <p>
                {{goods.Price|currency('￥',2)}}
              </p>
              {{goods.Quantity}}件
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['StoreCartGoods']
  
}
</script>


<style lang="less" scoped>
.storewarp {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #fff;
  margin-top: 1rem;
  .storetitle {
    font-size: 1.3rem;text-indent: 1rem;
    padding: 1rem 0;
    display: flex;
    .checkbar {
      width: 10%;
      text-align: center;
    }
    .title {
      width: 90%;
    }
  }
  .cuxiao {
    line-height: 1.4rem;
    border-top: 1px solid #eee;
    padding: 1rem;
  }
  .storecontent {
    .goodswarp {
      display: flex;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #eee;
      
      .goodsimg {
        width: 20%;
        text-align: center;padding-left:1rem;
        img {
          width: 100%;
        }
      }
      .goodsinfo {
        width: 60%;
        padding-left: 1rem;
        .goodsname {
        }
        .goodsspecification {
          margin-top: 0.5rem;
          color: #666;
        }
        .goodsprice {
          color: #C1272D;
          font-size: 1.3rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          span {
            font-size: 1rem;
            color: #666;
          }
        }
        
      }
      .buycount {
          width:20%;
          text-align: center;
          p{
            color:#C1272D;font-weight: 400;font-size:1.3rem;
          }
        }
    }
  }
}
</style>

