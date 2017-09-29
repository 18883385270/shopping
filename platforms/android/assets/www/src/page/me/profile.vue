/*
* 个人信息
*/
<template>
    <div class="profilewp">
        <div class="warp">
            <div class="portrait">
                <img :src="this.$store.state.global.userinfo.Portrait" />
            </div>
            <div class="name" @click="goPage('/me/profile')">
                <h3>{{this.$store.state.global.userinfo.NickName}}
                </h3>
                <span class="phone">{{this.$store.state.global.userinfo.Mobile|mobilehide}}</span>
            </div>
            <div class="qrCode">
                <svg @click="openMyQrCode">
                    <use xlink:href="#qrcodeline"></use>
                </svg>
                <svg @click="goPage('/me/profile')">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="rolelist">
            <span class="primary">{{this.$store.state.global.userinfo.Role}}</span>
            <span class="warning" v-if="this.$store.state.global.userinfo.StoreId">已开店</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openMyQrCode() {
            this.$emit('openmyqrcode');
        },
        goPage(page) {
            this.$router.push({ path: page });
        }
    }
}
</script>

<style lang="less" scoped>
.profilewp {
    width: 100%;
    background: #fff;
    border-bottom:1px solid #eee;
    .warp {
        display: flex;
        align-items: center;
        >div {
            padding: 1rem 1.6rem;
        }
        .portrait {
            width: 20%;
            img {
                width: 100%;
                border-radius: 4px;
            }
        }
        .name {
            width: 40%;
            padding-left: 0;
            h3 {
                font-weight: 400;
                font-size: 1.3rem;
                margin-bottom: 0.8rem;
                text-indent: 0.5rem;
            }
            .phone {
                display: inline-block;
                padding: 0 0.6rem;
            }
        }
        .qrCode {
            width: 35%;
            text-align: right;
            padding-right: 0rem;
            svg {
                fill: #666;
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
            }
        }
    }
    .rolelist {
        padding: 0 1.5rem 1rem 1.5rem;
        span {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            background: #c33;
            border-radius: 1rem;
            margin-right: 0.6rem;
            color: #fff;
        }
        .primary{
            background:#096;
        }
        .warning{
            background:#f90;
        }
        .success{
            background:#c33;
        }
    }
}
</style>


