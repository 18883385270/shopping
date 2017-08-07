<template>
    <div class="granteeinfopagewarp">
        <mi-header title="受助人详情"></mi-header>
        <mi-basicinfo></mi-basicinfo>
        <mi-statisticsinfo></mi-statisticsinfo>
        <div class="geifuinfo">
            <div class="tlt">已受助金额将全部给付给受助人</div>
            <div>
                2亿用户信赖的爱心公益平台，腾讯，红杉等资本投资
            </div>
        </div>
        <mi-detailinfo></mi-detailinfo>
        <mi-testify></mi-testify>
        <mi-authinfo></mi-authinfo>
        <mi-helplist></mi-helplist>

        <div style="width:100%;height:6rem"></div>
        <div class="helpbar">
            <div class="collect">
                <svg><use xlink:href="#starline"></use></svg>
                收藏
            </div>
            <div class="collect bglf">
                <svg><use xlink:href="#shareline"></use></svg>
                分享
            </div>
            <div class="help" @click="goPage()">帮助TA</div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue';
import basicinfo from './basicinfo.vue';
import statisticsinfo from './statisticsinfo.vue';
import detailinfo from './detailinfo.vue';
import authinfo from './authinfo.vue';
import testify from './testify.vue';
import helplist from './helplist.vue';

export default {
    components: {
        'mi-header': header,
        'mi-basicinfo': basicinfo,
        'mi-statisticsinfo': statisticsinfo,
        'mi-detailinfo': detailinfo,
        'mi-authinfo': authinfo,
        'mi-testify':testify,
        'mi-helplist':helplist
    },
    methods:{
        goPage(){
            this.$router.push({path:'/grantee/info/tohelp'});
        }
    }
}
</script>

<style lang="less" scoped>
.granteeinfopagewarp {
    width: 100%;
    font-size: 1.5rem;

    .geifuinfo {
        padding: 1rem;
        background: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin-top: 1rem;font-size:1rem;
        .tlt {
            font-size: 1.3rem;
            margin-bottom: 0.3rem;
            color: green;
        }
    }
    .helpbar {
        display: flex;
        position: fixed;
        height:4rem;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #eee;
        .collect {
            width: 20%;text-align:center;font-size:1rem;
            svg{
                width:1.5rem;height:1.5rem;fill:#ccc;display:block;
                margin:0.6rem auto 0.2rem auto;
            }
        }
        .bglf{
            border-left: 1px solid #eee;
        }
        
        .help {
            width: 60%;
            background: #c33;
            color: #fff;
            text-align: center;
            padding: 1rem 0;
        }
    }
}
</style>


