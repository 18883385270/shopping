/*

说明：模态框
1.标签：vModal
2.默认状态：checked
3.是否显示头部：为了友好手机端，默认设置不显示头部(不写就可以了)，如需要显示：isHeadShow = true
4.父组件关闭弹窗操作：this.$refs.{refName}.modalHide()
5.类型：type = 'pop'、'alert'、'confirm' 三种任选其一。
6.内容分发：slot为容器。宽度100%，高度自定义

7.不明白 参考hello2示例，都有写

示例：
<vModal ref="modal" :isHeadShow="自己定义的变量"></vModal>

<vModal ref="alert" type="alert" @alertEvent="alertBtnEvent">
    <div slot="alert"> 我是一个alert弹窗</div>
</vModal>

*/


<template>
    <transition name="animateBase">
        <div class="shade" v-show="isModalShow" @click="modalBgHide">
            <div class="modal-box">
                <div class="modal">
                    <div class="main" @click.stop="popupClick" :class="{fullscreen:isfullscreen}">
                        <div class="pop" v-if="type == 'pop'"><!-- modal 弹窗 -->
                            <div class="head" v-show="isHeadShow">
                                <span class="title">{{title}}</span>
                                <span class="close" @click.stop="modalClose">
                                    <svg><use xlink:href="#closeline"></use></svg>
                                </span>
                            </div>
                            <div class="body" :style="{height:bodyHeight}">
                                <slot name="modalbody"></slot>
                            </div>
                            <div class="foot">
                                <slot name="modalfoot"></slot>
                            </div>
                        </div>

                        <div v-if="type == 'alert'"><!-- alert 弹窗 -->
                            <div class="alert">
                                <div class="top">
                                    <slot name="alert"></slot>
                                </div>
                                <div class="bottom">
                                    <button @click="alert_BtnEvent">确 认</button>
                                </div>
                            </div>
                        </div>

                        <div v-if="type == 'confirm'"><!-- confirm 弹窗 -->
                            <div class="confirm">
                                <div class="top">
                                    <slot name="confirm"></slot>
                                </div>
                                <div class="bottom">
                                    <button @click="confirm_BtnEvent(1)" class="radius-left">确 认</button>
                                    <button @click="confirm_BtnEvent(0)" class="radius-right">取 消</button>
                                </div>
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
    props: ['isHeadShow', 'type','title','isfullscreen'],
    data () {
        return {
            isModalShow: false,
            bodyHeight:'100',
            fullscreen:this.isfullscreen? this.isfullscreen:false
        };
    },
    mounted(){
        console.log(this.fullscreen);
        if(this.fullscreen){
            console.log(util.screenSize().height);
            this.bodyHeight=util.screenSize().height+'px';
        }
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
        },
        alert_BtnEvent: function () {
            this.modalClose();
            this.$emit('alertEvent');
        },
        confirm_BtnEvent: function (num) {
            // 等待填充内容
            this.modalClose();
            this.$emit('confirmEvent', num);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .shade {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
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
                vertical-align: middle;
                display: table-cell;
                text-align: center;
                .main {
                    display: inline-block;
                    text-align: left;
                    width: 80%;
                    transition: all 0.3s ease;
                    .pop {
                        background: #fff;
                        .head {
                            width: 100%;
                            background: #C1272D;
                            .close {
                                width: 1.5rem;
                                height: 2rem;
                                float: right;
                                margin: 1rem;
                                cursor: pointer;
                                text-align: center;
                                line-height: 2rem;
                                color: #fff;
                                svg{
                                    width: 1.5rem;height: 1.5rem;fill:#fff;
                                }
                            }
                            .title {
                                width: 100%;
                                line-height: 4rem;
                                color: #fff;
                                font-size: 1.5rem;
                                text-align: center;
                                padding-left: 1.5rem;
                            }
                        }
                    }
                    .alert {
                        width: 100%;
                        display: block;
                        border-radius: 1rem;
                        background: #fff;
                        .top {
                            width: 92%;
                            padding: 1.5rem 4%;
                        }
                        .bottom {
                            width: 100%;
                            height: 4.5rem;
                            button {
                                width: 100%;
                                height: 100%;
                                background: #fff;
                                border: none;
                                border-top: 0.1rem solid #56aeb0;
                                font-size: 1.3rem;
                                color: #108d93;
                                border-radius: 0 0 1rem 1rem;
                                outline: none;
                                &:active {
                                    transition: background 0.2s ease;
                                    background: #ddd;
                                }
                            }
                        }
                    }
                    .confirm {
                        width: 100%;
                        display: block;
                        border-radius: 1rem;
                        background: #fff;
                        .top {
                            width: 92%;
                            padding: 1.5rem 4%;
                        }
                        .bottom {
                            width: 100%;
                            height: 4.5rem;
                            button {
                                width: 50%;
                                height: 100%;
                                background: #fff;
                                border: 0.1rem solid #ddd;
                                float: left;
                                font-size: 1.3rem;
                                color: #333;
                                outline: none;
                                &:active {
                                    transition: background 0.2s ease;
                                    background: #ddd;
                                }
                                &.radius-left {
                                    border-radius: 0 0 0 1rem;
                                    border-right: none !important;
                                }
                                &.radius-right {
                                    border-radius: 0 0 1rem 0;
                                }
                            }
                        }
                    }
                }
                .fullscreen{
                    width:100%;
                }
            }
        }
    }

    .animateBase-enter,
    .animateBase-leave-active {
        opacity: 0;
    }
</style>
