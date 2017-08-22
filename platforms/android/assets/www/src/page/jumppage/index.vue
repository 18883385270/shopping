<template>
  <div></div>
</template>
<<script>
//调整页，解决产品列表页无法搜索问题
export default {
    created(){
        //获取传递过来的参数然后导航到产品列表页
        this.$router.replace({name:'goodslist',params:this.$route.params});
    }
}
</script>

<style lang="less" scoped>

</style>


