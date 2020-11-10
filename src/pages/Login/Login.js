import React, { Component } from 'react'
import logo from '@/assets/image/logo.jpg'
// import cs from 'classnames'
import style from './style/login.module.scss'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signin } from '@/api/user'

export default class Login extends Component {
  constructor () {
    super()
    this.onFinish = async (values) => {
      const { data } = await signin(values)
    };
    this.onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  }
  render() {
    const layout = {
      wrapperCol: { span: 24 },
    };
    const tailLayout = {
      wrapperCol: {
        span: 24,
      },
    };
    return (
      <div className={style.login_container}>
        <img src={ logo } alt="图片" className={style.logo} />
        <h3 className={style.title}>Easy Proxy</h3>
        <div className={style.login_wrap}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size="large" placeholder="请输入用户名"  prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large" prefix={ <LockOutlined /> } placeholder="请输入密码" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" block htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
        <p>© Powered By jxderic</p>
      </div>
    )
  }
}

