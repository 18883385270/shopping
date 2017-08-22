<template>
  <div class="page_warp">
        <mi-search @searchEvent="searchHandle" @searchLeftBtnEvent="searchLeftBtnEventHandle" @searchRightBtnEvent="searchRightBtnEventHandle"  hasbg="true" hasbr="true"></mi-search>
        <div style="height: 4rem;"></div>
        <mi-section></mi-section>
        <div style="width: 100%;height: 4rem;"></div>
        <mi-tabbar :selected="1"></mi-tabbar>
  </div>
</template>

<script>
import search from '../../components/search.vue';
import section from './section.vue';
import tabbar from '../../components/tabbar.vue';
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-search':search,
        'mi-section':section,
        'mi-tabbar': tabbar
    },
    data(){
        return {
            searchState: false
        }
    },
    methods:{
       searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
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
}
</script>

<style lang="less" scoped>
    .page_warp{
        width: 100%;
    }
</style>


