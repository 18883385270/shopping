/*
商品评价
*/

<template>
    <div class="gcmtwp">
        <div class="head">
            <div class="title">商品评价 <span>好评率：<i>{{rate.rate}}</i></span></div>
            <div class="more">共 234 条评价</div>
        </div>
        <div class="ratewp">
            <ul>
                <li>物流速度
                    <span class="point">{{rate.expressRate}}</span>
                </li>
                <li>如实描述
                    <span class="point">{{rate.describeRate}}</span>
                </li>
                <li>商品质量
                    <span class="point">{{rate.qualityRate}}</span>
                </li>
                <li>性价比
                    <span class="point">{{rate.priceRate}}</span>
                </li>
            </ul>
        </div>
        <div class="cmtlist">
            <ul>
                <li v-for="comment in comments">
                    <p class="name"><span class="ctime">{{comment.createdtime}}</span>{{comment.name}} {{comment.rate}}</p>
                    <p class="cmtinfo">{{comment.comment}}</p>
                    <div class="pics">
                        <img v-for="img in comment.pics" :src="img" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rate:{
                "rate":4.89,
                "expressRate":4.5,
                "priceRate":4.58,
                "describeRate":4.23,
                "qualityRate":4.03
            },
            comments:[
                {
                    "name":"夏天的风",
                    "createdtime":"2017-4-23",
                    "rate":4.6,
                    "comment":"这一款硬盘真的很好用，我觉得黄色的那个很特别的，买的时候赶上搞活动，合适，推荐",
                    "pics":[
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"                        
                    ]
                },
                {
                    "name":"夏天的风",
                    "createdtime":"2017-4-23",
                    "rate":4.6,
                    "comment":"这一款硬盘真的很好用，我觉得黄色的那个很特别的，买的时候赶上搞活动，合适，推荐",
                    "pics":[
                    ]
                },
                {
                    "name":"夏天的风",
                    "createdtime":"2017-4-23",
                    "rate":4.6,
                    "comment":"这一款硬盘真的很好用，我觉得黄色的那个很特别的，买的时候赶上搞活动，合适，推荐",
                    "pics":[
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"                        
                    ]
                },
                {
                    "name":"夏天的风",
                    "createdtime":"2017-4-23",
                    "rate":4.6,
                    "comment":"这一款硬盘真的很好用，我觉得黄色的那个很特别的，买的时候赶上搞活动，合适，推荐",
                    "pics":[
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                        "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"                        
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.gcmtwp {
    margin-top: 1rem;
    background: #fff;
    .head {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ddd;
        .title {
            width: 60%;
            font-size: 1.3rem;
            padding: 0.8rem 0;
            text-indent: 1rem;
            span{
                font-size:1rem;color:red;margin-left:1rem;
                i{
                    font-style: normal;
                }
            }
        }
        .more {
            width: 40%;
            text-align: right;
            padding: 1rem;
            line-height: 1.4rem;
        }
    }
    .ratewp {
        padding: 1rem;
        li {
            list-style: none;
            display: inline-block;
            padding: 0.2rem 0.5rem;
            background: #eee;
            margin: 0 1rem 1rem 0;
            border-radius: 2px;

            .point {
                color: red;
            }
        }
    }
    .cmtlist{
        padding:0 1rem 1rem 1rem;
        li{
            list-style:none;border-bottom:1px dashed #eee;padding:1rem 0;
            &:first-child{
                padding-top:0;
            }
            &:last-child{
                border-bottom:0;
            }

            .name{
                .ctime{
                    float:right;color:#999;
                }
            }
            .cmtinfo{
                padding:0.5rem 0;color:#999;
            }
            .pics{
                img{
                    width:5rem;margin-right:1rem;
                }
            }
        }
    }
}
</style>

