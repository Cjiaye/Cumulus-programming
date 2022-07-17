<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-aside></app-aside>
        </el-aside>
        <el-container>
          <el-main>
            <app-main></app-main>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppAside from './Aside/Menu.vue'
import AppMain from './Main'
import AppHeader from './header'
</script>
<style scoped lang="scss">
.el-header {
  background-color: pink;
  width: 100%;
  margin-top: -7px;
  margin-left: -8px;
}
</style>
