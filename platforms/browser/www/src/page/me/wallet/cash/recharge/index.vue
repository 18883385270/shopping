<template>
  <div>
    <mi-header title="选择充值方式"></mi-header>
    <div class="divider"></div>
    <div class="tablerow" @click="goPage('onlinerechareg')">
      <div class="tlt">线上充值</div>
      <div class="cnt">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>

    <div class="tablerow" @click="goPage('offlinepay')">
      <div class="tlt">线下充值</div>
      <div class="cnt">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
    <div class="divider"></div>
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
    }
  },
  methods: {
    goPage(page) {
      this.$router.push({ name: page });
    },
  }
}
</script>

<style lang="less" scoped>

</style>


