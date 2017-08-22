<template>
    <div class="warp">
        <div class="control">
            <div class="left hook" @click="goBackEvent"><svg> <use xlink:href="#star"></use> </svg></div>
            <div class="right hook" @click="qrScan"><svg> <use xlink:href="#qrscanline"></use> </svg></div>
        </div>
        <div class="benevolenceindex">
            <!-- <i class="index_icon"></i> -->
            <svg class="index_icon"> <use xlink:href="#index"></use> </svg>
            <h2>善心指数</h2>
            <p>{{BenevolenceIndex.CurrentBenevolenceIndex}}</p>
            <p class="myearnings">上次激励 {{this.$store.state.global.walletinfo.YesterdayEarnings|currency('￥',2)}} 元</p>
            <p class="earningtip">注意，系统用当日23.00时的善心指数激励善心</p>
        </div>
        <div class="button_bar">
            <div>
                <p>{{BenevolenceIndex.StoreCount}} <i>家</i></p>
                联盟商家
            </div>
            <div>
                <p>{{BenevolenceIndex.ConsumerCount}} <i>个</i></p>
                爱心使者
            </div>
            <div>
                <p>25634 <i>元</i></p>
                爱心基金
            </div>
            
        </div>
    </div>
</template>

<script>
import * as checkJs from '../../utils/pubfunc'

export default {
    props:['BenevolenceIndex'],
    methods:{
        goBackEvent(){
            
        },
        qrScan(){
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
.warp {
    background: #F15A24;
    .control {
        width: 100%;
        top: 1rem;
        position: relative;
        left: 0;
        z-index: 10;
        padding: 0 1rem;
        box-sizing: border-box;
        div.hook {
            width: 3rem;
            height: 3rem;
            display: block;
            border-radius: 50%;
            text-align: center;
            line-height: 3rem;padding:0.5rem;
            color: #fff;
            &.left {
                float: left;
                svg{
                    fill:#fff;width:2rem;height:2rem;
                }
            }
            &.right {
                float: right;
                svg{
                    fill:#fff;width:2rem;height:2rem;
                }
            }
        }
    }

    .benevolenceindex{
        padding:1rem;
        text-align: center;color:white;
        .index_icon{
            display: block;
            width:8rem;height:8rem;margin:1rem auto 0.3rem auto;
            fill: #fff;
        }
        h2{
            font-weight: 400;margin-bottom: 1rem;font-size:1.3rem;
        }
        p{
            font-size:2rem;
            &.myearnings{
                font-size:1.3rem;margin: 1rem 0 0.5rem 0;
            }
            &.earningtip{
                font-size:1rem;margin-bottom:1rem;
            }
        }

    }
    .button_bar{
        background:#DE4628;display: flex;display: flex;height:4rem;
        >div{
            width:33.3%;text-align: center;padding:0.4rem 0;color: white;
            >p{
                font-size:1.5rem;
                >i{
                    font-size:1rem;font-style: normal;
                }
                
            }
        }
    }
}
</style>


