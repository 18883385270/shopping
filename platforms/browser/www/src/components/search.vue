<template>
  <div>
    <div :class="{screen: focus}">
      <div class="top" :class="{br:hasborder}">
        <!--正常状态的背景-->
        <div class="bg" :style="bgOpacSty" v-show="!focus"></div>
        <!--搜索状态下的背景-->
        <div class="bg_focus" v-show="focus"></div>
  
        <div class="main-head">
          <div class="left" v-if="!focus">
            <svg>
              <use xlink:href="#home"></use>
            </svg>
          </div>
          <div class="left" v-if="focus" @click="goBackEvent">
            <svg>
              <use xlink:href="#leftarrowsline"></use>
            </svg>
          </div>
          <div class="center">
            <input type="text" placeholder="搜索商品/店铺" :class="{border: focus}" @focus="handleFocus" v-model="inputText" />
          </div>
          <div class="right" v-if="!focus">
            <svg>
              <use xlink:href="#qrscanline"></use>
            </svg>
          </div>
          <div class="right searchbtn" v-if="focus">
            <button>搜索</button>
          </div>
        </div>
      </div>
      <div class="main" v-show="focus">
        <img :src="searchImg">
        <div>
          <div class="title">最近搜索</div>
          <ul>
            <li v-for="item in hotWord" @click="inputFillEvent(item)">{{ item }}</li>
          </ul>
        </div>
        <div>
          <div class="title">热门搜索</div>
          <ul>
            <li v-for="item in hotWord" @click="inputFillEvent(item)">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="load" ref="loading" id="load"></div>
  
  </div>
</template>

<script>
import data from '../../../data.json';
export default {
  props: ['opac', 'hasbg', 'hasbr'],
  data() {
    return {
      focus: false,
      hasbackground: this.hasbg,
      hasborder: this.hasbr,
      inputText: '',
      hotWord: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲'],
      bgOpacSty: {
        opacity: this.hasbg ? 1 : 0,
      },
      searchImg: ''
    };
  },
  created() {
    this.searchImg = data.searchImg;
  },
  watch: {
    opac() {
      if (!this.hasbackground) {
        this.bgOpacSty.opacity = this.opac;
      }
    }
  },
  methods: {
    handleFocus() {//搜索
      this.focus = true;
      //广播搜索事件
      this.$emit('searchEvent', true);
    },
    goBackEvent() {//取消搜索
      this.focus = false;
      this.$emit('searchEvent', false);
    },
    inputFillEvent(word) {
      this.inputText = word;
    }
  }
};
</script>

<style lang="less" scoped>
.screen {
  width: 100%;
  height: 100%;
  background: #fff;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}

.absolute100 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.top {
  /*搜索条*/
  width: 100%;
  height: 4rem;
  font-size: 0;
  position: fixed;
  color: #fff;
  z-index: 3;
  &.br {
    border-bottom: 1px solid #ddd;
  }
  
  .bg {
    .absolute100;
    background: white;
  }
  .bg_focus {
    .absolute100;
    background: white;
  }
  .main-head {
    .absolute100;
    display: flex;
    .left {
      width: 15%;
      text-align: center;
      svg {
        fill: #666;
        margin-top: 0.8rem;
        height: 2rem;
        width: 2rem;
      }
    }
    .headIcon {
      height: 3rem;
      width: 3rem;
    }
    .center {
      width: 70%;
      vertical-align: top;
      input {
        width: 95%;
        line-height: 3rem;
        height: 3rem;
        border: 0.1px solid #dedede;
        padding: 0 0 0 5%;
        margin: 0.5rem 0 0 0;
        outline: none;
        text-indent: 1rem;
        border-radius: 3rem;
        &.border {
          background-color: white;
        }
      }
    }
    .right {
      width: 15%;
      text-align: center;
      vertical-align: top;
      svg {
        height: 4rem;
        width: 2rem;
        fill: #333;
      }
      button {
        padding: 0.4rem 0.5rem;
        font-size: 1.2rem;
        border-radius: 0.2rem;
        background: #C1272D;
        color: white;margin-top:0.8rem;
        border: 0;
      }
    }
  }
}

.main {
  /*内容*/
  width: 100%;
  margin: 4rem 0 0 0;
  >div {
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }
  .title {
    line-height: 4rem;
    color: #333;
    text-indent: 1rem;
  }
  img {
    width: 100%;
  }
  ul {
    padding: 0 1rem;
    li {
      list-style-type: none;
      font-size: 1.1rem;
      padding: 0.5rem;
      margin: 0.5rem;
      display: inline-block;
      background: #eee;
      border: 1px solid #ccc;
    }
  }
}
</style>
