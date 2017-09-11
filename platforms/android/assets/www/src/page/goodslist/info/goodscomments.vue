
<template>
    <div class="gcmtwp">
        <div class="head">
            <div class="title">商品评价 <span>好评率：<i>{{GoodsDetails.Rate}}</i></span></div>
            <div class="more">共 {{GoodsDetails.RateCount}} 条评价</div>
        </div>
        <div class="ratewp">
            <ul>
                <li>物流速度
                    <span class="point">{{GoodsDetails.ExpressRate}}</span>
                </li>
                <li>如实描述
                    <span class="point">{{GoodsDetails.DescribeRate}}</span>
                </li>
                <li>商品质量
                    <span class="point">{{GoodsDetails.QualityRate}}</span>
                </li>
                <li>性价比
                    <span class="point">{{GoodsDetails.PriceRate}}</span>
                </li>
            </ul>
        </div>
        <div class="cmtlist">
            <ul>
                <li v-for="comment in GoodsDetails.Comments">
                    <p class="name"><span class="ctime">{{comment.CreatedOn}}</span>{{comment.NickName}} {{comment.Rate}}</p>
                    <p class="cmtinfo">{{comment.Body}}</p>
                    <div class="pics">
                        <img v-for="img in comment.Thumbs" :src="img" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['GoodsDetails'],
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.gcmtwp {
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

