<template>
    <div>
        <div class="pageheader">
            <div class="left">
            </div>
            <div class="center">失败</div>
            <div class="right">
            </div>
        </div>
        <div class="succinfo">
            <svg>
                <use xlink:href="#x"></use>
            </svg>
            <div class="tlt">{{TipInfo.Message}}</div>
            <div class="remark">{{TipInfo.Remark}}</div>
        </div>
        <div class="pd">
            <button class="button err" @click="goPage">确定</button>
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
                Type:'',
                Message:'付款时间已到',
                NextPage:'',
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
        fill: #c03;
        margin:1rem auto;
    }
    .tlt {
        font-size: 1.6rem;
        color: #c03;
        margin-top:1rem;
    }
}
</style>

