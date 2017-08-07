<template>
  <div>
    <mi-header title="我的地址"></mi-header>
    <div class="addressls">
      <div class="addwarp">
        <div class="cnt">
          <p>山东 日照 东港区 巨鹿路516弄3号3楼</p>
          <p>夏兆伟 135****2764</p>
        </div>
        <div class="ops">
          <svg>
            <use xlink:href="#delline"></use>
          </svg>
        </div>
      </div>
      <div class="addwarp">
        <div class="cnt">
          <p>山东 日照 东港区 巨鹿路516弄3号3楼</p>
          <p>夏兆伟 135****2764</p>
        </div>
        <div class="ops">
          <svg>
            <use xlink:href="#delline"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="addaddress">
      + 添加地址
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue';

export default {
  components: {
    'mi-header': header
  }
}
</script>

<style lang="less" scoped>
.addressls {
  padding: 1rem;
  .addwarp {
    display: flex;
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
    .cnt {
      width: 80%;
      padding: 1rem 0;
    }
    .ops {
      width: 20%;
      padding: 0.5rem;
      text-align: right;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: #666;margin-top:0.5rem;
      }
    }
  }
}

.addaddress {
  margin:1rem;
  background: #fff;
  border: 1px dashed #ddd;
  text-align: center;
  padding:1.3rem;font-size:1.3rem;
}
</style>

