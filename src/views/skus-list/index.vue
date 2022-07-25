<template>
  <div>
    <el-card>
      <div class="depressed button">
        <div class="zuo">
          <el-button size="small" type="primary">新增</el-button>
          <el-button size="small" type="danger">批量删除</el-button>
        </div>
      </div>
      <el-table :data="tableData">
        <el-table-column type="selection" width="55" />
        <el-table-column label="规格名称" property="name"> </el-table-column>
        <el-table-column property="default" label="规格值" />
        <el-table-column property="order" label="排序" />
        <el-table-column property="status" label="状态">
          <template #default>
            <el-switch v-model="status" />
          </template>
        </el-table-column>
        <el-table-column label="操作" property="address">
          <template #default>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const tableData = ref([])
const getshop = async () => {
  const res = await store.dispatch('user/getsku')
  console.log(res)
  tableData.value = res.data.data.list
  // console.log(res.data.data.list)
}
getshop()
</script>
<style scoped lang="scss">
.depressed button {
  float: left;
}
</style>
