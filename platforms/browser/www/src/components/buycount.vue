/*
购买数量组件
*/
<template>
    <div class="buycountwarp">
        <div class="actionbtn" @click="reducecount()">-</div>
        <div class="buycount">
            <input v-model="currentValue"  type="number" readonly />
        </div>
        <div class="actionbtn" @click="addcount()">+</div>
    </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 1000
    },
    min: {
      type: Number,
      default: 1
    },
    value: {
      default: 1
    }
  },
  data() {
    return {
      currentValue: 1,
    };
  },
  watch: {
    //监听外币对prop的修改
    value: {
        immediate: true,
        handler(value) {
            let newVal = Number(value);
            if (newVal >= this.max) newVal = this.max;
            if (newVal <= this.min) newVal = this.min;
            this.currentValue = newVal;
        }
    }
  },
  methods: {
    addcount() {
      if (this.currentValue < this.max) {
        this.currentValue++;
        // 通过 input 事件发出数值
        this.$emit("input", Number(this.currentValue));
      }
    },
    reducecount() {
      if (this.currentValue > this.min) {
        this.currentValue--;
        // 通过 input 事件发出数值
        this.$emit("input", Number(this.currentValue));
      }
    }
  }
};
</script>

<style lang="less" scoped>
.buycountwarp {
  width: 8.5rem;
  height: 2.4rem;
  display: flex;
  border: 1px solid #eee;
  border-radius: 2px;
  background: #fff;
  .actionbtn {
    width: 2.5rem;
    text-align: center;
    font-size: 2.4rem;
    line-height: 2.2rem;
    font-weight: 300;
  }
  .buycount {
    width: 3.5rem;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    font-size: 1.5rem;
    line-height: 2.4rem;

    input {
      border: 0;
      display: block;
      width: 3.5rem;
      height: 2.4rem;
      text-align: center;
    }
  }
}
</style>


