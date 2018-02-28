<template>
  <div>
      <mi-header title="客服中心"></mi-header>
        <div class="flexwarp pd pd-topbtn-lg bd-btn">
            <div class="wd-25p text-center">
                <svg class="icon-xlg">
                    <use xlink:href="#service"></use>
                </svg>
            </div>
            <div class="wd-50p">
                <p class="text-md pd-btn-sm">人工客服</p>
                <p>电话：0527-88815555</p>
                <p class="text-lightgray">上午 9:00-12:00 下午 13:30-18:00</p>
            </div>
            <div class="wd-25p text-right">
                <!-- <button class="smbtn danger">拨打电话</button> -->
            </div>
        </div>
        <div class="flexwarp pd pd-topbtn-lg bd-btn">
            <div class="wd-25p text-center">
                <svg class="icon-xlg">
                    <use xlink:href="#wechat"></use>
                </svg>
            </div>
            <div class="wd-50p">
                <p class="text-md pd-btn-sm">公众号客服</p>
                <p>公众号：五福天下商城</p>
                <p class="text-lightgray">上午 9:00-12:00 下午 13:30-18:00</p>
            </div>
            <div class="wd-25p text-right">
                <!-- <button class="smbtn danger">去公众号</button> -->
            </div>
        </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
 components:{
     'mi-header':header
 },
 
}
</script>

<style lang="less" scoped>

</style>


