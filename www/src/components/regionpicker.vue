/*地区选择器 */
<template>
    <transition name="animateBase">
        <div class="shade" v-show="isModalShow">
            <div class="header">
                <svg @click="backlist">
                    <use xlink:href="#leftarrowsline"></use>
                </svg>
                <span class="tlt">选择地区</span>
            </div>
            <div class="regionsection" v-if="gpsval.length>0 && currentlevel==0">
                <p>定位地址</p>
                <div class="regioncnt">
                    <svg>
                        <use xlink:href="#gps"></use>
                    </svg> {{gpsval}}</div>
            </div>
            <div class="regionsection" v-if="selectedval.length>0 && currentlevel==0">
                <p>已选地区</p>
                <div class="regioncnt"> {{selectedval}}</div>
            </div>
            <div class="regionsection">
                <p>全部地址</p>
                <ul>
                    <li v-for="(item,index) in currentlist" @click="changelist(index)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    data() {
        return {
            isModalShow: false,
            currentlevel: 0,
            gpsval: '',
            selectedval: '',
            currentlist: [

            ],
            regiondata: [
                {
                    "name": "山东",
                    "subdata": [
                        {
                            "name": '日照',
                            "subdata": [
                                { "name": '东港区' },
                                { "name": '岚山' },
                                { "name": '五莲' },
                                { "name": '莒县' },
                            ]
                        },
                        {
                            "name": '青岛',
                            "subdata": [
                                { "name": '市南区' },
                                { "name": '市北区' },
                                { "name": '崂山区' },
                                { "name": '黄岛区' },
                            ]
                        }]
                },
                {
                    "name": "江苏",
                    "subdata": [
                        {
                            "name": '宿迁',
                            "subdata": [
                                { "name": '宿豫去' },
                                { "name": '宿城区' },
                                { "name": '沭阳' },
                            ]
                        },
                        {
                            "name": '连云港',
                            "subdata": [
                                { "name": '联运区' },
                                { "name": '市区' },
                                { "name": '山区' },
                                { "name": '岛区' },
                            ]
                        }]
                }
            ]
        }
    },
    mounted() {
        this.currentlevel = 0;
        this.currentlist = this.regiondata;
    },
    methods: {
        close: function () {
            this.isModalShow = false;
        },
        show: function () {
            this.isModalShow = true;
            this.selectedval = '';
            this.currentlevel = 0;
            this.currentlist = this.regiondata;
        },
        changelist(index) {
            if (this.currentlevel == 0) {//如果是首层
                this.currentlist = this.regiondata[index].subdata;
                this.selectedval = this.regiondata[index].name;
                this.currentlevel++;
                return;
            }
            if (this.currentlevel == 1) {
                var newlist = this.currentlist[index].subdata;
                var newval = this.currentlist[index].name;
                this.selectedval += newval;
                this.currentlevel++;
                this.currentlist = newlist;
                return;
            }
            if (this.currentlevel == 2) {
                this.selectedval += this.currentlist[index].name;
                this.$emit('regionPickerEvent', this.selectedval);
                this.close();
            }
        },
        backlist() {
            console.log(this.currentlevel);
            if (this.currentlevel == 0) {
                this.close();
                return;
            }
            this.currentlevel = this.currentlevel - 1;
            this.changelist(0);
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
        margin: 1.3rem 0 0 1rem;
        float: left;
    }
    .tlt {
        font-size: 1.3rem;
        line-height: 4rem;
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

.regionsection {
    p {
        font-size: 1.3rem;
        padding: 1rem;
        font-weight: 400;
    }
    .regioncnt {
        background: #fff;
        padding: 1rem;
        font-size: 1.4rem;
        svg {
            width: 1.3rem;
            height: 1.3rem;
            fill: green;
        }
    }
    li {
        list-style: none;
        background: #fff;
        font-size: 1.4rem;
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }
}

.animateBase-enter,
.animateBase-leave-active {
    opacity: 0;
}
</style>

