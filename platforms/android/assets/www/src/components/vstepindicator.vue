/*
垂直步骤指示器
*/

<template>
    <div class="stepwarp">
        <table class="steptable">
            <tr class="steptr" v-for="step in ExpressSteps">
                <td class="steptd">
                    <i></i>
                    <div class="bgline"></div>
                </td>
                <td class="cnttd">
                    <div>
                        {{step.context}}
                        <p class="time">{{step.time}}</p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props:['ExpressSteps']
}
</script>


<style lang="less" scoped>
.stepwarp {
    padding: 1rem;
    background: #fff;
    .steptable {
        width: 100%;
        border: 0;
        border-spacing: 0;
        .steptr {
            .steptd {
                width: 10%;height:100%;
                vertical-align: top;
                i {
                    display: block;
                    margin: 0 auto;
                    width: 1rem;
                    height: 1rem;
                    background: #06c;
                    border-radius: 50%;
                    margin-top:0.5rem;
                }
                .bgline {
                    width: 1px;
                    height: 100%;
                    margin: 0 auto;
                    background: #06c;
                }
            }
            .cnttd {
                width: 90%;
                vertical-align: top;
                >div {
                    margin-right: 1rem;
                    line-height: 1.8rem;margin-bottom:2rem;color:#666;
                    .time{
                        color:#999;font-size:1rem;font-weight:400;
                    }
                }
            }
            &:first-child{
                .cnttd{
                    >div{
                        color:black;
                    }
                }
            }
            &:last-child {
                .bgline {
                    display: none;
                }
            }
            
        }
    }
}
</style>

