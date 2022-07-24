<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      text-color="#000"
      router
    >
      <menu-tree v-for="item in data" :key="item" :menu="item"></menu-tree>
    </el-menu>
  </div>
</template>

<script setup>
import MenuTree from './menuTree'
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = ref([])
// const isCollapse = ref(true)
const getMenuList = async () => {
  const res = await store.dispatch('user/getmenu')
  // console.log(res)
  data.value = res.data.data.menus
}
getMenuList()
</script>
<style scoped lang="scss">
.el-menu {
  border-right: solid 1px var(--el-menu-border-color);
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: var(--el-menu-bg-color);
  box-sizing: border-box;
}
</style>
