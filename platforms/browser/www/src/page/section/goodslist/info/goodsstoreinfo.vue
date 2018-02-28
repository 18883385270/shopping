<template>
    <div class="gstroewp">
        <div class="infowp">
            <div class="storeicon">
                <svg>
                    <use xlink:href="#storeline"></use>
                </svg>
            </div>
            <div class="storecont">
                <p class="tlt">
                    {{StoreInfo.Name}}
                    <span v-if="StoreInfo.Type=='自营'" class="label">自营</span>
                </p>
                <p>{{StoreInfo.Description}}</p>
            </div>
        </div>
        <div class="storebtn">
            <button @click="goStorePage">
                进入店铺</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['StoreInfo'],
    methods: {
        goStorePage() {
            //sessionStorage.StoreId = this.StoreInfo.Id
            this.$router.push({ name: 'store',params:{id:this.StoreInfo.Id} })
        },
    }
}
</script>

<style lang="less" scoped>
.gstroewp {
    padding: 1rem;
    color: #666;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .infowp {
        display: flex;
    }
    .storeicon {
        width: 10%;
        svg {
            width: 2.5rem;
            height: 2.5rem;
            fill: #ccc;
            margin-top:0.3rem;
        }
    }
    .storecont {
        width: 90%;
        margin-left:1rem;
    }
    .tlt {
        font-size: 1.3rem;
        color: #000;
        margin-bottom: 0.5rem;
        .label {
            display: inline-block;
            background: #c03;
            color: #fff;
            padding: 0 0.5rem;
            border-radius: 2px;
            font-size: 1.1rem;
            margin-left: 1rem;
        }
    }
    .storebtn {
        margin-top: 1rem;
        button {
            width: 100%;
            outline: none;
            border: 1px solid #eee;
            border-radius: 3px;
            background: #fff;
            font-size: 1.2rem;
            padding: 0.8rem 0;
            color: #666;
        }
    }
}
</style>


