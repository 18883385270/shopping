/*
帮他作证的人
*/
<template>
  <div class="testifywarp">
    <div class="head">
      <div class="title">已有52人帮Ta证实</div>
      <div class="platformdesc">点击查看</div>
    </div>
    <div class="testifyls">
      <table>
        <tr>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
          <td>
            <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
          </td>
        </tr>
      </table>
    </div>
    <div class="testifybtn">
      <button type="button">帮Ta证实</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.testifywarp {
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-top: 1rem;
  width: 100%;
  .head {
    border-bottom: 1px solid #ddd;
    width: 100%;
    display: flex;
    .title {
      font-size: 1.3rem;
      line-height: 2rem;
      padding: 1rem;
      width: 50%;
    }
    .platformdesc {
      width: 50%;
      color: green;
      line-height: 2rem;
      font-size:1rem;
      padding: 1rem;
      text-align: right;
      font-weight: 500;
    }
  }
  .testifyls {
    margin: 1rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    table {
      tr {
        td {
          height: 5rem;
          width: 5rem;
          text-align: center;
          padding: 0.5rem;
          img {
            width: 4.5rem;
            border-radius: 50%
          }
        }
      }
    }
  }
  .testifybtn {
    padding: 0 1rem 1rem 1rem;
    button {
      display: block;
      width: 100%;
      margin-top: 1rem;
      border: 0;
      border-radius: 3px;
      padding: 1.3rem 0;
      text-align: center;
      color: #fff;
      background: #c33;
      font-size: 1.3rem;
    }
  }
}
</style>
