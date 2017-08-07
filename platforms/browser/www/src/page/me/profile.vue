/*
* 个人信息
*/
<template>
    <div class="profilewp">
        <div class="warp">
            <div class="portrait">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1733071988,3600838707&fm=117&gp=0.jpg" />
            </div>
            <div class="name" @click="goPage('/me/profile')">
                <h3>夏天的风
                </h3>
                <span class="phone">Id:13561962764</span>
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
            <span class="primary">传递大使</span>
            <span class="warning">店主</span>
            <span class="success">运营中心负责人【宿迁】</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openMyQrCode() {
            console.log("openmyqrcode");
            //广播事件
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
    padding: 1rem 0rem;
    background: #fff;
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
                width: 2.5rem;
                height: 2.5rem;
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


