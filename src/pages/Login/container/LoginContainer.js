/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-11-18 13:57:55
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-18 14:44:17
 */
import { connect } from 'react-redux'
import { setToken } from '@/redux/modules/Global'
import Login from '../Login'

const mapStateToProps = state => {
  return {
    token: state
  }
}

const mapDispatchProps = dispatch => {
  return {
    changeToken: token => {
      dispatch(setToken(token))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchProps)(Login)

export default LoginContainer