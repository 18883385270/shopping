<template>
  <div class="section_warp" :style="{height:pageheight}">
    <div class="left_menu">
      <ul>
        <li v-for="(Category,index) in Categorys" :class="{active:selectedindex==index}">
          <span @click="tabEvent(index)">{{Category.Name}}</span>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="right_menu">
      <div v-for="(Category,index) in Categorys" v-if="selectedindex==index">
        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a425e85fa21ed71c2a8d64fe86f833f9.jpg?width=720&heihgt=200">
        <div class="submenu_warp" v-for="SubCategory in Category.Children">
          <div class="title">{{SubCategory.Name}}</div>
          <div class="item_warp">
            <ul>
              <li v-for="SubSubCategory in SubCategory.Children" @click="goPage(SubSubCategory)">
                <img :src="SubSubCategory.Thumb" />
                <p>{{SubSubCategory.Name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as util from '../../utils/util';
import * as checkJs from '../../utils/pubfunc';
import * as api from '../../api/category'

export default {
  data() {
    return {
      Categorys: [],
      selectedindex: 0,
      pageheight:'100%'
    }
  },
  created() {
  },
  mounted(){
    this.pageheight=util.screenSize().height+'px';
    //从本地存储获取数据
    if(!checkJs.isNullOrEmpty(sessionStorage.Categorys)){
      this.Categorys=JSON.parse(sessionStorage.Categorys ||{})
    }
    this.fetchData();
  },
  methods: {
    fetchData(){
      //从服务器获取类别树
      let params = {};
      api.CategoryTreeApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.Categorys=res.data.Categorys;
            //存储到本地
            sessionStorage.Categorys = JSON.stringify(this.Categorys)
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    },
    tabEvent(index) {
      this.selectedindex = index;
      console.log(index);
    },
    goPage(category){
      if(category.Type=='Search'){
        //搜索
        this.$router.push({name:'goodslist',params:{type:'Search',search:category.Url}});
      }
      else
      {
        //分类
        this.$router.push({name:'goodslist',params:{type:'Category',categoryid:category.Url}});
      }
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
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
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
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
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


