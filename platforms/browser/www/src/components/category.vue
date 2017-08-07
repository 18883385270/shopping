/*
受助人分类
*/

<template>
  <div class="catwarp">
    <table>
      <tr>
        <td @click="changeSelect(index)" v-bind:class="{active:index==selected}" v-for="(category,index) in cats">
  
          <div>{{category}}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['categorys'],
  data() {
    return {
      cats: this.categorys,
      selected: 1
    }
  },
  methods: {
    changeSelect(index) {
      this.selected = index;
    }
  }
}
</script>


<style lang="less" scoped>
.catwarp {
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
   &::-webkit-scrollbar {
    display: none;
  }
  table {
    border:0;
    tr {
      td {
        text-align: center;
        div {
          min-width:6rem;
          padding: 1rem;
          font-size: 1.3rem;
        }
        &.active {
          color: green;
          border-bottom: 2px solid green;
        }
      }
    }
  }
}
</style>

