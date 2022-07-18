<template>
  <el-menu-item v-if="item.child && item.action" :index="item.path">
    <el-icon><el-button text :icon="item.icon"></el-button></el-icon
    ><span>{{ item.name }}</span>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon><el-button type="" text :icon="item.icon"></el-button></el-icon
      ><span>{{ item.name }}</span>
    </template>
    <MenuTree v-for="chi in item.child" :menu="chi" :key="chi"></MenuTree>
  </el-sub-menu>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})
const item = computed(() => {
  return props.menu
})
</script>
<style scoped lang="scss"></style>
