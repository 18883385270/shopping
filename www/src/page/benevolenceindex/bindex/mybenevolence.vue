<template>
  <div class="bg-white flexwarp pd" @click="goPage('benevolence')" v-if="logined">
    <div class="wd-50p">
      <p class="text-md">我的福豆</p>
    </div>
    <div class="wd-50p text-right">
      <p class="text-lightgray text-md">{{this.$store.state.global.walletinfo.Benevolence|currency('',4)}}</p>
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
      this.$router.push({ name: page });
    }
  }
}
</script>

<style lang="less" scoped>

</style>


