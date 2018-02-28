<template>
  <div class="pagewp" :style="{height:pageHeight}">
      <mi-header title="店铺收款码" isWhiteText="true" ></mi-header>
      <div class="codewp">
          <div class="tlt text-warning">
              <svg class="icon-warning">
                  <use xlink:href="#cash"></use>
              </svg>
              收款码
            </div>
            <div class="codeimg">
                <p class="text-md text-warning pd-topbtn-lg">{{MyOfflineStore.Name}} </p>
                <p class="text-gray pd-md">线下买单，扫描二维码向商家付款</p>
                <div class="pd-lg qrcodewp">
                    <vueqr :text="MyLink" size="180"></vueqr>
                </div>
                <p class="pd-xlg text-primary" @click="saveToLocal">保存收款码</p>
            </div>
      </div>
      <mi-toast ref="toast" max-lenght="20"></mi-toast>
  </div>
</template>

<script>
import header from "../../../components/header.vue";
import toast from "../../../components/toast.vue";
import vueqr from "vue-qrcode-component";
import * as util from "../../../utils/util";
import * as checkJs from "../../../utils/pubfunc";

export default {
  components: {
    "mi-header": header,
    vueqr: vueqr,
    "mi-toast": toast
  },
  data() {
    return {
      pageHeight: "100%",
      MyLink: "OfflineStorePayeeCode:",
      MyOfflineStore: {},
      downloading: false,
      downloadpersent: 0
    };
  },
  mounted() {
    this.pageHeight = util.screenSize().height + "px";
    if (!checkJs.isNullOrEmpty(sessionStorage.MyOfflineStore)) {
      this.MyOfflineStore = JSON.parse(sessionStorage.MyOfflineStore);
      this.MyLink = "OfflineStorePayeeCode:" + this.MyOfflineStore.Id;
    }
  },
  methods: {
    saveToLocal() {
      this.saveImg(this.MyOfflineStore.Id);
    },
    saveImg(id) {
      let alertFuc = msg => {
        this.$refs.toast.show(msg);
        return false;
      };

      var url = encodeURI(
        "http://download.wftx666.com/pages/offlinestore.aspx?id=" + id
      );
      var targetPath =
        cordova.file.externalRootDirectory + "mystorepayeecode.png";
      var trustHosts = true;
      var options = {};
      let me = this;
      var fileTransfer = new FileTransfer();
      fileTransfer.onprogress = function(progressEvent) {
        me.downloading = true;
        var downloadProgress = parseInt(
          progressEvent.loaded / progressEvent.total * 100
        );
        me.downloadpersent = downloadProgress;
        if (downloadProgress > 99) {
          me.downloading = false;
        }
      };
      fileTransfer.download(
        url,
        targetPath,
        function(entry) {
          console.log("下载完成: " + entry.toURL());
          alertFuc("保存成功" + entry.toURL());
        },
        function(error) {
          console.log("下载错误 " + error.source);
        },
        trustHosts,
        options
      );
    }
  }
};
</script>

<style lang="less" scoped>
.pagewp {
  background: #efbe29;
}
.codewp {
  margin: 1rem;
  background: #fff;
  .tlt {
    background: #f5f5f5;
    font-size: 1.3rem;
    line-height: 1.5rem;
    padding: 1.3rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      float: left;
      margin-right: 1rem;
    }
  }
  .codeimg {
    background: #fff;
    text-align: center;
    .qrcodewp {
      > div {
        display: inline-block;
      }
    }
  }
}
</style>


