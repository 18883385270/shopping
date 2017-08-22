<template>
    <div>
        <div :class="{screen: focus}">
            <div class="top">
                <!--正常状态的背景-->
                <div class="bg" v-show="!focus"></div>
                <!--搜索状态下的背景-->
                <div class="bg_focus" v-show="focus"></div>
    
                <div class="main-head">
                    <div class="left" v-if="!focus" @click="backPage">
                        <svg>
                            <use xlink:href="#leftarrowsline"></use>
                        </svg>
                        <span>返回</span>
                    </div>
                    <div class="left" v-if="focus" @click="goBackEvent">
                        <svg>
                            <use xlink:href="#leftarrowsline"></use>
                        </svg>
                        <span>返回</span>
                    </div>
                    <div class="center">
                        <input type="text" placeholder="搜索商品" @focus="handleFocus" v-model="inputText" />
                    </div>
                    <div class="right" v-if="!focus">
                        <svg>
                            <use xlink:href="#filterline"></use>
                        </svg>
                    </div>
                    <div class="right searchbtn" v-if="focus">
                        <button @click="doSearch">搜索</button>
                    </div>
                </div>
            </div>
            <div class="main" v-show="focus">
                <div>
                    <div class="title">最近搜索</div>
                    <ul>
                        <li v-for="item in hotWord" @click="inputFillEvent(item)">{{ item }}</li>
                    </ul>
                </div>
                <div>
                    <div class="title">热门搜索</div>
                    <ul>
                        <li v-for="item in hotWord" @click="inputFillEvent(item)">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="load" ref="loading" id="load"></div>
        <div style="height:4rem;"></div>
    </div>
</template>

<script>
export default {
    props: ['search'],
    data() {
        return {
            focus: false,
            inputText:'',
            hasbackground: this.hasbg,
            hasborder: this.hasbr,
            hotWord: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲']
        };
    },
    watch: {
        search(val){
            this.inputText=val;
        }
    },
    methods: {
        handleFocus() {//搜索
            this.focus = true;
            //广播搜索事件
            this.$emit('searchEvent', true);
        },
        goBackEvent() {//取消搜索
            this.focus = false;
            this.$emit('searchEvent', false);
        },
        inputFillEvent(word) {
            this.inputText = word;
        },
        backPage(){
            this.$router.go(-1);
        },
        doSearch(){
            if(this.inputText.length>1)
            {
                this.$router.replace({name:'jumppage',params:{type:'Search',search:this.inputText}});
            }
        }
    }
};
</script>

<style lang="less" scoped>
.screen {
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
}

.absolute100 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.top {
    /*搜索条*/
    width: 100%;
    height: 4rem;
    font-size: 0;
    position: fixed;
    color: #fff;
    z-index: 3;

    .bg {
        width: 100%;
        height: 100%;

        border-bottom: 1px solid #ddd;
        background: white;
    }
    .bg_focus {
        .absolute100;
        border-bottom: 1px solid #ddd;
        background: white;
    }
    .main-head {
        display: flex;
        .absolute100;
        .left {
            width: 20%;
            text-indent: 1rem;
            span {
                margin-top: 0.9rem;
                line-height: 3.6rem;
                font-size: 1.3rem;
                color: #666;
                font-weight: 400;
            }
            svg {
                fill: #666;
                margin-top: 0.9rem;
                margin-left: 1rem;
                height: 2rem;
                width: 1rem;
                float: left;
            }
        }
        .headIcon {
            height: 3rem;
            width: 3rem;
        }
        .center {
            width: 65%;
            font-size: 1.6rem;
            vertical-align: top;
            input {
                border: 0;
                width: 100%;
                font-size: 1.3rem;
                padding: 0.6rem 0;
                text-indent: 1rem;
                margin: 0.6rem 0 0 0;
                outline: none;
                background: #efefef;
                border-radius: 3px;
            }
        }
        .right {
            width: 15%;
            text-align: center;
            vertical-align: top;
            svg{
                width:2rem;height:2rem;fill:#666;
                margin-top:1rem;
            }
            button {
                padding: 0.45rem 0.8rem;
                font-size: 1.2rem;
                border-radius: 0.2rem;
                margin: 0.7rem auto 0 0;
                background: #096;
                color: white;
                border: 0;
            }
        }
    }
}

.main {
    /*内容*/
    width: 100%;
    margin: 4rem 0 0 0;
    >div {
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;
    }
    .title {
        line-height: 4rem;
        color: #333;
        text-indent: 1rem;
    }
    img {
        width: 100%;
    }
    ul {
        padding: 0 1rem;
        li {
            list-style-type: none;
            padding: 0.5rem;
            margin: 0.5rem;
            display: inline-block;
            background: #eee;
            border: 1px solid #ccc;
        }
    }
}
</style>
