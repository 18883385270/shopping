<template>
  <div class="warp">
    <div class="head">
      <div class="title">平台角色</div>
    </div>
    <div class="body">
      <div class="item" @click="goPage('/bindex/consumer')">
        <div class="icon_warp">
          <svg>
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="content_warp">
          <h3>善心使者</h3>
          <p>注册即成为善心使者，购物得善心，赚收益</p>
        </div>
        <div class="open_warp ok" v-if="this.$store.state.global.token.length">
          <svg>
            <use xlink:href="#ok"></use>
          </svg>已加入</div>
      </div>
      <div class="item" @click="goPage('/bindex/passer')">
        <div class="icon_warp">
          <svg>
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="content_warp">
          <h3>传递使者</h3>
          <p>消费满100元或者推荐10个善心使者，即可成为传递使者</p>
        </div>
        <div class="open_warp ok" v-if="this.$store.state.global.userinfo.Role=='传递使者'">
          <svg>
            <use xlink:href="#ok"></use>
          </svg>已加入</div>
      </div>
      <div class="item" @click="goPage('/bindex/ambassador')">
        <div class="icon_warp">
          <svg>
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="content_warp">
          <h3>商城店主</h3>
          <p>缴纳1万元年费即可成为店主，开通商城销售商品</p>
        </div>
        <div class="open_warp ok" v-if="this.$store.state.global.userinfo.Role=='店主'">
          <svg>
            <use xlink:href="#ok"></use>
          </svg>已加入</div>
      </div>
      <!-- <div class="item" @click="goPage('/bindex/regionpartner')">
        <div class="icon_warp">
          <svg>
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="content_warp">
          <h3>善心联盟</h3>
          <p>善心大使可申请成为区域合伙人，享有所在区域的顾客消费激励</p>
        </div>
        <div class="open_warp">
        </div>
      </div> -->
      <div class="item" @click="goPage('/bindex/storeowner')">
        <div class="icon_warp">
          <svg>
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="content_warp">
          <h3>加盟商家</h3>
          <p>认同我们的事业，加盟合作商家，提供产品销售，销售产品即可获得善心激励</p>
        </div>
        <div class="open_warp ok" v-if="this.$store.state.global.userinfo.StoreId">
          <svg>
            <use xlink:href="#ok"></use>
          </svg>已加入</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(page) {
      this.$router.push({ path: page });
    }
  }
}
</script>

<style lang="less" scoped>
.warp {
  padding: 0;
  background: white;
  border-top: 1px solid #eee;
  .head {
    border-bottom: 1px solid #eee;
    display: flex;
    width: 100%;
    .title {
      font-size: 1.3rem;
      line-height: 2rem;
      width: 50%;
      padding: 1rem;
    }
  }
  .body {
    width: 100%;
    .item {
      display: flex;
      border-bottom: 1px solid #eee;
      .icon_warp {
        padding: 1.5rem;width:10%;
        svg {
          width: 2.5rem;
          height: 2.5rem;
          fill: #c66;
        }
      }
      
      .content_warp {
        width: 70%;
        padding-top: 1rem;
        h3 {
          font-size: 1.3rem;
          font-weight: 400;padding-bottom:0.3rem;
        }
        p {
          padding-bottom: 1rem;
        }
      }
      .open_warp {
        padding: 2rem 0;width:20%;
        text-align: center;
        svg {
          display: block;
          width: 1.3rem;
          height: 1.3rem;
          margin: auto;
          fill: green;
        }
      }
      .ok{
        color:green;
      }
    }
  }
}
</style>


