<template>
  <div>
    <mi-search title="商品列表"></mi-search>
    <div class="sortwp">
      <div class="active">综合</div>
      <div>销量</div>
      <div>新品</div>
    </div>
    <div class="goodsls">
      <div class="item" v-for="(good, index) in goodses" @click="productEvent" :class="{'item2': index % 2 !== 0}">
        <div class="top">
          <img :src="good.imgSrc" />
        </div>
        <div class="bottom">
          <span class="title">{{ good.title }}</span>
          <span class="desc">{{ good.desc }}</span>
          <span class="price">￥{{ good.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from './search.vue';

export default {
  components: {
    'mi-search': search
  },
  data() {
    return {
      goodses: [
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/03d1e94c-b0ed-9a22-70d7-cc6cbd90ec79.webp?width=360&height=360",
          "title": "红米Note 4 移动定制版",
          "desc": "全金属十核旗舰手机",
          "price": 1199
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360",
          "title": "红米4 32G版",
          "desc": "长续航金属千元旗舰手机",
          "price": 899
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/97c2e91e-523e-3988-3abc-aacc824f2737.webp?width=360&height=360",
          "title": "小米手环2",
          "desc": "OLED显示屏，触摸操作",
          "price": 149
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/6f19ca85-2326-8e80-0ecc-16134c33a89b.webp?width=360&height=360",
          "title": "小米净水器（厨下式）",
          "desc": "健康家庭必备",
          "price": 1999
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/22f1a143-59fc-fc88-ced9-4f6edf5f4f6e.webp?width=360&height=360",
          "title": "米家小白智能摄像头",
          "desc": "360度 全景带夜视",
          "price": 399
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp?width=360&height=360",
          "title": "米家恒温电水壶",
          "desc": "一杯水的温度，刚刚好",
          "price": 199
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
          "title": "小米USB充电器",
          "desc": "精致小巧，便携出行",
          "price": 49
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/9f7e141c-87a7-82c6-7170-599504ce2630.webp?width=360&height=360",
          "title": "小米便携鼠标",
          "desc": "轻薄便携，含电池仅重77.5g",
          "price": 99
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/a4c8c780-acbd-23c7-6ae2-f1abe5e5d34d.webp?width=360&height=360",
          "title": "WIFI放大器 2",
          "desc": "速率翻倍 覆盖无忧",
          "price": 49
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/21763033-81c2-8cc5-f012-ae1616059ce9.webp?width=360&height=360",
          "title": "小米移动电源2",
          "desc": "便携轻便，出行无忧",
          "price": 149
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/f935b1a8-92e9-22d6-7c6c-c602b33fd750.webp?width=360&height=360",
          "title": "防雾霾口罩",
          "desc": "PM2.5颗粒物，健康防护",
          "price": 69
        },
        {
          "imgSrc": "https://i8.mifile.cn/v1/a1/1fd7f261-1d68-784e-a1f7-17384d00dc1d.webp?width=360&height=360",
          "title": "小米米家电动滑板车",
          "desc": "便携折叠，自由穿行",
          "price": 1999
        }
      ]
    }
  },
  methods: {
    productEvent() {
      this.$router.push({path:'/goodslist/info'});
    }
  }
}

</script>


<style lang="less" scoped>
.sortwp {
  display: flex;
  background: #fff;
  font-size: 1.3rem;
  >div {
    width: 33.3%;
    padding: 1rem 0;
    text-align: center;
    border-left: 1px solid #eee;
    &:first-child {
      border-left: 0;
    }
  }
  .active {
    color: #096;
    border-bottom: 1px solid #096;
  }
}

.goodsls {
  margin-top: 2rem;
  .item {
    width: 50%;
    margin-bottom: 1rem;
    background: #fff;
    float: left;
    box-sizing: border-box;
    border-right: 0.1rem solid #fff;
    min-height: 25rem;
    font-size: 0;
    .top {
      padding: 1rem;
      img {
        width: 100%;
      }
    }
    .bottom {
      width: 100%;
      display: block;
      padding: 0.5rem 1rem;
      box-sizing: border-box;
      font-size: 1.3rem;
      .title {
        width: 100%;
        display: block;
        line-height: 2.5rem;
      }
      .desc {
        width: 100%;
        display: block;
        color: #666;
        font-size:1rem;
      }
      .price {
        width: 100%;
        display: block;
        font-size: 1.3rem;
        color: #ff601e;
        line-height: 2rem;
      }
    }
  }
  .item2 {
    float: right;
    margin-right: 0;
    border-left: 0.1px solid #eee;
  }
}
</style>


