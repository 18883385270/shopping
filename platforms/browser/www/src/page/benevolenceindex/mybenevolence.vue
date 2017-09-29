<template>
  <div class="warp" @click="goPage('/wallet/benevolence')" v-if="logined">
    <div class="left">
      我的善心
    </div>
    <div class="right">
      {{this.$store.state.global.walletinfo.Benevolence|currency('',4)}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logined: false
    }
  },
  mounted() {
    this.logined = this.$store.state.global.token.length ? true : false
  },
  methods: {
    goPage(page) {
      this.$router.push({ path: page });
    }
  }
}
</script>

<style lang="less" scoped>
.warp {
  display: flex;
  background: white;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  >div {
    width: 50%;
    padding: 1rem;
    &.left {
      font-size: 1.3rem;
    }
    &.right {
      font-size: 1.3rem;
      text-align: right;
      line-height: 2rem;
      color:#999;
    }
  }
}
</style>


