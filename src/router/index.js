import {createRouter, createWebHistory} from 'vue-router'
import {getCookie} from '../utils/cookie'


const routes = [
  {
    path:'/',
    redirect:'/home',
    component:()=>import('../views/home.vue'),
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../views/home.vue'),
    meta: { requiresAuth: false }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path:'/index',
    name:'index',
    component:()=>import('../views/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path:'/404',
    name:'404',
    component:()=>import('../components/404.vue'),
  },
  // 方法二 404
  // { 
  //   path: '/:pathMatch(.*)*', 
  //   name: '404', 
  //   component:()=>import('../components/404.vue'),
  // }
]



const router =  createRouter({
  history:createWebHistory(),
  routes
})

let token = getCookie('token')
router.beforeEach((to, from, next)=>{
  // 方法一
  if(to.matched.length === 0){
    next('/404')
    return
  }
  if(to.meta.requiresAuth && !token){
    next({
      path:'/login',
      // 登录后重定向到具体页面
      query: { redirect: to.fullPath }
    })
  }else{
    next()
  }
})


export default router


