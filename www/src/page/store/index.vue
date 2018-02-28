<template>
    <div>
        <mi-header title="店铺首页"></mi-header>
        <!-- <mi-storesearch></mi-storesearch> -->
        <mi-banner :StoreInfo="StoreInfo"></mi-banner>
        <div class="navbar">
            <div class="item active">
                <svg>
                    <use xlink:href="#storeline"></use>
                </svg>
                <p>
                    首页
                </p>
            </div>
            <div class="item" @click="goSubjectPage">
                <svg>
                    <use xlink:href="#identitycardline"></use>
                </svg>
                <p>
                    资料
                </p>
            </div>
        </div>
        <mi-goodses :Goodses="Goodses"></mi-goodses>
    </div>
</template>

<script>
import header from '../../components/header.vue'
import banner from './banner.vue'
import goodses from './goodses.vue'
import * as api from '../../api/store'

export default {
    props:{
        id:{
            type:String,
            default:''
        }
    },
    components: {
        'mi-header': header,
        'mi-banner': banner,
        'mi-goodses':goodses
    },
    data(){
        return{
            StoreInfo:{},
            Goodses:[]
        }
    },
    mounted(){
        this.StoreId=this.id
        this.fatchData()
    },
    methods:{
        goSubjectPage(){
            this.$router.replace({name:'subject',params:{id:this.StoreId}})
        },
        fatchData(){
            let params = {
                Id:this.StoreId
            };
            api.HomeInfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.StoreInfo=res.data.StoreInfo
                        this.Goodses=res.data.Goodses
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
</style>


