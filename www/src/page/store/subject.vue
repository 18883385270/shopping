<template>
    <div>
        <mi-header title="店铺信息"></mi-header>
        <mi-banner :StoreInfo="StoreInfo"></mi-banner>
        <div class="navbar">
            <div class="item" @click="goPageWithName('store')">
                <svg>
                    <use xlink:href="#storeline"></use>
                </svg>
                <p>
                    首页
                </p>
            </div>
            <!-- <div class="item">
                <svg>
                    <use xlink:href="#newline"></use>
                </svg>
                <p>
                    上新
                </p>
            </div> -->
            <div class="item active">
                <svg>
                    <use xlink:href="#identitycardline"></use>
                </svg>
                <p>
                    资料
                </p>
            </div>
        </div>

        <div class="article">
      <p class="title">简介</p>
      <p>
        {{StoreInfo.Description}}
      </p>
    </div>
    <div class="article">
      <p class="title">主体名称</p>
      <p>
        {{SubjectInfo.SubjectName}}
      </p>
      <p class="title">主体号码</p>
      <p>
        {{SubjectInfo.SubjectNumber}}
      </p>
      <p class="title">地址</p>
      <p>
        {{StoreInfo.Region}} {{StoreInfo.Address}}
      </p>
    </div>
    <div class="article">
      <p class="title">纠纷解决指引</p>
      <p>
        版权、商标权（如被抄袭、假冒商标）或人身权（如被侮辱、毁谤）、其他合法权益可以根据详细信息进行协商，或报案、诉讼、仲裁等方式解决
      </p>
    </div>
    </div>
</template>

<script>
import header from '../../components/header.vue'
import banner from './banner.vue'
import * as api from '../../api/store'

export default {
    components: {
        'mi-header': header,
        'mi-banner':banner
    },
    data(){
        return{
            StoreInfo:{},
            SubjectInfo:{
                SubjectName:'',
                SubjectNumber:''
            }
        }
    },
    mounted(){
        this.StoreId=sessionStorage.StoreId
        this.fatchData()
    },
    methods:{
        goPageWithName(pageName){
            this.$router.replace({name:pageName})
        },
        fatchData(){
            let params = {
                Id:this.StoreId
            };
            api.HomeInfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.StoreInfo=res.data.StoreInfo
                        this.SubjectInfo=res.data.SubjectInfo
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>

.navbar{
    display:flex;
    border-bottom:1px solid #eee;
    background:#fff;
    .item{
        padding:0.5rem;
        width:50%;
        text-align:center;
        border-bottom:1px solid #fff;
        svg{
            width:2rem;
            height:2rem;
            margin-bottom:0.2rem;
        }
    }
    .active{
        color:#096;
        border-color:#096;
        svg{
            fill:#096;
        }
    }
}
.article{
    color:#666;
    padding:1rem;
    border-bottom:0.05rem solid #ccc;
    .title{
        color:#333;
        padding:0.5rem 0;
        font-size:1.3rem;
    }
  }
</style>


