<template>
  <div class="catwarp">
    <table>
      <tr>
        <td @click="changeSelect(index)" :class="{active:index==selected}" v-for="(category,index) in cats">
          <div>{{category}}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['categorys','CurrentIndex'],
  data() {
    return {
      cats: this.categorys,
      selected: 0
    }
  },
  watch:{
    CurrentIndex:function(newval){
      this.selected=newval;
    }
  },
  methods: {
    changeSelect(index) {
      this.selected = index;
      this.$emit("categoryChanged",index);
    }
  }
}
</script>


<style lang="less" scoped>
.catwarp {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
  background: #fff;
   &::-webkit-scrollbar {
    display: none;
  }
  table {
    border:0;
    border-spacing: 0;
    tr {
      td {
        text-align: center;
        border-bottom: 1px solid #fff;
        div {
          min-width:6rem;
          padding: 0.8rem 0.3rem;
        }
        &.active {
          color: green;
          border-bottom-color: green;
        }
      }
    }
  }
}
</style>

