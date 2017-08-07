<template>
    <div class="profilepgwp">
        <mi-header title="个人资料"></mi-header>
        <div class="tablerow mg-top20">
            <div class="tlt">我的头像</div>
            <div class="cnt">
                <img class="portrait" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1733071988,3600838707&fm=117&gp=0.jpg" />
            </div>
        </div>
        <div class="tablerow mg-top20">
            <div class="tlt">手机号</div>
            <div class="cnt">
                13561962764
            </div>
        </div>
        <div class="tablerow" @click="goPage('/me/profile/expressaddress')">
            <div class="tlt">收货地址管理</div>
            <div class="cnt">
    
            </div>
        </div>
        <div class="tablerow mg-top20">
            <div class="tlt">登录密码</div>
            <div class="cnt">
    
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">支付密码</div>
            <div class="cnt">
    
            </div>
        </div>
        <div class="logoutbtn">
            <button>退出登录</button>
        </div>
    
    </div>
</template>

<script>
import header from '../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    },
    methods: {
        goPage(page){
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less" scoped>
.profilepgwp {

    .tablerow {
        width: 100%;
        display: flex;
        background: #fff;
        border-bottom: 1px solid #eee;
        align-items: center;
        .tlt {
            width: 50%;
            font-size: 1.3rem;
            font-weight: 400;
            padding: 1.2rem 0;
            text-indent: 1rem;
            vertical-align: center;
        }
        .cnt {
            width: 50%;
            text-align: right;
            padding: 1.2rem 0;
            margin-right: 1rem;
            font-size: 1.3rem;
            color:#999;
            img.portrait {
                width: 5rem;
                height: 5rem;
            }
        }
    }
    .mg-top20 {
        margin-top: 1rem;
    }
    .logoutbtn {
        padding: 2rem 1rem;
        button {
            display: block;margin:auto;
            background: #C1272D;
            font-size: 1.3rem;
            color: #fff;
            border: 0;width:95%;
            padding:1.3rem 0;border-radius: 3px;
        }
    }
}
</style>

