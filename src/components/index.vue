<template>
  <el-container class="box-wrap">
    <el-aside :class="!isCollapse ? 'maxAside' : 'minAside'" class="aside">
      <div class="admin-name">
        <img class="logo" src="../assets/img/favicon-copy.png" alt="">
        <p class="name" v-show="!isCollapse">VueAdmin</p>
      </div>
      <el-menu
        background-color='transparent'
        text-color='#fff'
        active-text-color='#41b883'
        default-active="taskList"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>教学管理</span>
          </template>
          <el-menu-item index="taskList">任务列表</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="userList">
          <i class="el-icon-menu"></i>
          <template #title>用户列表</template>
        </el-menu-item>
        <el-menu-item index="recordList">
          <i class="el-icon-document"></i>
          <template #title>数据看板</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <p class="expand" @click="handleMenuExpand">🧵</p>
        <div class="user-data">
          <img :src="userInfo.mediumAvatar" alt="">
          <p>{{userInfo.nickname}}</p>
        </div>
      </el-header>
      <el-main class="content">
        <router-view v-if="!keepAlive"></router-view>
        <router-view v-slot="{ Component }" v-if="keepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script >
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = useStore()
    const isCollapse = ref(false)
    const userInfo = store.state.userInfo
    const handleMenuExpand = ()=>{
        isCollapse.value = !isCollapse.value
    }
    let keepAlive = route.meta.keepAlive
    
    return{
      isCollapse,
      handleMenuExpand,
      keepAlive,
      userInfo
    }
  },
})
</script>
<style scoped>
.box-wrap{
  height: 100vh;
}
.logo{
  width: 30px;
  object-fit: cover;
}
.header{
  background: #fff;
  color: #131532;
  box-shadow: 1px 1px 10px #ccc;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
}
.user-data img{
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.expand{
  height: 100%;
  line-height: 60px;
  margin: 0;
  cursor: pointer;
}
.aside{
  width: 200px;
  background: #131532;
  height: 100%;
  color: #fff;
  border-right: 4px solid #333a9b;
  transition:width 1s;
  overflow-x: hidden;
}
.maxAside{
  width: 200px; 
}
.minAside{
   width: 80px;
}

.admin-name{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1d46;
  height: 70px;
}
.admin-name p{
  margin-left: 10px;
}

</style>
<style>
.el-menu{
  border: none !important;
  min-height: calc(100% - 70px);
}
.expand{
  display: inline-block !important;
}

</style>
