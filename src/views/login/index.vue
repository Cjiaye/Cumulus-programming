柠柒:
<template>
  <div class="login">
    <div class="left-box">
      <h1>欢迎光临</h1>
    </div>
    <div class="right-box">
      <div class="login-form">
        <h2>欢迎回来</h2>
        <!-- 登陆验证表单 -->
        <el-form :model="loginForm" ref="LoginForm" :rules="loginRules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const LoginForm = ref()
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})

const loginRules = {
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}

const handleSubmitForm = () => {
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    await store.dispatch('user/login', loginForm)
    router.push('/')
  })
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left-box {
    width: 67%;
    height: 100vh;
    background-color: rgba(100, 102, 237);
    h1 {
      color: white;
      font-size: 3rem;
      text-align: center;
      line-height: 100vh;
    }
  }
  .right-box {
    width: 33%;
    height: 100vh;
    background-color: white;
    position: relative;
    .login-form {
      width: 54%;
      font-size: 1.4rem;
      text-align: center;
      position: absolute;
      /* 向右、向下移动父盒子的一半 （偏移量） */
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 80%;
        height: 1.65rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }
      :deep(.el-input__inner) {
        font-size: 0.375rem;
        height: 1.875rem;
      }
      .el-button {
        padding: 8px 15px;
        width: 16rem;
        border-radius: 14px;
        background-color: rgba(100, 102, 237);
        border: none;
      }
    }
  }
}
</style>
