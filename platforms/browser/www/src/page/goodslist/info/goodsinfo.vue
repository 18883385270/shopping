/*
* 商品基本信息
*/
<template>
  <div>
    <div class="goods_info">
      <div class="title">{{ goodsAttr.title }}</div>
      <div class="desc">
        <!-- <span class="tag">【{{ goodsAttr.desc.tag }}】</span> -->
        <span>{{ goodsAttr.desc.sc }}</span>
      </div>
      <div class="price">
        <span class="getbenevonce">购买可得
          {{goodsAttr.price/100}} 善心</span>￥{{ goodsAttr.price }}</div>
      <div class="rangli">
        <div class="tlt"> 让利 15%</div>
        <div class="cnt">商家单倍让利奖励，消费者5倍奖励</div>
      </div>
      <div class="rangli" @click="getTicket">
        <div class="tlt">优惠券</div>
        <div class="cnt">
          <ul>
            <li><span> 满299减30</span></li>
            <li><span> 满599减100</span></li>
          </ul>
        </div>
      </div>
      <div class="goodslable">
        <span><svg><use xlink:href="#ok"></use></svg> 7天退换</span>
        <span><svg><use xlink:href="#ok"></use></svg> 提供发票</span>
        <span><svg><use xlink:href="#ok"></use></svg> 正品保证</span>
      </div>
    </div>
    <div class="attr">
      <div class="attrwarp">
        <div class="attrtlt">颜色</div>
        <div class="attrwp">
          <ul>
            <li :class="{active: index === colorIndex}" v-for="(item, index) in goodsAttr.attr.color" @click="checkColorEvent(index)">{{ item.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="attrwarp">
        <div class="attrtlt">内存</div>
        <div class="attrwp">
          <ul>
            <li :class="{active: index === ramIndex}" v-for="(item, index) in goodsAttr.attr.ram" @click="checkRamEvent(index)">{{ item.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="attrwarp">
        <div class="attrtlt">数量</div>
        <div class="attrwp">
          <mi-buycount :stock="10"></mi-buycount>
        </div>
      </div>
    </div>
    
    <!--弹出框-->
    <mi-popup ref="popup" title="领优惠券" >
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

  </div>
</template>
<script>
import buycount from '../../../components/buycount.vue';
import popup from '../../../components/popup.vue';

export default {
  props: ['goodsAttr'],
  data() {
    return {
      colorIndex: 0,
      ramIndex: 0
    };
  },
  components: {
    'mi-buycount': buycount,
    'mi-popup':popup
  },
  methods: {
    checkColorEvent(num) {
      this.colorIndex = num;
    },
    checkRamEvent(num) {
      this.ramIndex = num;
    },
    submitBuyInfo() {
      var ram = this.goodsAttr.attr.ram[this.ramIndex];
      var color = this.goodsAttr.attr.color[this.colorIndex];
      return { ram: ram, color: color };
    },
    getTicket(){
      this.$refs.popup.modalOpen();
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
  border-top: 0.1rem solid #ddd;
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
      line-height:1rem;
      border: 1px solid #C1272D;
      border-left-width: 0.5rem;
      color: #C1272D;
      padding: 0.3rem 0.5rem;
    }
  }
  .rangli {
    display: flex;
    padding-top: 1rem;
    border-top: 1px dashed #eee;
    margin-top: 1rem;
    .tlt{
      font-size: 1.3rem;width:7rem;
    }
    .cnt{
      font-size: 1rem;margin-left:1rem;
      li{
        list-style: none;display:inline-block;border:1px solid #096;
        padding:0 0.6rem;margin-right:0.8rem;
        span{
          display:block;border-left:1px dashed #096;
          padding:0.3rem 0.5rem;color:#096;
        }
      }
    }
    
  }
  .goodslable{
    border-top:1px dashed #eee;
    padding:1rem 1rem 0 1rem;margin-top:1rem;
    span{
      display:inline-block;margin-right:1rem;color:#999;
      svg{
        width:1rem;height:1rem;fill:#096;
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
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-top: 1rem;
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
          border: 0.1rem solid #eee;
          padding: 0.4rem 1rem;
          margin: 0 0.5rem 1rem 0;
          display: inline-block;
          &.active {
            border: 0.1rem solid #ff5722;
            color: #ff5722;
          }
        }
      }
    }
  }
}

//购物券
.ticketWarp{
  padding:1rem 0;
  li{
    border:1px solid #096;margin:1rem;list-style:none;
    .ticketinfo{
      display: flex;
      .price{
        width:30%;font-size:2rem;color:#096;text-align: center;padding:1rem 0;
      }
      .desc{
        width:50%;font-size:1.3rem;padding:1rem 0;
        p{
          font-weight: 400;margin-bottom:0.5rem;
        }
        div{
          font-size:1.2rem;color:#999;
        }
      }
      .get{
        width:20%;color:#096;line-height:4rem;text-align: center;
      }
    }
    .time{
      background:#096;color:#fff;font-size:1.1rem;padding:0.5rem;
    }
  }
}
</style>
