<template>
    <div>
        <mi-header title="提交转账凭证"></mi-header>
        <div class="tocardpicker">
            <div class="cardinfo">
                <p class="tlt">工商银行（尾号7975）</p>
                <p>选择您的付款银行信息</p>
            </div>
            <div class="changecard">
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="withdrawamount">
            <p>已转账金额￥</p>
            <input type="number" placeholder="输入您的转账金额" v-model="withdrawamount" />
            <p class="desc">注意：这里的转账金额要和您实际转账金额相符，否则会导致会计审核不通过，造成充值失败
            </p>
        </div>
        <div class="withdrawamount">
            <p>转账凭证</p>
            <div>

            </div>
            <p class="desc">如果有多次转账，请多次提交转账信息
            </p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'

export default {
    components: {
        'mi-header': header
    }
}
</script>

<style lang="less" scoped>

</style>


