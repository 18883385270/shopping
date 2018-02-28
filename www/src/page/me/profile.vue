
<template>
    <div class="bgprofile text-white">
        <div class="flexwarp pd-topbtn-sm">
            <div class="wd-20p text-center pd marg-lf"  @click="goPage('profile')">
                <img class="wd-100p img-round" :src="this.$store.state.global.userinfo.Portrait"  />
            </div>
            <div class="wd-50p pd-lf pd-top" @click="goPage('profile')">
                <h3>{{this.$store.state.global.userinfo.NickName}}
                </h3>
                <div class="text-sm pd-top-sm">{{this.$store.state.global.userinfo.Mobile|mobilehide}}</div>
                <div class="marg-top">
                    <span class="label label-success">{{this.$store.state.global.userinfo.Role}}</span>
                    <span class="label label-warning" v-if="this.$store.state.global.userinfo.StoreId">已开店</span>
                </div>
            </div>
            <div class="wd-20p text-right pd-top marg-rt">
                <svg class="icon icon-white" @click="goPage('notifications')">
                    <use xlink:href="#msgline"></use>
                </svg>
                <svg class="icon icon-white marg-lf" @click="goPage('scannerpage')">
                    <use xlink:href="#qrscanline"></use>
                </svg>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
        goPage(page) {
            this.$router.push({ name: page });
        }
    }
}
</script>

<style lang="less" scoped>
    .bgprofile{
        padding-top:1rem;
        background:#a1afc9 url('../../../dist/profilebg.png') no-repeat center center;
    }
</style>


