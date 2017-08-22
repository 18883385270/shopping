<template>
    <div v-if="Announcement.Title">
        <div class="announcementwarp" @click="GoAnnouncementInfo">
            <span class="title">
                <svg>
                    <use xlink:href="#ok"></use>
                </svg>
                系统公告：</span>
            <span class="info">{{Announcement.Title|truncate(20)}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['Announcement'],
    methods: {
        GoAnnouncementInfo(){
            this.$router.push({name:'announcementinfo',params:{Announcemnet:this.Announcement}})
        }
    }
}
</script>

<style lang="less" scoped>
.announcementwarp {
    padding: 1rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #fff;
    .title {
        font-size: 1.3rem;
        display: inline-block;
        width: 30%;
        svg{
            width:1.3rem;
            height: 1.3rem;
            fill:#333;
        }
    }
    .info {
        display: inline-block;
        width: 70%;
        text-align: right;
    }
}
</style>


