<template>
    <div v-if="Announcement.Title">
        <div class="flexwarp pd bd-topbtn" @click="GoAnnouncementInfo">
            <div class="wd-20p">
                <svg style="width:3rem;height:3rem;">
                    <use xlink:href="#gonggao"></use>
                </svg>
            </div>
            <div class="wd-80p">
                <p class="text-sm text-gray">{{Announcement.Title|truncate(40)}}</p>
                <p class="text-sm text-gray">{{Announcement.Title|truncate(30)}}</p>
            </div>
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

</style>


