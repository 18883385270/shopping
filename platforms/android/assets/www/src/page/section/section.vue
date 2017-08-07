<template>
  <div class="section_warp">
    <div class="left_menu" :style="{height:leftbarheight}">
      <ul>
        <li v-for="(section,index) in sections" :class="{active:selectedindex==index}">
          <span @click="tabEvent(index)">{{section.name}}</span>
        </li>
      </ul>
    </div>
    <div class="right_menu">
      <div v-for="(section,index) in sections" v-if="selectedindex==index">
        <img :src="section.adsimg">
        <div class="submenu_warp" v-for="submenu in section.submenus">
          <div class="title">{{submenu.name}}</div>
          <div class="item_warp">
            <ul>
              <li v-for="item in submenu.items" @click="goPage('/goodslist')">
                <img :src="item.img" />
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../../../data.json';
import util from '../../utils/util.js';

export default {
  data() {
    return {
      sections: [],
      selectedindex: 0,
      leftbarheight:'100%'
    }
  },
  created() {
    this.sections = data.sections;
  },
  mounted(){
    this.leftbarheight=util.screenSize().height+'px';
  },
  methods: {
    tabEvent(index) {
      this.selectedindex = index;
      console.log(index);
    },
    goPage(page){
      this.$router.push({path:page});
    }
  }
}
</script>

<style lang="less" scoped>
.section_warp {
  width: 100%;
  display: flex;

  .left_menu {
    width: 30%;
    background-color: #eee;
    padding-bottom: 4rem;
    ul {
      height: 100%;
      li {
        border-bottom: 1px solid #ccc;
        span {
          display: block;
          padding: 1.2rem 1rem;
          text-align: center;
          color: #666;
          font-size: 1.2rem;
        }
        &.active {
          background: white;
        }
      }
    }
  }
  .right_menu {
    width: 70%;
    background:#fff;
    padding: 1rem;
    img {
      width: 100%;
    }
    .submenu_warp {
      
      .title {
        margin: 1.5rem 0 1rem 0;
      }
      .item_warp {
        ul>li {
          list-style: none;
          display: inline-block;
          width: 30%;
          text-align: center;
          margin-right: 5%;
          margin-bottom: 1rem;
          &:nth-child(3n+0) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>


