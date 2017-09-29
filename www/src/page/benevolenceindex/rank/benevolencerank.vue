<template>
    <div>
        <mi-header title="善心排行榜"></mi-header>
        <div class="topthreebg">
            <div class="topthreewp">
                <div class="item" v-for="WalletAlis in TopThree">
                    <p class="touxiang">
                        <img :src="WalletAlis.Portrait" alt="">
                    </p>
                    <p class="amount">{{WalletAlis.Benevolence}}</p>
                    <p>{{WalletAlis.NickName}}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="listwp" v-for="(WalletAlis,index) in LastSeven">
                <div class="index">{{index+4}}</div>
                <div class="port">
                    <img :src="WalletAlis.Portrait" alt="">
                </div>
                <div class="name">
                    {{WalletAlis.NickName}}
                </div>
                <div class="amount">
                    {{WalletAlis.Benevolence}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/benevolenceindex'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            WalletAlies:[],
            TopThree:[],
            LastSeven:[]
        }
    },
    mounted(){
        this.fatchData()
    },
    methods: {
        goPage(page) {
            this.$router.push({name:page})
        },
        fatchData(){
            let params = {};
            api.BenevolenceRankApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.WalletAlies=res.data.WalletAlises;
                        this.TopThree=this.WalletAlies.slice(0,3)
                        this.LastSeven=this.WalletAlies.slice(3,7)
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
   .topthreebg{
        background:#f66;
        padding:1rem;
    } 
    .topthreewp{
        display:flex;
        .item{
            width:33.3%;
            padding:1rem;
            text-align:center;
            background:#fff;
            .touxiang{
                img{
                    width:4rem;
                    height:4rem;
                    border-radius:50%;
                }
            }
            .amount{
                font-size:1.5rem;
                padding:0.5rem 0;
            }
        }
    }
    .listwp{
        display:flex;
        text-align:center;
        border-bottom:1px dashed #eee;
        .index{
            width:10%;
            line-height:5rem;
            font-size:1.3rem;
        }
        .port{
            width:15%;
            padding:0.5rem 1rem;
            img{
                width:4rem;
                height:4rem;
                border-radius:50%;
            }
        }
        .name{
            width:45%;
            font-size:1.3rem;
            line-height:5rem;
            text-align:left;
        }
        .amount{
            width:30%;
            font-size:1.5rem;
            line-height:5rem;
            padding-right:1rem;
            text-align:right;
        }
    }
</style>
