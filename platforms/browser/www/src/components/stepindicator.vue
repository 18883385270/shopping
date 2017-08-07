/*
步骤指示器
*/

<template>
    <div class="stepwarp">
        <table class="steptable">
            <tr>
                <td class="steptd" v-for="step in steps">
                    <div class="stepcnt">
                        <p>{{step}}</p>
                        <i>
                            <svg><use xlink:href="#ok"></use></svg>
                        </i>
                    </div>
                    <div class="bgline"></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            steps: ['提交订单', '配送中', '交易完成'],
            currentstep: 1
        }
    }
}
</script>


<style lang="less" scoped>
.stepwarp {
    padding: 1rem;background:#fff;
    .steptable {
        width: 100%;
        border: 0;
        border-spacing: 0;
        .steptd {
            position: relative;
            text-align: center;
            .stepcnt {
                width: 6rem;
                height: 5rem;
                margin: auto;
                text-align: center;
                i {
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-top: 0.4rem;
                    margin-left: 2rem;
                    border: 2px solid #eee;
                    border-radius: 50%;
                    position: absolute;
                    background:#fff;
                    z-index: 2;
                    svg{
                        width:1.5rem;height:1.5rem;fill:#06c;
                    }
                }
            }
            .bgline {
                height: 1px;
                width: 100%;
                background: #06c;
                border: 2px solid #eee;
                border-left: 0;
                border-right: 0;
                position: absolute;
                top: 50%;
            }
            &:first-child {
                .stepcnt {
                    float: left;
                    left: 0;
                }
                .bgline {
                    left: 3rem;
                }
            }
            &:last-child {
                .stepcnt {
                    float: right;
                    right: 0;
                }
                .bgline {
                    right: 3rem;
                }
            }
        }
    }
}
</style>

