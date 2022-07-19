<template>
   
  <el-menu-item
    v-if="item.child && item.child.length == 0"
    :index="item.frontpath"
  >
    <el-icon><el-button type="" text :icon="item.icon"></el-button></el-icon
    ><span>{{ item.name }}</span>  
  </el-menu-item>
  <el-sub-menu v-else :index="item.icon + ''">
       
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
<style scoped lang="scss">
.el-sub-menu {
  margin-top: -21px;
}
.el-menu-item {
  margin-top: -20px;
}
</style>
