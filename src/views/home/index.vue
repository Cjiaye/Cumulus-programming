<template>
  <div class="home">
    <div class="row">
      <div class="col" v-for="(item, index) in data" :key="index">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span class="zf">{{ item.title }}</span>
              <span class="l"
                ><span class="t">{{ item.unit }}</span></span
              >
            </div>
          </template>
          <div class="text">
            <span class="te">{{ item.value }}</span>
            <div
              class="el-divider--horizontal"
              style="--el-border-style: solid"
            ></div>
          </div>
          <div class="card-header b">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
  <div class="da2">
    <el-row>
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple" />
        <div class="d1">
          <el-icon><User /></el-icon>
          <br />
          <span>用户</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <div class="d2">
          <el-icon><ShoppingCartFull /></el-icon>
          <br />
          <span>商品</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple" />
        <div class="d3">
          <el-icon><Notebook /></el-icon>
          <br />
          <span>订单</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <div class="d4">
          <el-icon><ChatDotSquare /></el-icon>
          <br />
          <span>评价</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple" />
        <div class="d5">
          <el-icon><PictureFilled /></el-icon>
          <br />
          <span>图库</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <div class="d6">
          <el-icon><Bell /></el-icon>
          <br />
          <span>公告</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <div class="d7">
          <el-icon><Collection /></el-icon>
          <br />
          <span>配置</span>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <div class="d8">
          <el-icon><Goods /></el-icon>
          <br />
          <span>优惠券</span>
        </div></el-col
      >
    </el-row>
  </div>

  <div class="bb2">
    <div class="b1">
      <font>订单统计</font>
      <span>近一个月</span>
      <span>近一周</span>
      <span>近24个小时</span>
    </div>
    <div class="b2"></div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()
const data = ref([])

const statistics1 = async () => {
  const res = await store.dispatch('user/statistics1')
  console.log(res)
  data.value = res.data.data.panels
}
statistics1()
</script>
<style lang="scss">
.da2 {
  margin-top: 78px;
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .d1 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: blue;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d2 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: purple;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d3 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: palevioletred;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d4 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: greenyellow;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d5 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: palevioletred;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d6 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: green;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d7 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: gray;
      margin-top: 17px;
      margin-left: 18px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
  .d8 {
    width: 60px;
    height: 80px;
    background: white;
    .el-icon {
      color: yellow;
      margin-top: 17px;
      margin-left: 20px;
    }
    span {
      margin-left: 13px;
      font-size: 15px;
    }
  }
}
.home {
  margin: 15px;
  height: 100px;
  .row {
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    width: 1200px;
    .col {
      max-width: 25%;
      flex: 0 0 25%;
      padding-right: 10px;
      padding-left: 10px;
      .card-header {
        display: flex;
        justify-content: space-between;
        .l {
          display: inline-block;
          width: 25px;
          height: 20px;
          border: 1px solid #b3e19d;
          text-align: center;
          .t {
            color: #67c23a;
            line-height: 20px;
            font-size: 12px;
          }
        }
      }
      .text {
        .te {
          font-size: 1.875rem;
          line-height: 2.25rem;
          justify-content: space-between;
        }
        .el-divider--horizontal {
          display: block;
          height: 1px;
          width: 100%;
          margin: 24px 0;
          border-top: 1px var(--el-border-color) var(--el-border-style);
        }
      }
      .b {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
}

.bb2 {
  width: 310px;
  height: 300px;
  background: pink;
  .b1 {
    width: 100%;
    height: 50px;
    background: yellow;
  }
}
</style>
