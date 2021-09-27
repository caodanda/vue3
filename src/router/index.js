import {createRouter, createWebHistory} from 'vue-router'
import {getCookie} from '../utils/cookie'


const routes = [
  {
    path:'/',
    redirect:'/home',
    component:()=>import('../components/home.vue'),
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../components/home.vue'),
    meta: { requiresAuth: false }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../components/login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path:'/index',
    name:'index',
    component:()=>import('../components/index.vue'),
    meta: { requiresAuth: true },
    children:[
      {
        path:'/taskList',
        name:'taskList',
        component:()=>import('../views/taskList.vue'),
        meta: { 
          requiresAuth: true,
          keepAlive:true,
        },
      },
      {
        path:'/recordList',
        name:'recordList',
        component:()=>import('../views/recordList.vue'),
        meta: { 
          requiresAuth: true,
          keepAlive:true,
        },
      },
      {
        path:'/userList',
        name:'userList',
        component:()=>import('../views/userList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path:'/taskDetail',
        name:'taskDetail',
        component:()=>import('../views/taskDetail.vue'),
        meta: { requiresAuth: true },
      },
    ]
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


