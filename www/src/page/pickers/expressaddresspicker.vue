<template>
    <transition name="animateBase">
        <div class="shade" v-show="isModalShow">
            <div class="header">
                <svg @click="back">
                    <use xlink:href="#leftarrowsline"></use>
                </svg>
                <span class="tlt">选择收货地址</span>
            </div>
            <div class="shuoming">
                选择收货地址
            </div>
    
            <div class="bankitem" v-for="(expressaddress,index) in expressaddresses" @click="selectit(index)">
                <div class="cnt">
                    <p>{{expressaddress.Region}} {{expressaddress.Address}}</p>
                    <p>{{expressaddress.Name}} {{expressaddress.Mobile|mobilehide}}</p>
                </div>
                <div class="mark">
                    <svg :class="{selected:index==currentindex}">
                        <use xlink:href="#ok"></use>
                    </svg>
                </div>
            </div>
            <div class="bankitem" @click="toPage('/me/profile/expressaddress/add')">
                <div class="cnt newcard">
                    <p>使用新地址</p>
                </div>
            </div>
    
        </div>
    </transition>
</template>

<script>
import * as api from '../../api/account'

export default {
    data() {
        return {
            isModalShow: false,
            currentindex: 0,
            expressaddresses: []
        }
    },
    mounted() {
        //请求用户收件地址数据
        let params = {};
        api.GetUserExpressAddressesApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    this.expressaddresses = res.data.ExpressAddresses;
                    this.selectit(0);
                } else {
                    console.log("返回错误码：" + res.data.Code);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    methods: {
        close: function () {
            this.isModalShow = false;
        },
        show: function () {
            this.isModalShow = true;
        },

        back() {
            this.close();
            return;
        },
        selectit(index) {
            this.currentindex=index;
            this.$emit('expressaddressPickerEvent', this.expressaddresses[index]);
            this.close();
        },
        toPage(page) {
            this.$router.push({ path: page })
        }
    }
}
</script>


<style lang="less" scoped>
.header {
    height: 4rem;
    background: #fff;
    text-align: center;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: #666;
        float: left;
        margin: 1.3rem 0 0 1rem;
    }
    .tlt {
        font-size: 1.3rem;
        line-height: 4rem;
    }
}

.shuoming {
    padding: 1rem;
}

.bankitem {
    display: flex;
    background: #fff;
    padding: 1rem;
    border-top: 1px solid #eee;
    .cnt {
        width: 80%;
        font-size: 1.3rem;
    }
    .newcard {
        padding: 1rem 0;
    }
    .mark {
        width: 20%;
        text-align: right;
        svg {
            width: 1.3rem;
            height: 1.3rem;
            fill: #999;
            margin-top: 0.8rem;
            &.selected{
                fill:#096;
            }
        }
    }
}

.shade {
    width: 100%;
    height: 100%;
    background: #eee;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10001;
}
</style>

