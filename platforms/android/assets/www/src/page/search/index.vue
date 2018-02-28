<template>
    <div>
        <mi-header title="搜索商品"></mi-header>
        <div class="banner">
            <h4>
                搜商品，消费得福豆，赚收益
            </h4>
            <h3>最高
                <span>4倍</span> 福豆奖励</h3>
            <p>۞ 福豆价值为商品售价4倍 ۞</p>
            <div class="searchbar">
                <div class="lefticon">
                    <svg>
                        <use xlink:href="#searchline"></use>
                    </svg>
                </div>
                <div class="centerinput">
                    <input ref="searchinput" type="text" v-model="inputText">
                </div>
                <div class="rightbutton" @click="doSearch">
                    去搜索
                </div>
            </div>
        </div>
        <div class="searchword">
            <div class="title">最近搜索</div>
            <ul>
                <li v-for="item in LatestWords" @click="inputFillEvent(item)">{{ item }}</li>
            </ul>
        </div>
        <div class="searchword">
            <div class="title">热门搜索</div>
            <ul>
                <li v-for="item in HotWords" @click="inputFillEvent(item)">{{ item }}</li>
            </ul>
        </div>
        
    </div>
</template>


<script>
import header from '../../components/header.vue'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-header': header
    },
    data() {
        return {
            inputText: '',
            LatestWords: ['充电宝', 'Ipad', '小米5s', '笔记本', '自行车', '空调', '小米电视', '连衣裙', '牛仔裤'],
            HotWords: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲'],
        }
    },
    mounted() {
        //获取本地最近搜索项目
        if (!checkJs.isNullOrEmpty(sessionStorage.LatestWords)) {
            this.LatestWords = JSON.parse(sessionStorage.LatestWords)
        }
        this.$nextTick(_ => {
            this.$refs.searchinput.focus();
        });
    },
    methods: {
        doSearch() {
            //添加最近搜索
            if (this.inputText.length >= 1) {
                this.LatestWords.pop();//删除最后一个
                this.LatestWords.splice(0, 0, this.inputText);//添加到第一个
                sessionStorage.LatestWords = JSON.stringify(this.LatestWords)

                //通过jumppage调整到产品列表页
                var goodsFilter = {
                    Type: 'Search',
                    Search: this.inputText,
                    CategoryId: ''
                }
                sessionStorage.GoodsFilter = JSON.stringify(goodsFilter)
                this.$router.push({ name: 'goodslist' });
            }
        },
        inputFillEvent(word) {
            this.inputText = word;
        },
    }
}
</script>

<style lang="less" scoped>
.banner {
    background: #f66;
    padding: 3rem 1rem;
    h4 {
        font-weight: 200;
        font-size: 1.6rem;
        text-align: center;
        color: #fff;
        margin-bottom: 1rem;
    }
    h3 {
        font-weight: 200;
        text-align: center;
        color: #fff;
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        span {
            font-size: 2rem;
            color: #fc0;
        }
    }
    p {
        text-align: center;
        color: #fff;
    }
}

.searchbar {
    margin-top: 2rem;
    display: flex;
    .lefticon {
        width: 15%;
        text-align: center;
        background: #fff;
        border-radius: 30px 0 0 30px;
        svg {
            width: 1.7rem;
            height: 1.7rem;
            margin-top: 0.7rem;
            fill: #f66;
        }
    }
    .centerinput {
        width: 65%;
        background: #fff;
        input {
            font-size: 1.3rem;
            width: 100%;
            padding: 0.8rem 0;
            border: 0;
            color: #999;
            outline: none;
        }
    }
    .rightbutton {
        width: 20%;
        line-height: 3.2rem;
        font-size: 1.3rem;
        color: #fff;
        background: #f93;
        text-align: center;
        border-radius: 0 30px 30px 0;
    }
}

.searchword {
    padding-bottom: 1.5rem;

    .title {
        line-height: 4rem;
        color: #333;
        text-indent: 1rem;
    }
    ul {
        padding: 0 1rem;
        li {
            list-style-type: none;
            font-size: 1.1rem;
            padding: 0.3rem 0.5rem;
            margin: 0.5rem;
            color: #999;
            display: inline-block;
            border: 1px solid #eee;
        }
    }
}
</style>

