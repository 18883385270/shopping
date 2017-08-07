<template>
  <div>
    <div class="storewarp" v-for="store in ordergoods">
      <div class="storetitle">
  
        <div class="title">{{store.storeName}}</div>
      </div>
      <div class="cuxiao">{{store.youhui}}</div>
      <div class="storecontent">
        <div class="goodswarp" v-for="goods in store.goodses">
          <div class="goodsimg">
            <img :src="goods.specificationPic" />
          </div>
          <div class="goodsinfo">
            <p class="goodsname">{{goods.name}}</p>
            <p class="goodsspecification">规格：{{goods.specificationName}}</p>
          </div>
          <div class="buycount">
              <p>
                ￥{{goods.price}}
              </p>
              1件
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordergoods: [
        {
          "storeId": 1,
          "storeName": "公司自营",
          "youhui": "商品满99元(20Kg内)，免运费",
          "goodses": [
            {
              "id": 2,
              "name": "秋林 格瓦斯 1.5L*6发酵饮料 整箱装",
              "specificationName": "1.5L*6 整箱装",
              "specificationId": 1,
              "specificationPic": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
              "stock": 10,
              "price": 37.5,
              "buycount": 1
            },
            {
              "id": 3,
              "name": "哈尔滨红肠",
              "specificationName": "15Kg 3支装",
              "specificationId": 3,
              "specificationPic": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
              "stock": 5,
              "price": 50,
              "buycount": 1
            }
          ]
        },
        {
          "storeId": 2,
          "storeName": "耐克旗舰店（宿迁店）",
          "youhui": "满99元包邮",
          "goodses": [
            {
              "id": 2,
              "name": "耐克新品运动背包 挎包 健身房必备单品",
              "specificationName": "黑色",
              "specificationId": 1,
              "specificationPic": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
              "stock": 10,
              "price": 137.5,
              "buycount": 1
            }
          ]
        }
      ]
    }
  }
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

