import axios from 'axios'
import {ElMessage} from 'element-plus'
import {getCookie} from '@/utils/cookie.js'

const request = axios.create({
  baseURL:process.env.VUE_APP_URL,
  timeout:10000
})

let token = getCookie('token')
request.interceptors.request.use(config=>{
  if(token){
    config.headers.Authorization = token
  }
  return config
})

request.interceptors.response.use(
  res=>{
    if(res.data.status === 0){
      return res
    }else{
      ElMessage(res.data.message)
      return Promise.reject(res)
    }
  },
  err=>{
    return Promise.reject(err)
  }
)


export default request