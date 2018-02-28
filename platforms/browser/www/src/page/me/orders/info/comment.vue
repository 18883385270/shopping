<template>
  <div>
      <mi-header title="商品评价"></mi-header>
      <div class="flexwarp pd">
          <div class="wd-20p">
              <img class="wd-100p img-round" :src="Goods.GoodsPic" alt="">
          </div>
          <div class="wd-80p marg-lf text-gray">
              <p>{{Goods.GoodsName}}</p>
              <p class="pd-top">{{Goods.SpecificationName}}</p>
          </div>
      </div>
      <div class="divider"></div>
      <div class="commenttext">
          <textarea v-model="CommentInfo.Body" placeholder="分享您的购买心得" cols="30" rows="10"></textarea>
        <div class="piclistwp">
            <span class="piclist" v-for="(Pic,picindex) in CommentInfo.Thumbs">
                <i @click="removeGoodsPic(picindex)">删除</i>
                <img :src="Pic"  alt="">
            </span>
        </div>
        <imginputer :openPreview="false" placeholder="+添加图片" size="small" @onChange="OnFileChangeHandle"></imginputer>
      </div>
      <div class="divider"></div>
      <div style="padding-top:0.5rem;">
          <div class="flexwarp pd">
            <div class="wd-30p text-md text-gray">
                产品质量({{CommentInfo.QualityRate}}分)
            </div>
            <div class="wd-70p">
                <mi-rate :length="5" @afterRate="onQualityRate"></mi-rate>
            </div>
        </div>
        <div class="flexwarp pd">
            <div class="wd-30p text-md text-gray">
                物流速度({{CommentInfo.ExpressRate}}分)
            </div>
            <div class="wd-70p">
                <mi-rate :length="5" @afterRate="onExpressRate"></mi-rate>
            </div>
        </div>
        <div class="flexwarp pd">
            <div class="wd-30p text-md text-gray">
                产品描述({{CommentInfo.DescribeRate}}分)
            </div>
            <div class="wd-70p">
                <mi-rate :length="5" @afterRate="onDescribeRate"></mi-rate>
            </div>
        </div>
        <div class="flexwarp pd">
            <div class="wd-30p text-md text-gray">
                性价比({{CommentInfo.PriceRate}}分)
            </div>
            <div class="wd-70p">
                <mi-rate :length="5" @afterRate="onPriceRate"></mi-rate>
            </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="pd">
          <button class="button success" @click="submitComment">提交</button>
      </div>
      <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import imginputer from '../../../../components/imginputer.vue'
import rate from '../../../../components/rate.vue'
import toast from '../../../../components/toast.vue'
import * as checkJs from '../../../../utils/pubfunc'
import * as util from '../../../../utils/util'
import * as api from '../../../../api/goods'

export default {
    components:{
        'mi-header':header,
        'mi-rate':rate,
        'mi-toast':toast,
        'imginputer':imginputer
    },
    data(){
        return {
            Goods:{},
            CommentInfo:{
                GoodsId:'',
                Body:'',
                Thumbs:[],
                QualityRate:5,
                ExpressRate:5,
                DescribeRate:5,
                PriceRate:5
            }
        }
    },
    mounted(){
        this.Goods = JSON.parse(sessionStorage.ToCommentGoods)
    },
    methods:{
        OnFileChangeHandle(file){
            var GoodsImg=util.uploadToOss(file,'goodscomments');
            let self=this;
            setTimeout(()=>{
                self.CommentInfo.Thumbs.push(GoodsImg);
            },1000);
        },
        removeGoodsPic(index){
            this.CommentInfo.Thumbs.splice(index,1);
        },
        onQualityRate (rate) {
            this.CommentInfo.QualityRate=rate
        },
        onExpressRate(rate){
            this.CommentInfo.ExpressRate=rate
        },
        onPriceRate(rate){
            this.CommentInfo.PriceRate=rate
        },
        onDescribeRate(rate){
            this.CommentInfo.DescribeRate=rate
        },
        submitComment(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            
            let self = this;
            if (checkJs.isNullOrEmpty(this.CommentInfo.Body)) {
                alertFuc('请输入评价')
                return;
            }
                        
            let params = Object.assign({},this.CommentInfo);
            params.GoodsId=this.Goods.GoodsId
            api.CommentApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.goSuccessPage('orders','感谢您，评价成功')
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        goSuccessPage(returnPage,message)
        {
          //转到成功页面
          var tipInfo={
              Type:'Tip',
              NextPage:returnPage,
              Message:message
          }
          sessionStorage.TipInfo = JSON.stringify(tipInfo)
          this.$router.replace({name:'success'})
        }
    }
}
</script>

<style lang="less" scoped>
.goodswp{
    display:flex;
    padding:1rem;
    .img{
        width:20%;
        img{
            width:100%;
        }
    }
    .goodsname{
        width:80%;
        margin-left:1rem;
    }
}
.commenttext{
    padding:1rem;
    textarea{
        border:0;
        outline:none;
        width:100%;
        font-size:1.3rem;
        height:8rem;
    }
}
.piclistwp{
    padding-bottom:1rem;
}
.piclist{
    display:inline-block;
    width:6rem;
    height:6rem;
    border:1px solid #eee;
    margin-right:0.5rem;
    img{
        width:6rem;
        height:6rem;
    }
    i{
        position:absolute;
        display: inline-block;
        background:#000;
        color:#fff;
        text-align:center;
        font-size:0.6rem;
        width:6rem;
        line-height:1rem;
        font-style:normal;
        opacity:0.7;
        padding:0.2rem 0;
        margin-top:4.6rem;
        cursor:pointer;
    }
}

</style>


