<template>
  <el-container class="box-wrap">
    <el-aside width="200px" class="aside">
      <div class="admin-name">
        <img src="../assets/img/favicon-copy.png" alt="">
        <p >Vue Admin</p>
      </div>

    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="content">Main</el-main>
    </el-container>
  </el-container>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
<style scoped>
.box-wrap{
  height: 100vh;
}
.header{
  background: #EEF2F5;
  color: #fff;
}
.aside{
  background: #131532;
  height: 100%;
  color: #fff;
}
.admin-name{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1d46;
}
.admin-name p{
  margin-left: 10px;
}

</style>
