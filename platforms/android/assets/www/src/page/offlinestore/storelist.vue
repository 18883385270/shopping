<template>
    <div class="pagewp" >
        <ul>
            <li class="storewarp" v-for="store in storelist" :key="store.Id">
                <div class="divider"></div>
                    <div class="storecont">
                        <div class="pic pd-md">
                            <img :src="store.Thumb" alt="">
                        </div>
                        <div class="name">
                            <p>{{store.Name}}</p>
                            <span class="distance">
                                <svg>
                                    <use xlink:href="#gps"></use>
                                </svg>
                                {{store.Distance}}
                            </span>
                            <p class="text-gray text-s marg-top-sm">{{store.Address}}</p>
                            <p class="marg-top-sm">
                                <span class="label label-success" v-for="label in store.Labels" :key="label">{{label}}</span>
                            </p>
                        </div>
                    </div>
                    <div class="btns">
                        <div class="callphone">
                          <svg>
                            <use xlink:href="#mobile"></use>
                          </svg>
                          <a :href="'tel:'+store.Phone"> {{store.Phone}}</a>
                        </div>
                        <div class="text-green" @click="toSpendPage(store)">线下消费</div>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["storelist"],
  methods: {
    toSpendPage(store) {
      sessionStorage.OfflineStore = JSON.stringify(store);
      this.$router.push({ name: "spend" });
    }
  }
};
</script>

<style lang="less" scoped>
.storewarp {
  list-style: none;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  .storecont {
    display: flex;
    .pic {
      width: 30%;
      img {
        width: 100%;
      }
    }
    .name {
      width: 70%;
      padding: 1rem 1rem 1rem 0;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    

    .distance {
      float: right;
      font-size: 1.2rem;
      font-weight: 400;
      color: #999;
      svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: #999;
      }
    }
  }

  .btns {
    display: flex;
    border-top: 1px solid #eee;
    .callphone{
        a{
          color:#666;
          text-decoration:none;
        }
    }
    > div {
      width: 50%;
      text-align: center;
      padding: 1rem 0;
      border-left: 1px solid #eee;
      font-size: 1.3rem;
      line-height:1.5rem;
      svg{
        width:1.3rem;
        height:1.3rem;
        fill:#666;
      }
      &:first-child {
        border-left: 0;
      }
    }
  }
}
</style>


