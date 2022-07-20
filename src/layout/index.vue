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
            <div class="tag">
              <tags-view></tags-view>
            </div>
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
import TagsView from '../components/TagsView'
</script>
<style scoped lang="scss">
.el-header {
  --tw-bg-opacity: 1;
  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));
  width: 100%;
  margin-top: -7px;
  margin-left: -8px;
}
.tag {
  height: 50px;
  margin-top: -34px;
  overflow: hidden;
  margin-left: -65px;
}

.el-aside {
  height: 100%;
}
</style>
