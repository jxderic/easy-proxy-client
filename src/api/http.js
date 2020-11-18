import axios from 'axios'
import {
	message
} from 'antd'
import history from '../history'
import store from '@/redux/createStore'

const http = axios.create({
	baseURL: '/eric-api/easy-proxy/',
	withCredentials: true,
	timeout: 30000,
	errorNotify: true,
	successNotify: true
})

// 请求拦截器
http.interceptors.request.use(function (config) {
	// 校验token
	const state = store.getState()
	const token = state.tokenReducer.token
	if (token) {
		localStorage.setItem('token', token)
	}
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

http.interceptors.response.use(success, error)

function success(response) {
	const result = response.data
  const config = response.config
	const { code, msg } = result
	if (code !== 0) {
		msg && config.errorNotify && message.error(msg)
	}
	return result
}

function error(error, config) {
	if (error.response.status === 401) {
		history.push('/login')
	}
	console.log(error)
	return Promise.reject(error)
}

export default http

