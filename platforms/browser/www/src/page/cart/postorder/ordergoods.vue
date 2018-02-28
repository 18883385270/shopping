<template>
  <div>
    <div v-for="store in StoreCartGoods" :key="store.Id">
      <div class="divider"></div>
      <div class="pd-topbtn bd-btn">
        <div class="text-lg pd-lf">{{store.StoreName}}</div>
      </div>
      <div>
        <div class="flexwarp pd-topbtn" v-for="goods in store.CartGoodses" :key="goods.GoodsId">
          <div class="wd-20p pd-lf text-center">
            <img class="wd-100p img-round" :src="goods.GoodsPic" />
          </div>
          <div class="wd-60p pd-lf">
            <p class="pd-rt">{{goods.GoodsName}}</p>
            <p class="mg-top-sm text-lightgray">规格：{{goods.SpecificationName}}</p>
          </div>
          <div class="wd-20p text-center">
            <p class="text-danger text-md pd-rt">
              {{goods.Price|currency('￥',2)}}
            </p>
            {{goods.Quantity}}件
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['StoreCartGoods']

}
</script>


<style lang="less" scoped>

</style>

