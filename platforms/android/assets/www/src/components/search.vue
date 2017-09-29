<template>
  <div>
    <div :class="{screen: focus}">
      <div class="top" :class="{br:hasborder}">
        <div class="bg" :style="bgOpacSty" v-show="!focus"></div>
        <div class="bg_focus" v-show="focus"></div>
        <div class="main-head">
          <div class="left" v-if="!focus">
            <svg @click="leftBtnEvent">
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
            <svg @click="rightBtnEvent">
              <use xlink:href="#qrscanline"></use>
            </svg>
          </div>
          <div class="right searchbtn" v-if="focus">
            <button @click="doSearch">搜索</button>
          </div>
        </div>
      </div>
      <div class="main" v-show="focus">
        <img :src="searchImg">
        <div>
          <div class="title">最近搜索</div>
          <ul>
            <li v-for="item in LatestWords" @click="inputFillEvent(item)">{{ item }}</li>
          </ul>
        </div>
        <div>
          <div class="title">热门搜索</div>
          <ul>
            <li v-for="item in HotWords" @click="inputFillEvent(item)">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="load" ref="loading" id="load"></div>
  
  </div>
</template>

<script>
import data from '../../../data.json'
import * as checkJs from '../utils/pubfunc'

export default {
  props: ['opac', 'hasbg', 'hasbr'],
  data() {
    return {
      focus: false,
      hasbackground: this.hasbg,
      hasborder: this.hasbr,
      inputText: '',
      LatestWords: ['充电宝', 'Ipad', '小米5s', '笔记本', '自行车', '空调','小米电视','连衣裙','牛仔裤'],
      HotWords: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲'],
      bgOpacSty: {
        opacity: this.hasbg ? 1 : 0,
      },
      searchImg: ''
    };
  },
  created() {
    this.searchImg = data.searchImg;
    //获取本地最近搜索项目
    if(!checkJs.isNullOrEmpty(sessionStorage.LatestWords)){
      this.LatestWords=JSON.parse(sessionStorage.LatestWords)
    }
  },
  watch: {
    opac() {
      if (!this.hasbackground) {
        this.bgOpacSty.opacity = this.opac;
      }
    }
  },
  methods: {
    handleFocus() {
      this.focus = true;
      this.$emit('searchEvent', true);
    },
    goBackEvent() {
      this.focus = false;
      this.$emit('searchEvent', false);
    },
    leftBtnEvent(){
      this.$emit('searchLeftBtnEvent');
    },
    rightBtnEvent(){
      this.$emit('searchRightBtnEvent');
    },
    inputFillEvent(word) {
      this.inputText = word;
    },
    doSearch(){
      //添加最近搜索
      if(this.inputText.length>=1)
      {
        this.LatestWords.pop();//删除最后一个
        this.LatestWords.splice(0,0,this.inputText);//添加到第一个
        sessionStorage.LatestWords = JSON.stringify(this.LatestWords)

        //通过jumppage调整到产品列表页
        var goodsFilter={
            Type:'Search',
            Search:this.inputText,
            CategoryId:''
        }
        sessionStorage.GoodsFilter = JSON.stringify(goodsFilter)
        this.$router.push({name:'goodslist'});
      }
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
  z-index:2;
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
