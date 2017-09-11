<template>
  <div class="bg-gray" :style="{height:bodyHeight}">
    <mi-header title="选择充值方式"></mi-header>
    <div class="tablerow mg-top20" @click="goPage('/wallet/cash/recharge/onlinerecharge')">
      <div class="tlt">线上充值</div>
      <div class="cnt">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>

    <div class="tablerow" @click="goPage('/pay/offlinepay')">
      <div class="tlt">线下充值</div>
      <div class="cnt">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import * as util from '../../../../../utils/util'

export default {
  components: {
    'mi-header': header
  },
  data() {
    return {
      amount: 0,
      bodyHeight: '100%'
    }
  },
  mounted(){
        this.bodyHeight = util.screenSize().height + 'px';
  },
  methods: {
    goPage(page) {
      this.$router.push({ path: page });
    },

  }
}
</script>

<style lang="less" scoped>
.bg-gray{
  background:#eee;
}
</style>


