<template>
  <div>
      <div class="downloadpersent">
        <span class="zhishiqi" :style="{width:persent+'%'}"></span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      persent:{
          type:Number,
          default:0
      }
  }
}
</script>

<style lang="less" scoped>
.downloadpersent{
    background:#eee;
    height:4px;
    position: relative;
    vertical-align: middle;
    .zhishiqi{
      position: absolute;
      left: 0;
      top: 0;
      display:inline-block;
      background:red;
      height:100%;
      width:0;
    }
  }
</style>


