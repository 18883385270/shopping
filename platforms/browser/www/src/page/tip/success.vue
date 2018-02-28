<template>
    <div>
        <div class="pageheader">
            <div class="left">
            </div>
            <div class="center">成功</div>
            <div class="right">
            </div>
        </div>
        <div class="succinfo">
            <svg>
                <use xlink:href="#ok"></use>
            </svg>
            <div class="tlt">{{TipInfo.Message}}</div>
            <div v-if="TipInfo.Amount>0" class="amount pd">{{TipInfo.Amount | currency('￥',2)}}</div>
            <div class="pd-top text-gray">{{TipInfo.Remark}}</div>
        </div>
        <div class="pd">
            <button class="button success" @click="goPage">确定</button>
        </div>
    </div>
</template>

<script>
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
    },
    data() {
        return {
            TipInfo:{
                Type:'PaySuccess',
                Amount:0,
                Message:'',
                NextPage:'/me',
                Remark:''
            }
        }
    },
    mounted() {
        if(!checkJs.isNullOrEmpty(sessionStorage.TipInfo)){
            this.TipInfo=JSON.parse(sessionStorage.TipInfo)
        }
    },
    methods:{
        goPage(){
            this.$router.replace({name:this.TipInfo.NextPage})
        }
    }
}
</script>


<style lang="less" scoped>
.succinfo {
    text-align: center;
    padding: 2rem 1rem;
    svg {
        width: 6rem;
        height: 6rem;
        fill: #096;
        margin:1rem auto;
    }
    .tlt {
        font-size: 1.6rem;
        color: #096;
        margin-top:1rem;
    }
    .amount{
        font-size:3rem;
    }
}
</style>

