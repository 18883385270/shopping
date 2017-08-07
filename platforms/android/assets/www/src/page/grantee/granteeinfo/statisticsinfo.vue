<template>
    <div class="statisticwarp">
        <div class="head">
            <div class="title">受助信息</div>
            <div class="label"><span>孤寡老人</span></div>
        </div>
        <div class="content">
            <div>40000<p>目标金额(元)</p></div>
            <div>12500<p>已受助(元)</p></div>
            <div>8000<p>已受物品(元)</p></div>
            <div>1710<p>受助次数</p></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.statisticwarp {
    border-top:1px solid #ddd;border-bottom:1px solid #ddd;background:#fff;margin-top:1.2rem;
    .head {
        border-bottom: 1px solid #ddd;
        display: flex;
        width: 100%;
        .title {
            font-size: 1.3rem;
            font-weight: 500;
            line-height: 2rem;
            width: 50%;
            padding: 1rem;
        }
        .label {
            width: 50%;
            padding: 1rem;
            span{
                color:#fff;background:green;display:inline-block;float:right;text-align:center;padding:0.2rem 0.6rem;
                font-size:1rem;
            }
        }
    }
    .content{
        display: flex;padding:1rem;
        >div{
            width:25%;text-align: center;font-size:1.3rem;font-weight:400;color:#962126;
            p{
                font-size:1rem;color:#333;margin-top:0.6rem;
            }
        }
    }
}
</style>

