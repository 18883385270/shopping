<template>
  <header>
    <div class="head_bar">
      <div class="left" @click="backEvent">
        <svg>
          <use xlink:href="#leftarrowsline"></use>
        </svg></div>
      <div class="center">
        <span>{{title}}</span>
      </div>
      <div class="right">
        <p @click="rightClick">{{rightext}}</p>
      </div>
    </div>
    <div style="height:4rem;"></div>
  </header>
</template>

<script>
export default {
  props: ['title','rightext'],
  methods: {
    backEvent() {
      this.$router.go(-1);
    },
    rightClick(){
      this.$emit('rightNavBarClicked');
    }
  }
}
</script>

<style lang="less" scoped>
.head_bar {
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom:1px solid #ddd;
  color: #000;
  z-index:10000;
  .left {
    width: 30%;
    line-height: 3.7rem;
    font-size: 1.4rem;
    color: #999;
    svg {
      width: 2rem;height:1.5rem;
      margin-left: 0.5rem;
      margin-top: 1.1rem;
      fill: #999;float:left;
    }
  }
  .center {
    width: 40%;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    span {
      display: inline-block;
      width: 100%;
      line-height: 3rem;
      padding: 0;
      margin: 0.5rem 0 0 0;
      outline: none;
      text-indent: 1rem;
    }
  }
  .right {
    width: 30%;
    p{
      font-size:1.3rem;text-align: right;margin-right:1rem;margin-top:1rem;
    }
  }
}
</style>




