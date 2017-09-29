<template>
    <div>
        <mi-header title="扫描结果"></mi-header>
        <div class="scannerresult">
            <p>扫描到以下内容</p>
            <div class="theresut">
                {{ScannerResult}}
            </div>
            <p class="text-gray">扫描所得内容并非五福天下商城提供，请谨慎使用，如需使用，可通过复制操作获取内容</p>
        </div>
    </div>
</template>

<script>
import header from '../../components/header.vue';
export default {
    components: {
        'mi-header': header
    },
    data() {
        return {
            ScannerResult: ''
        }
    },
    mounted() {
        this.ScannerResult=sessionStorage.ScannerResult
    }
}
</script>

<style lang="less" scoped>
.scannerresult {
    padding: 2rem;
    margin-top: 6rem;
    text-align: center;
    font-size:1.3rem;
    line-height:2rem;
    .theresut{
        margin:1rem auto;
        padding:1rem;
        border:1px solid #eee;
        font-size:1.5rem;
        word-wrap: break-word;
        word-break:break-all;
    }
}
</style>

