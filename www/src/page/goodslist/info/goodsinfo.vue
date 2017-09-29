/*
* 商品基本信息
*/
<template>
  <div>
    <div class="goods_info">
      <div class="title">{{ GoodsDetails.Name }}</div>
      <div class="desc">
        <!-- <span class="tag">【{{ goodsAttr.desc.tag }}】</span> -->
      </div>
      <div class="price">
        <span class="getbenevonce">购买可得 {{SelectedSpecification.Benevolence*BuyCount | currency('',2)}} 善心</span>{{ SelectedSpecification.Price|currency('￥',2) }}</div>
      <div class="rangli" @click="getTicket" v-if="false">
        <div class="tlt">优惠券</div>
        <div class="cnt">
          <ul>
            <li>
              <span> 满299减30</span>
            </li>
            <li>
              <span> 满599减100</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="goodslable">
        <span v-if="GoodsDetails.Is7SalesReturn">
          <svg>
            <use xlink:href="#ok"></use>
          </svg> 7天退换</span>
        <span v-if="GoodsDetails.IsInvoice">
          <svg>
            <use xlink:href="#ok"></use>
          </svg> 提供发票</span>
        <span v-if="GoodsDetails.IsPayOnDelivery">
          <svg>
            <use xlink:href="#ok"></use>
          </svg> 货到付款</span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="attr">
      <div class="attrwarp" v-for="(SpecificationName,specificationIndex) in SpecificationNames">
        <div class="attrtlt">{{SpecificationName}}</div>
        <div class="attrwp">
          <ul>
            <li :class="{active: index == SelectedIndex[specificationIndex]}" v-for="(item, index) in SpecificationItems[specificationIndex]" @click="checkSpecificationEvent(index,specificationIndex)">{{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="buycountwarp">
        <div class="attrtlt">数量</div>
        <div class="attrwp">
          <mi-buycount v-model="BuyCount" :stock="SelectedSpecification.AvailableQuantity"></mi-buycount>
        </div>
        <div class="stocklf">库存：{{SelectedSpecification.AvailableQuantity}}</div>
      </div>
    </div>
    
    <!--购物券弹出框-->
    <mi-popup ref="popup" title="领优惠券">
      <div slot="modalbody" class="ticketWarp">
        <ul>
          <li>
            <div class="ticketinfo">
              <div class="price">￥30</div>
              <div class="desc">
                <p>满39元可用</p>
                <div>仅可购买耐克专营店商品</div>
              </div>
              <div class="get">已领取</div>
            </div>
            <div class="time">
              有效期值：2017-7-20-2017-8-30
            </div>
          </li>
          <li>
            <div class="ticketinfo">
              <div class="price">￥30</div>
              <div class="desc">
                <p>满39元可用</p>
                <div>仅可购买耐克专营店商品</div>
              </div>
              <div class="get">已领取</div>
            </div>
            <div class="time">
              有效期值：2017-7-20-2017-8-30
            </div>
          </li>
        </ul>
      </div>
    </mi-popup>
    <div class="unpubtip" v-if="!GoodsDetails.IsPublished ||GoodsDetails.Status!='Verifyed'">
      该商品未审核或已下柜，非常抱歉~
    </div>
    <!--底部工具栏-->
    <div class="btnbar">
      <div class="store" @click="goStorePage">
        <svg>
          <use xlink:href="#store"></use>
        </svg>
        店铺
      </div>
      <div class="store bdlf" @click="goPage('/cart')">
        <svg>
          <use xlink:href="#cart"></use>
        </svg>
        购物车
      </div>
      <div class="cart">
        <button @click="addCartEvent" :disabled="!canBuy || !GoodsDetails.IsPublished ||GoodsDetails.Status!='Verifyed'">加入购物车</button></div>
      <div class="buy">
         <button @click="buyEvent"  :disabled="!canBuy || !GoodsDetails.IsPublished ||GoodsDetails.Status!='Verifyed'">立即购买</button>
      </div>
      <mi-toast ref="toast"></mi-toast>
    </div>
  </div>
</template>
<script>
import buycount from '../../../components/buycount.vue';
import * as cartapi from '../../../api/cart'
import popup from '../../../components/popup.vue';
import toast from '../../../components/toast.vue'
import * as checkJs from '../../../utils/pubfunc'

export default {
  props: ['GoodsDetails'],
  components: {
    'mi-buycount': buycount,
    'mi-popup': popup,
    'mi-toast': toast
  },
  data() {
    return {
      SelectedIndex: [],
      SelectedValue: [],
      SelectedSpecification: {},
      MyGoodsDetail: this.GoodsDetails,
      SpecificationNames: [],
      SpecificationItems: [],
      BuyCount: 1,
      canBuy:true
    }
  },
  watch: {
    GoodsDetails(val) {
      this.MyGoodsDetail = val;
      this.GetSpecifications();
    }
  },
  methods: {
    GetSpecifications() {
      //加工规格
      //数组去重过程
      let unique = (sourceArray) => {
        var res = [];
        var json = {};
        for (var i = 0; i < sourceArray.length; i++) {
          if (!json[sourceArray[i]]) {
            res.push(sourceArray[i]);
            json[sourceArray[i]] = 1;
          }
        }
        return res;
      };

      if (this.MyGoodsDetail.Specifications.length) {
        var names = this.MyGoodsDetail.Specifications[0].Name.split(',');

        this.SpecificationNames = names;
        var specificationitem = [];
        var specitems = [];

        //初始化选择的规格
        this.SelectedSpecification = this.MyGoodsDetail.Specifications[0];
        this.canBuy=this.SelectedSpecification.AvailableQuantity>0? true:false;
        
        //便利列
        for (var i = 0; i < names.length; i++) {
          //初始化先择数组
          this.SelectedIndex.splice(i, 1, 0);

          for (var j = 0; j < this.MyGoodsDetail.Specifications.length; j++) {
            var specificationvalues = this.MyGoodsDetail.Specifications[j].Value.split(',');
            specitems.push(specificationvalues[i]);
          }
          specificationitem.push(unique(specitems));

          //初始化选择值数组
          var val = specitems[0];
          this.SelectedValue.splice(i, 1, val);


          specitems = [];
        }
        this.SpecificationItems = specificationitem;


      }
      else
      {
        this.canBuy=false
      }
    },
    checkSpecificationEvent(index, specificationindex) {
      //直接通过数组索引设置数组不会引发更新
      this.SelectedIndex.splice(specificationindex, 1, index);
      var val = this.SpecificationItems[specificationindex][index];
      this.SelectedValue.splice(specificationindex, 1, val);
      //更新规格的价格和库存信息
      var specification = {};
      for (var i = 0; i < this.MyGoodsDetail.Specifications.length; i++) {
        if (this.MyGoodsDetail.Specifications[i].Value == this.SelectedValue.join(',')) {
          specification = this.MyGoodsDetail.Specifications[i];
        }
      }
      this.SelectedSpecification = specification;
      this.canBuy=this.SelectedSpecification.AvailableQuantity>0? true:false;
    },
    getTicket() {
      this.$refs.popup.modalOpen();
    },
    goPage(page) {
      this.$router.replace({ path: page });
    },
    goStorePage() {
      sessionStorage.StoreId = this.GoodsDetails.StoreId
      this.$router.push({ name: 'store' })
    },
    addCartEvent() {
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      //判断是否登录
      if(checkJs.isNullOrEmpty(this.$store.state.global.token)){
        alertFuc('您似乎还没登录，请登录后操作')
        return false
      }
      let params = {
        GoodsId: this.GoodsDetails.Id,
        StoreId: this.GoodsDetails.StoreId,
        SpecificationId: this.SelectedSpecification.Id,
        GoodsName: this.GoodsDetails.Name,
        GoodsPic: this.SelectedSpecification.Thumb,
        SpecificationName: this.SelectedSpecification.Value,
        Price: this.SelectedSpecification.Price,
        OriginalPrice: this.SelectedSpecification.OriginalPrice,
        Quantity: this.BuyCount,
        Stock: this.SelectedSpecification.AvailableQuantity,
        Benevolence: this.SelectedSpecification.Benevolence
      };
      cartapi.AddCartGoodsApi(params).then(
        res => {
          if (res.data.Code == 200) {
            alertFuc("加入购物车成功");
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    },
    buyEvent() {
      //立即购买，直接提交数据到提交订单页
      var storecartgoodses = [];
      storecartgoodses.push({
        StoreId: this.GoodsDetails.StoreId,
        StoreName: '',
        CartGoodses: [{
          StoreId: this.GoodsDetails.StoreId,
          GoodsId: this.GoodsDetails.Id,
          SpecificationId: this.SelectedSpecification.Id,
          GoodsName: this.GoodsDetails.Name,
          GoodsPic: this.SelectedSpecification.Thumb,
          SpecificationName: this.SelectedSpecification.Value,
          Price: this.SelectedSpecification.Price,
          OriginalPrice: this.SelectedSpecification.OriginalPrice,
          Quantity: this.BuyCount,
          Benevolence: this.SelectedSpecification.Benevolence
        }]
      });
      sessionStorage.StoreCartGoods = JSON.stringify(storecartgoodses)
      this.$router.push({ name: 'postorder' });
    }
  }
};
</script>

<style lang="less" scoped>
.goods_info {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 1rem;
  border-top: 1px solid #eee;
  border-bottom:1px solid #eee;
  .title {
    line-height: 2.5rem;
    font-size: 1.3rem;
  }
  .price {
    font-size: 1.5rem;
    color: #C1272D;
    line-height: 2.5rem;
    padding-top: 0.6rem;
    .getbenevonce {
      float: right;
      font-size: 1rem;
      line-height: 1rem;
      border: 1px solid #C1272D;
      border-left-width: 0.5rem;
      color: #C1272D;
      padding: 0.3rem 0.5rem;
    }
  }
  .rangli {
    display: flex;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    margin-top: 1rem;
    .tlt {
      font-size: 1.3rem;
      width: 7rem;
    }
    .cnt {
      font-size: 1rem;
      margin-left: 1rem;
      li {
        list-style: none;
        display: inline-block;
        border: 1px solid #096;
        padding: 0 0.6rem;
        margin-right: 0.8rem;
        span {
          display: block;
          border-left: 1px dashed #096;
          padding: 0.3rem 0.5rem;
          color: #096;
        }
      }
    }
  }
  .goodslable {
    border-top: 1px dashed #eee;
    padding: 1rem 1rem 0 1rem;
    margin-top: 1rem;
    span {
      display: inline-block;
      margin-right: 1rem;
      color: #999;
      svg {
        width: 1rem;
        height: 1rem;
        fill: #096;
      }
    }
  }

  .desc {
    color: #999;
    font-size: 1rem;
    .tag {
      color: #FF5722;
    }
  }
}

.attr {
  background: #fff;
  width: 100%;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  .attrwarp {
    display: flex;
    .attrtlt {
      width: 20%;
      font-size: 1.2rem;
      color: #999;
      text-align: center;
      padding-top: 0.6rem;
    }
    .attrwp {
      width: 80%;
      ul {
        width: 100%;
        padding: 0;
        margin: 0;
        li {
          list-style-type: none;
          font-size: 1rem;
          border: 1px solid #eee;
          padding: 0.4rem 1rem;
          margin: 0 0.5rem 1rem 0;
          display: inline-block;
          &.active {
            border-color:#c03;
            color: #c03;
          }
        }
      }
    }
  }
  .buycountwarp {
    display: flex;
    .attrtlt {
      width: 20%;
      font-size: 1.2rem;
      color: #999;
      text-align: center;
      padding-top: 0.6rem;
    }
    .attrwp {
      width: 30%;
    }
    .stocklf{
      width:50%;
      padding-top:0.5rem;
      color:#666;
    }
  }
}

//购物券
.ticketWarp {
  padding: 1rem 0;
  li {
    border: 1px solid #096;
    margin: 1rem;
    list-style: none;
    .ticketinfo {
      display: flex;
      .price {
        width: 30%;
        font-size: 2rem;
        color: #096;
        text-align: center;
        padding: 1rem 0;
      }
      .desc {
        width: 50%;
        font-size: 1.3rem;
        padding: 1rem 0;
        p {
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        div {
          font-size: 1.2rem;
          color: #999;
        }
      }
      .get {
        width: 20%;
        color: #096;
        line-height: 4rem;
        text-align: center;
      }
    }
    .time {
      background: #096;
      color: #fff;
      font-size: 1.1rem;
      padding: 0.5rem;
    }
  }
}
.unpubtip{
  width: 100%;
  background: #c03;
  position: fixed;
  bottom: 4rem;
  left: 0;
  color:#fff;
  padding:1rem;
  text-align:center;
}
.btnbar {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 4rem;
  border-top: 1px solid #eee;
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
      button{
        border:0;
        color:#fff;
        width:100%;
        height:100%;
        background: #f66;
        font-size: 1.3rem;
        &:disabled{
          background:#ccc;
        }
      }
    }
    &.buy {
      width: 35%;
      color: #fff;
      text-align: center;
      button{
        border:0;
        color:#fff;
        width:100%;
        height:100%;
        background: #c03;
        font-size: 1.3rem;
        &:disabled{
          background:#ccc;
        }
      }
    }
  }
}
</style>
