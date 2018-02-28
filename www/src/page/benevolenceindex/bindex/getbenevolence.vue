<template>
  <div>
    <div class="pd text-md bd-btn">
      平台角色
    </div>
    <div>
      <div class="flexwarp pd bd-btn">
        <div class="wd-15p text-center">
          <svg class="icon icon-lg icon-primary">
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="wd-85p">
          <p class="text-md pd-btn-sm">普通会员</p>
          <p>注册即成为普通会员，购物得福豆，赚收益</p>
        </div>
      </div>
      <div class="flexwarp pd bd-btn">
        <div class="wd-15p text-center">
          <svg class="icon icon-lg icon-danger">
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="wd-85p">
          <p class="text-md pd-btn-sm">VIP会员</p>
          <p>在升级区购物，升级为五福会员，得直推奖、1度2度福豆提成</p>
        </div>
      </div>
      <div class="flexwarp pd bd-btn">
        <div class="wd-15p text-center">
          <svg class="icon icon-lg icon-success">
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="wd-85p">
          <p class="text-md pd-btn-sm">五福经理</p>
          <p>直推10个VIP，团队满60个VIP，升级为五福经理，享50元岗位补贴</p>
        </div>
      </div>
      <div class="flexwarp pd bd-btn">
        <div class="wd-15p text-center">
          <svg class="icon icon-lg">
            <use xlink:href="#consumer"></use>
          </svg>
        </div>
        <div class="wd-85p">
          <p class="text-md pd-btn-sm icon-warning">五福总监</p>
          <p>直推10个经理，团队满60个经理，升级为五福总监，享100元岗位补贴</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(page) {
      this.$router.push({ name: page });
    }
  }
}
</script>

<style lang="less" scoped>

</style>


