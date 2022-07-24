<template>
  <div>
    <el-card>
      <el-button type="primary" style="margin-left: 16px"> 新增 </el-button>
      <div class="fl" v-for="(item, index) in getsort" :key="index">
        <div class="zuo">
          <span>{{ item.name }}</span>
        </div>
        <br />
        <br />
        <div class="you">
          <el-button size="small" type="text">新增</el-button>
          <el-switch v-model="value1" />
          <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const getsort = ref([])
const store = useStore()
const fl = async () => {
  const res = await store.dispatch('user/getsort')
  console.log(res)
  getsort.value = res.data.data
  console.log(res.data.data)
}
fl()
</script>
<style scoped lang="scss">
.fl {
  width: 100%;
  height: 40px;
  .zuo {
    float: left;
    margin-left: 20px;
    margin-top: 5px;
    span {
      font-size: 15px;
    }
  }
  .you {
    float: right;
  }
}
</style>
