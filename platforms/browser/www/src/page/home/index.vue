
<template>
  <div class="app">
    <div>
      <mi-searchbar @searchEvent="searchHandle" @searchLeftBtnEvent="searchLeftBtnEventHandle" @searchRightBtnEvent="searchRightBtnEventHandle" :opac="headerOpacity"></mi-searchbar>
      <mi-banner :banners="Banners"></mi-banner>
      <!-- <mi-category></mi-category> -->
      <!-- <mi-announcement :Announcement="Announcement"></mi-announcement> -->
      <mi-goodsblockwarp></mi-goodsblockwarp>
      <!-- <mi-stargoods :Goodses="HomeNewGoodses" title="最新单品"></mi-stargoods> -->
      <div style="height:4.5rem;"></div>
      <!-- <div v-if="!IsInApp" class="appdowntip">
        <svg>
          <use xlink:href="#mobile"></use>
        </svg>
        <span> <a href="http://download.wftx666.com" target="_blank"> 点击下载五福天下商城App，随时随地更精彩</a></span>
      </div> -->
      <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="confirmUpdate">
            <div slot="confirm" class="updateconfirm">
                <p class="updatesvg">
                  <svg>
                    <use xlink:href="#updateline"></use>
                  </svg>
                </p>
                <p class="tlt">检测到新版本</p>
                <p>{{ServerAppVersion.Content}}，现在更新么？</p>
            </div>
        </mi-modal>
        <mi-modal ref="announcementModal" type="alert" @alertEvent="alertEventHandle">
            <div slot="alert" class="announcementAlert">
                <p class="tlt">{{Announcement.Title}}</p>
                <p class="anbody">{{Announcement.Body}}</p>
            </div>
        </mi-modal>
        <!--下载进度-->
        <div class="downloadbg" :style="{height:pageHeight}" v-if="appdownloading">
            <div class="pd-xlg"></div>
            <mi-progress :persent="downloadpersent"></mi-progress>
            <div class="text-center text-white">下载进度:{{downloadpersent}}%</div>
        </div>
      <mi-tabbar :selected="0"></mi-tabbar>
    </div>
  </div>
</template>

<script>
import * as util from '../../utils/util.js'
import searchbar from '../../components/searchbar.vue'
import banner from './banner.vue'
import category from './category.vue'
import goodsblockwarp from './goodsblockwarp.vue'
import announcement from './announcement.vue'
import stargoods from './starGoods.vue'
import tabbar from '../../components/tabbar.vue'
import progress from '../../components/progress.vue'
import modal from '../../components/modal.vue'
import * as checkJs from '../../utils/pubfunc'
import * as goodsapi from '../../api/goods'
import * as announcementapi from '../../api/announcement'
import * as appapi from '../../api/app'


