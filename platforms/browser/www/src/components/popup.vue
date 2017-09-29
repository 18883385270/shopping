/*
示例：

<vPopup ref="popup">
    <div slot="alert"> 我是一个弹窗</div>
</vPopup>

*/


<template>
    <transition name="animateBase">
        <div class="shade" v-show="isModalShow" @click="modalBgHide">
            <div class="modal-box">
                <div class="modal">
                    <div class="main" @click.stop="popupClick">
                        <div class="pop">
                            <div class="head">
                                <span class="title">{{title}}</span>
                                <span class="close" @click.stop="modalClose">
                                    <svg>
                                        <use xlink:href="#closeline"></use>
                                    </svg>
                                </span>
                            </div>
                            <div class="body">
                                <slot name="modalbody"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import util from '../utils/util.js';

export default {
    props: ['title'],
    data() {
        return {
            isModalShow: false
        };
    },
    mounted() {
        
    },
    methods: {
        popupClick: function () {
        },
        modalClose: function () {
            this.isModalShow = false;
        },
        modalOpen: function () {
            this.isModalShow = true;
        },
        modalBgHide: function () {
            if (this.type === 'pop') {
                this.modalClose();
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
    z-index: 1000;
    .modal-box {
        display: table;
        width: 100%;
        height: 100%;
        .modal {
            vertical-align: bottom;
            display: table-cell;
            text-align: center;
            .main {
                display: inline-block;
                text-align: left;
                width: 100%;
                transition: all 0.3s ease;
                position: relative;
                bottom: 0;
                .pop {
                    background: #fff;
                    .head {
                        width: 100%;
                        background: #eee;
                        .close {
                            width: 1.5rem;
                            height: 2rem;
                            float: right;
                            margin: 1rem;
                            cursor: pointer;
                            text-align: center;
                            line-height: 2rem;
                            color: #333;
                            svg {
                                width: 1.5rem;
                                height: 1.5rem;
                                fill: #333;
                            }
                        }
                        .title {
                            width: 100%;
                            line-height: 4rem;
                            font-size: 1.3rem;
                            text-align: center;
                            padding-left: 1.5rem;
                        }
                    }
                }
            }
        }
    }
}

.animateBase-enter,
.animateBase-leave-active {
    opacity: 0;
}
</style>
