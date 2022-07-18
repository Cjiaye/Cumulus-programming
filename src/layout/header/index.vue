<template>
  <div class="head">
    <div class="box1">
      <span class="logo">
        <el-icon><ElemeFilled /></el-icon>
        <font>积云编程</font>
      </span>
      <span class="di2">
        <el-icon><RefreshLeft /></el-icon>
      </span>
    </div>
    <div class="box2">
      <span class="qp">
        <el-icon><FullScreen /></el-icon>
      </span>
      <span class="dropdown">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar class="tu" :size="30" />
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="pass">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleCommand = (command) => {
  // console.log(command)
  switch (command) {
    case 'pass':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleLogout = async () => {
  console.log('退出登录')
  localStorage.removeItem('router')
  localStorage.removeItem('authorization')
  localStorage.removeItem('token')
  router.push('/login')
}
const handleToHome = () => {
  console.log('a')
}
</script>
<style scoped lang="scss">
.box1 {
  float: left;
  .logo {
    width: 200px;
    height: 60px;
    padding-left: 96px;
    line-height: 60px;
    .el-icon {
      color: white;
      line-height: 50px;
      height: 50px;
    }
    font {
      color: white;
      padding-left: 5px;
      font-size: 20px;
    }
  }
  .di2 {
    padding-left: 100px;
    .el-icon {
      color: white;
    }
  }
}
.box2 {
  float: right;
  .qp {
    .el-icon {
      color: honeydew;
      margin-top: 22px;
      margin-right: 50px;
    }
  }
  .dropdown {
    width: 50px;
    height: 60px;
    line-height: 60px;
    .el-dropdown {
      color: white;
      line-height: 60px;
    }
  }
}
.tu {
  margin-top: 10px;
}
</style>