export default {
  props:["openId"],
  components: {
    'mi-searchbar': searchbar,
    'mi-banner': banner,
    'mi-modal':modal,
    'mi-category': category,
    'mi-announcement': announcement,
    'mi-goodsblockwarp':goodsblockwarp,
    'mi-stargoods': stargoods,
    'mi-tabbar': tabbar,
    'mi-progress':progress
  },
  data() {
    return {
      Banners: {},
      HomeNewGoodses: [],
      Announcement: {},
      searchState: false,
      headerOpacity: 0,
      IsInApp: true,
      pageHeight:'100%',
      ServerAppVersion:{},
      appdownloading:false,
      downloadpersent:0
    };
  },
  mounted() {
    this.pageHeight=util.screenSize().height+'px'
    var self = this;
    window.addEventListener('scroll',()=>{
      self.headerOpacity = window.scrollY / 200;
    })
    //判断是否在App中打开
    if (checkJs.isNullOrEmpty(localStorage.IsCordovaReady) || localStorage.IsCordovaReady == 'false') {
      this.IsInApp = false;
    }
    else{
      this.checkVersion();
    }
    //先从本地获取数据
    if (!checkJs.isNullOrEmpty(localStorage.Announcement)) {
      this.Announcement = JSON.parse(localStorage.Announcement)
    }
    this.homeBanner();
    this.GetAnnouncements();
  },
  methods: {
    checkVersion(){
      appapi.CheckVersionApi({}).then(
        res=>{
          if (res.data.Code == 200) {
            this.ServerAppVersion=res.data
            if(AppVersion.version!=this.ServerAppVersion.Version){
              this.showUpdateConfirm()
            }
          }
        }
      );
    },
    homeBanner(){
      appapi.HomeBannerApi({}).then(
        res=>{
          if (res.data.Code == 200) {
            this.Banners=res.data.Banners
          }
        }
      );
    },
    showUpdateConfirm(){
      this.$refs.confirm.modalOpen();
    },
    showAnnouncement(){
      this.$refs.announcementModal.modalOpen();
    },
    alertEventHandle(){
    },
    confirmUpdate(num){
      //更新App
      if(num){
        var url = encodeURI("http://download.wftx666.com/wftxapp.apk");
        var targetPath = cordova.file.externalDataDirectory+"myapp.apk";
        var trustHosts = true
        var options = {};
        let me=this;
        var fileTransfer = new FileTransfer();
        fileTransfer.onprogress = function(progressEvent) {
            me.appdownloading=true;
            var downloadProgress = parseInt((progressEvent.loaded / progressEvent.total) * 100);
            me.downloadpersent=downloadProgress;
            if (downloadProgress > 99){
              me.appdownloading=false;
            }
        };
        fileTransfer.download(
            url,
            targetPath,
            function(entry) {
                console.log("下载完成: " + entry.toURL());
                //打开安装包
                cordova.plugins.fileOpener2.open(
                    targetPath, 
                    'application/vnd.android.package-archive'
                );
            },
            function(error) {
                console.log("下载错误 " + error.source);
            },
            trustHosts,
            options
        );
      }
    },
    searchHandle(Boolean) {
      if (Boolean) {
        this.searchState = true;
      } else {
        this.searchState = false;
      }
    },
    GetAnnouncements() {
      //获取公告
      announcementapi.LatestAnnouncementApi({}).then(
        res => {
          if (res.data.Code == 200) {
            this.Announcement = res.data.Announcement;
            //判断是否是新公告
            if(!checkJs.isNullOrEmpty(localStorage.LatestAnnouncementId)){
              if(localStorage.LatestAnnouncementId!=res.data.Announcement.Id){
                this.showAnnouncement()
              }
            }
            localStorage.LatestAnnouncementId=res.data.Announcement.Id
            
            localStorage.Announcement = JSON.stringify(this.Announcement)
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      );
    },
    GetHomeGoodses() {
      //从服务获取产品
      goodsapi.HomePageGoodsesApi({}).then(
        res => {
          if (res.data.Code == 200) {
            this.HomeNewGoodses = res.data.NewGoodses;
            //缓存到本地
            localStorage.HomeNewGoodses = JSON.stringify(this.HomeNewGoodses)
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      );
    },
    searchLeftBtnEventHandle() {
      this.$router.push({name:'offlinestore'})
    },
    searchRightBtnEventHandle() {
        this.$router.push({name:'scannerpage'});
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

.appdowntip {
  width: 100%;
  position: fixed;
  bottom: 4rem;
  padding: 1rem 1rem;
  background: #000;
  color: #fff;
  line-height: 1.3rem;
  font-size: 1.3rem;
  opacity: 0.5;
  span{
    margin-top:0.3rem;
    display:inline-block;
    a{
      text-decoration:none;
      color:#fff;
    }
  }
  svg {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-right: 1rem;
    fill: #fff;
  }
}
.announcementAlert{
  .tlt{
    border-bottom:1px dashed #eee;
    text-align:center;
    padding-bottom:1rem;
    margin-bottom:1rem;
    font-size:1.3rem;
  }
  .anbody{
    max-height:20rem;
    overflow-y:auto;
    text-indent:2rem;
    font-size:1.2rem;
  }
}

.updateconfirm{
  font-size:1.3rem;
  .updatesvg{
    text-align:center;
  }
  .tlt{
    border-bottom:1px dashed #eee;
    text-align:center;
    padding-bottom:1rem;
    margin-bottom:1rem;
  }
  svg{
    width:3rem;
    height:3rem;
    background:#c03;
    border-radius:3px;
    fill:#fff;
    padding:0.5rem;
  }
}
.downloadbg{
  width:100%;
  background:#000;
  height:100%;
  position:absolute;
  z-index:100000;
  top:0;
  opacity:0.7;
  
}
</style>
