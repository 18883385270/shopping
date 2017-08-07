/*地区选择组件 */
<template>
    <div>
        <mi-header title="选择地区"></mi-header>
        <div class="regionsection">
            <p>定位地址</p>
            <div class="regioncnt">
                <svg>
                    <use xlink:href="#gps"></use>
                </svg> 江苏 宿迁</div>
        </div>
        <div class="regionsection">
            <p>已选地区</p>
            <div class="regioncnt"> 江苏 宿迁</div>
        </div>
        <div class="regionsection">
            <p>全部地址</p>
            <ul>
                <li>北京</li>
                <li>上海</li>
                <li>天津</li>
                <li>山东</li>
                <li>江苏</li>
                <li>湖南</li>
                <li>湖北</li>
                <li>浙江</li>
            </ul>
        </div>
        <div></div>
    </div>
</template>

<script>
import header from '../../components/header.vue';

export default {
    components: {
        'mi-header': header
    }
}
</script>


<style lang="less" scoped>
.regionsection {
    p {
        font-size: 1.3rem;
        padding: 1rem;
        font-weight: 400;
    }
    .regioncnt {
        background: #fff;
        padding: 1rem;
        font-size: 1.4rem;
        svg {
            width: 1.3rem;
            height: 1.3rem;
            fill: green;
        }
    }
    li {
        list-style: none;
        background: #fff;
        font-size: 1.4rem;
        padding: 1rem;border-bottom:1px solid #eee;
    }
}
</style>

