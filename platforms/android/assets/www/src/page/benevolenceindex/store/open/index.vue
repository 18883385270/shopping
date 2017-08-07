/*
申请开店
用户必须是传递使者才能开店
 */
<template>
  <div>
    <mi-header title="申请开店"></mi-header>
    <div class="tablerow">
      <div class="tlt">店铺名称</div>
      <div class="cnt">
        <input type="text" placeholder="请输入店铺名称" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">地区</div>
      <div class="cnt" @click="selectRegion">
        江苏 宿迁
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">详细地址</div>
      <div class="cnt">
        <input type="text" placeholder="详细地址精确到门牌号" />
      </div>
    </div>
    <div class="btnwarp">
      <p>
        <label>
          <input type="checkbox" v-model="isaccept"> 我已阅读并同意</label>
        <span @click="openXieyi">《店铺入驻协议》</span>
      </p>
      <button v-bind="{disabled:!isaccept}">提交申请</button>
    </div>
  
    <!--弹出框-->
    <mi-modal ref="xieyiModal" type="pop" :isHeadShow="true" :isfullscreen="true" title="协议">
      <div slot="modalbody" class="xieyiWarp">
        <p>颜色搭配常识： 1.网页中色彩的表达使用三种颜色，及红(R)、绿(G)、蓝(B)，及通常所说的RGB色彩，它包含了人类所感知的所有颜色，网页中表达颜色如下（红色为例）RGB格式：红色是(255,0,0) 或十六进制hex格式为(FF0000)。 2.将色彩按"红->黄->绿->蓝->红"依次过度渐变可得到12色环：红，橙红，橙，橙黄，黄，黄绿，绿，蓝绿，蓝，蓝紫，紫，紫红。 3.颜色分非彩色和彩色两类。非彩色是指黑，白，灰系统色。彩色是指除了非彩色以外的所有色彩。通常内容文字用非彩色(黑色)，边框，背景，图片用彩色。所以即使页面丰富，看内容依然不会眼花,通常背景与内容对比要大。
        </p>
      </div>
    </mi-modal>
  
  </div>
</template>

<script>
import header from '../../../../components/header.vue';
import modal from '../../../../components/modal.vue';

export default {
  components: {
    'mi-header': header,
    'mi-modal': modal
  },
  data(){
    return{
      isaccept:true
    }
  },
  methods: {
    selectRegion() {
      this.$router.push({ path: '/regionselect' });
    },
    openXieyi() {
      this.$refs.xieyiModal.modalOpen();
    }
  }
}
</script>

<style lang="less" scoped>
.tablerow {
  width: 100%;
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
  align-items: center;
  .tlt {
    width: 25%;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 1.2rem 0;
    text-indent: 1rem;
    vertical-align: center;
  }
  .cnt {
    width: 75%;
    text-align: right;
    padding: 1.2rem 0;
    margin-right: 1rem;
    font-size: 1.3rem;
    input {
      width: 100%;
      border: 0;
      font-size: 1.4rem;
      padding: 0.6rem 0;
      &:focus {
        outline: none;
      }
    }
  }
}

.mg-top20 {
  margin-top: 1rem;
}

.btnwarp {
  padding: 1rem;
  background: #fff;
  p {
    font-size: 1.3rem;
    padding: 0.5rem 0 1rem 0;
    span {
      color: blue;
    }
  }
  button {
    width: 100%;
    padding: 1.2rem 0;
    background: #9c6;
    border: 0;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 3px;
    &:disabled{
      background:#ccc;
    }
  }
}

.xieyiWarp {
  height:100%;overflow-y: scroll;
  font-size: 1.3rem;
  padding: 1rem;
}
</style>


