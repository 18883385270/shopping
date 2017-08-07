<template>
    <div class="basicwarp">
        <div class="name">
            {{basicInfo.name}}
        </div>
        <div class="why">致贫原因：{{basicInfo.why}}</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            basicInfo: {
                "id": 1,
                "name": "求求大家救救我儿子吧，孩子恶性肿瘤复发",
                "why": "孤寡老人",
                "isauthed": true
            }
        }
    }
}
</script>

<style lang="less" scoped>
.basicwarp {
    padding: 1rem;background:#fff;
    .name {
        font-size: 1.3rem;
    }
    .desc {
        font-size: 1rem;
        color: #666;
        padding: 1rem 0;
    }
    .why{
        font-size:1rem;margin-top:0.5rem;
    }
}
</style>


