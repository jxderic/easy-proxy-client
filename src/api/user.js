import http from './http'

// 登录
export function signin(params) {
	return http.post('signin', params, { errorNotify: false })
}

// 登出
export function signout(params) {
	return http.post('signout', params)
}

// 用户信息
export function useInfo() {
	return http.post('userInfo')
}
