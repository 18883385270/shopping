<template>
    <div class="exadd">
        <div class="tlt">收货地址</div>
        <div class="cnt">
            <p> 江苏 宿迁 宿豫区 洪泽湖东路19号汇成大厦5楼</p>
            <p>夏兆维 13561962764</p>
        </div>
        <div class="change">
            <svg>
                <use xlink:href="#rightarrowsline"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.exadd {
    display: flex;
    background: #fff;
    font-weight: 400;
    font-size:1.2rem;
    border-bottom: 4px solid transparent;
    border-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAyIj48dGl0bGU+cG9zdGFsbGluZTwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PHBvbHlnb24gcG9pbnRzPSI1IDIgMCAyIDIgMCA3IDAgNSAyIiBzdHlsZT0iZmlsbDojZjE1YTI0Ii8+PHBvbHlnb24gcG9pbnRzPSIxMiAyIDcgMiA5IDAgMTQgMCAxMiAyIiBzdHlsZT0iZmlsbDojMjlhYmUyIi8+PHBvbHlnb24gcG9pbnRzPSI3IDIgNSAyIDcgMCA5IDAgNyAyIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9nPjwvZz48L3N2Zz4=") 70 0 round;
    .tlt {
        width: 10%;
        padding: 1.3rem 1rem;
        color: #999;
    }
    .cnt {
        width: 80%;
        padding: 0.5rem;
        padding: 1rem;
    }
    .change {
        width: 10%;
        padding: 1.3rem 1rem;
        text-align: right;
        svg {
            width: 1.3rem;
            height: 1.3rem;
            fill: #333;
            margin-top: 1.3rem;
        }
    }
}
</style>

