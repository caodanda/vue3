import request from '../request/index'

// export function login(params,headers){
//   return request.post('',params,headers)
// }

// 登录
export function login(params,headers) {
  return request.post(`/api/login`, params, headers)
}