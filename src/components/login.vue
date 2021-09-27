<template>
  <div class="login-wrap">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFormRef" >
      <h3>后台管理系统</h3>
      <el-form-item prop="account" label="账号">
        <el-input  v-model="loginForm.account" type="text"  placeholder="登录账号（身份证号/手机号）"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input  v-model="loginForm.pwd" type="password" minlength='6' maxlength="16" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <div class="btn-wrap">
        <el-button type="primary" @click="submit">登录</el-button>
        <el-button type="info">忘记密码</el-button>
      </div>
    </el-form>
  </div>
</template>
<script >
import { defineComponent, } from 'vue'
import useLogin from '../hook/useLogin'
export default defineComponent({
  setup() {
    let {loginForm,loginRules,loginFormRef,submit} = useLogin()
    return{
      loginForm,
      loginRules,
      loginFormRef,
      submit,
    }
  },
})
</script>

<style scoped>
.login-wrap{
  background: rgba(204,204,204,0.5);
  width: 100%;
  height: 100vh;
  position: relative;
}
.login-form{
  box-sizing: border-box;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  padding: 10px 20px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
}
.btn-wrap{
  text-align: right;
}

</style>
