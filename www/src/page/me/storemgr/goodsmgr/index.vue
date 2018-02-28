<template>
  <div>
    <mi-header title="商品管理"></mi-header>
    <div class="pd-topbtn-xlg text-center">
        <svg class="icon-xxxlg">
            <use xlink:href="#onlineshop"></use>
        </svg>
    </div>
    
    <div class="text-center">
      管理商品请用电脑登录：store.wftx666.com
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as api from '../../../../api/goods'

export default {
  components: {
    'mi-header': header
  },
  
}
</script>


<style lang="less" scoped>

</style>

