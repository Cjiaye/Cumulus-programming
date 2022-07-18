<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      text-color="#000"
      router
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><Odometer /></el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><HomeFilled /></el-icon>
          主控台</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          分类管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          规格管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          优惠券管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          用户管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          会员等级</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          订单管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          评论管理</el-menu-item
        >
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          管理员管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          权限管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          角色管理</el-menu-item
        >
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          基础设置</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          交易设置</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          物流设置</el-menu-item
        >
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>分销模块</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          分销员管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          分销设置</el-menu-item
        >
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>其他模块</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          图库管理</el-menu-item
        >
        <el-menu-item index="1-1">
          <el-icon><Aim /></el-icon>
          公告管理</el-menu-item
        >
      </el-sub-menu> -->
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
const getMenuList = async () => {
  const res = await store.dispatch('user/getmenu')
  console.log(res)
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
