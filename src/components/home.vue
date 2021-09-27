<template>
  <div class="home-wrap">
    <img src="../assets/img/2222.png" alt="图片">
    <div class="verse">
      <p>少年易老学难成，</p>
      <p>一寸光阴不可轻。</p>
      <p>未觉池塘春草梦，</p>
      <p>阶前梧叶已秋声。</p>
    </div>
    <p class="btn" @click="jumpLogin">点击查看更多>>></p>
  </div> 
</template>
<script >
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const jumpLogin = ()=>{
      router.push('/login')
    }
    return{
      jumpLogin,
    }
  },
})
</script>
<style scoped>
.home-wrap{
  position: relative;
}
img{
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.btn{
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 4px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover{
  background: rgba(255,255,255,0.7);
  color: #1b157b;
}
.verse{
  position: absolute;
  left: 200px;
  top: 100px;
  color: #fff;
  font-size: 28px;
}

</style>

