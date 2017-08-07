<template>
  <div class="warp"  @click="goPage('/wallet/benevolence')">
    <div class="left">
      我的善心
    </div>
    <div class="right">
      12.355
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goPage(page){
      this.$router.push({path:page});
    }
  }
}
</script>

<style lang="less" scoped>
  .warp{
    margin-top:1.6rem;
    display: flex;background:white;border-top:1px solid #ddd;border-bottom:1px solid #ddd;
    >div{
      width:50%;padding:1rem;
      &.left{
        font-size:1.3rem;
      }
      &.right{
        font-size:1rem;text-align: right;
        line-height: 2rem;
      }
    }
  }
</style>


