import axios from 'axios'
import {
	message
} from 'antd'
import history from '../history'

const http = axios.create({
	baseURL: '/eric-api/',
	withCredentials: true,
	timeout: 30000,
	errorNotify: true,
	successNotify: true
})

http.interceptors.response.use(success, error)

function success(response) {
	const result = response.data
	const config = response.config
	const { code, msg } = result
	if (code === 0) {
		msg && config.successNotify && message.success(msg)
	} else {
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

