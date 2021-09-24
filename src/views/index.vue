<template>
  <el-container class="box-wrap">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
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
  background: #1F323C;
  color: #fff;
}
.aside{
  background: #1F323C;
  height: 100%;
  color: #fff;

}

</style>
