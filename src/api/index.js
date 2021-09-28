import request from '../request/index'

// 登录
export function login(params,headers) {
  return request.post(`/api/login`, params, headers)
}

export function userInfo(params) {
  return request.get('/api/userinfo', { params })
}

// 获取沟通记录列表
export function getContactList(params) {
  return request.get(`/api/admin/edu/contact/record/list`, { params });
}

