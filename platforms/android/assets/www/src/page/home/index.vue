/*
* 首页
*/
<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
      <mi-search @searchEvent="searchHandle" @searchLeftBtnEvent="searchLeftBtnEventHandle" @searchRightBtnEvent="searchRightBtnEventHandle" :opac="headerOpacity"></mi-search>
         <mi-banner :banner="banner" id="bannerImg"></mi-banner> 
        <mi-category></mi-category>
        <mi-announcement :Announcement="Announcement"></mi-announcement>
        <mi-stargoods :Goodses="newGoodses" title="最新单品"></mi-stargoods>
        <mi-stargoods :Goodses="rateGoodses" title="好评单品"></mi-stargoods>
        <mi-stargoods :Goodses="selloutGoodses" title="热卖单品"></mi-stargoods>
        <div style="height:8rem;"></div>
        <mi-tabbar :selected="0"></mi-tabbar>
    </div>
  </div>
</template>

<script>
import * as util from '../../utils/util.js'
import search from '../../components/search.vue'
import banner from './banner.vue'
import category from './category.vue'
import announcement from './announcement.vue'
import advertisement from './advertisement.vue'
import stargoods from './starGoods.vue'
import tabbar from '../../components/tabbar.vue'
import data from '../../../../data.json'
import * as checkJs from '../../utils/pubfunc'
import * as goodsapi from '../../api/goods'
import * as announcementapi from '../../api/announcement'

  export default {
    components: {
      'mi-search': search,
      'mi-banner': banner,
      'mi-category':category,
      'mi-announcement':announcement,
      'mi-advertisement': advertisement,
      'mi-stargoods': stargoods,
      'mi-tabbar': tabbar
    },
    created () {
      let me = this;
      me.banner = data.banner;
      me.advertisement = data.advertisement;
      me.bannerList = data.banner.bannerTop;
      this.GetAnnouncements();
      this.GetHomeGoodses();
    },
    mounted () {
      var me = this;
      this.c_height = 0.711 * util.screenSize().width;
      var height = util.screenSize().width * 256 / 360;
      this.$refs.index.onscroll = function () {
        me.headerOpacity = this.scrollTop / height;
      };
    },
    data () {
      return {
        banner: {},
        advertisement: {},
        bannerList: [],
        newGoodses:[],
        rateGoodses:[],
        selloutGoodses:[],
        Announcement:{},
        scrollX: 0,
        scrollY: 0,
        searchState: false,
        headOpac: '',
        load: false,
        c_height: 0,
        indexStyle: {
          height: util.screenSize().height/10 + 'rem',
          'overflow-y': 'scroll',
          width: '100%'
        },
        headerOpacity: 0
      };
    },
    methods: {
      searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
      },
      GetAnnouncements(){
          let me = this;
          //获取公告
          announcementapi.LatestAnnouncementApi({}).then(
            res => {
              if (res.data.Code == 200) {
                me.Announcement=res.data.Announcement;
              } else {
                console.log(res.data.Message);
              }
            },
            err => {
              console.log('网络错误');
            }
          );
      },
      GetHomeGoodses(){
          let me = this;
          //从服务获取产品
          goodsapi.HomePageGoodsesApi({}).then(
            res => {
              if (res.data.Code == 200) {
                me.newGoodses=res.data.NewGoodses;
                me.rateGoodses=res.data.RateGoodses;
                me.selloutGoodses=res.data.SellOutGoodses;
              } else {
                console.log(res.data.Message);
              }
            },
            err => {
              console.log('网络错误');
            }
          );
      },
      searchLeftBtnEventHandle(){
        
      },
      searchRightBtnEventHandle(){
        //二维码扫描
        let self=this;
            cordova.plugins.barcodeScanner.scan(  
                function (result) {  
                    // alert("We got a barcode\n" +  
                    //         "Result: " + result.text + "\n" +  
                    //         "Format: " + result.format + "\n" +  
                    //         "Cancelled: " + result.cancelled);
                    //format QR_CODE 二维码，EAN_13条形码

                    if(result.format=='QR_CODE') 
                    {//如果是二维码 
                        //判断是否是用户的二维码
                        var userId=checkJs.GetUserId(result.text);
                        if(!checkJs.isNullOrEmpty(userId))
                        {
                            if(checkJs.isNullOrEmpty(self.$store.state.global.token))
                            {//未登录 进入注册页面
                                self.$router.push({name:'register',params:{UserId:userId}});
                            }
                        }
                        else{
                            //显示扫描信息
                            alert('扫描结果：'+result.text)
                        }
                        
                    }
                    if(result.format=='EAN_13'){
                        alert('扫描结果：'+result.text)
                    }
                    
                },   
                function (error) {  
                    alert("扫描失败: " + error);  
                }  
            ); 
      }
    }
  };
</script>

<style lang="less" scoped>
  .app {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }

  .banner-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
