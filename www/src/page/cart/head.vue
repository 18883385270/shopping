<<template>
  <header>
    <div class="head_bar">
      <div class="left"  @click="backEvent()">
        <svg>
          <use xlink:href="#leftarrowsline"></use>
        </svg>
      </div>
      <div class="center">
          <span>购物车</span>
      </div>
      <div class="right">
        <svg>
          <use xlink:href="#search"></use>
        </svg>
      </div>
    </div>
    <div style="height: 4rem;"></div>
  </header>
</template>

<script>
export default {
  methods: {
    backEvent() {
      history.back();
    }
  }
}
</script>

<style lang="less" scope>
.head_bar {
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #C1272D;
  color: white;
  .left {
    width: 15%;
    line-height: 4rem;
    font-size: 0;
    text-align: center;
    display: inline-block;
    svg {
      width: 1.3rem;
      height: 1.3rem;
      fill:#333;
    }
  }
  .center {
    width: 70%;
    font-size: 1.4rem;
    font-weight: 500;
    display: inline-block;
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
    width: 15%;
    font-size: 1.6rem;
    display: inline-block;
    line-height: 4rem;
    text-align: center;
    margin: -0.1rem 0 0 0;
    vertical-align: top;
    padding: 0;
    svg {
      width: 1.3rem;
      height: 1.3rem; 
      fill:#ccc;
    }
  }
}
</style>




