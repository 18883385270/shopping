<template>
        <div class="top" :class="{br:hasborder}">
            <div class="bg" :style="bgOpacSty"></div>
            <div class="main-head">
                <div class="left">
                    <svg @click="leftBtnEvent">
                        <use xlink:href="#storeline"></use>
                    </svg>
                </div>
                <div class="center" @click="toPage('search')">
                    <input type="text" placeholder="搜索商品/店铺" disabled/>
                </div>
                <div class="right">
                    <svg @click="rightBtnEvent">
                        <use xlink:href="#qrscanline"></use>
                    </svg>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    props: ['opac','hasbg','hasborder'],
    data() {
        return {
            bgOpacSty: {
                opacity: this.hasbg ? 1 : 0,
            },
        };
    },
    watch: {
        opac() {
            if (!this.hasbackground) {
                this.bgOpacSty.opacity = this.opac;
            }
        }
    },
    methods: {
        handleFocus() {
            this.focus = true;
            this.$emit('searchEvent');
        },
        leftBtnEvent() {
            this.$emit('searchLeftBtnEvent');
        },
        rightBtnEvent() {
            this.$emit('searchRightBtnEvent');
        },
        toPage(page)
        {
            this.$router.push({name:page});
        }
    }
};
</script>

<style lang="less" scoped>
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
    &.br {
        border-bottom: 1px solid #ddd;
    }
    .bg {
        .absolute100;
        background: white;
    }

    .main-head {
        .absolute100;
        display: flex;
        .left {
            width: 15%;
            text-align: center;
            svg {
                fill: #666;
                margin-top: 0.8rem;
                height: 2rem;
                width: 2rem;
            }
        }
        .headIcon {
            height: 3rem;
            width: 3rem;
        }
        .center {
            width: 70%;
            vertical-align: top;
            input {
                width: 95%;
                line-height: 3rem;
                height: 3rem;
                padding: 0 0 0 5%;
                margin: 0.5rem 0 0 0;
                border:0;
                outline: none;
                text-indent: 1rem;
                border-radius: 3rem;
                background: #efefef;
            }
        }
        .right {
            width: 15%;
            text-align: center;
            vertical-align: top;
            svg {
                height: 4rem;
                width: 2rem;
                fill: #333;
            }
            button {
                padding: 0.4rem 0.5rem;
                font-size: 1.2rem;
                border-radius: 0.2rem;
                background: #C1272D;
                color: white;
                margin-top: 0.8rem;
                border: 0;
            }
        }
    }
}
</style>
