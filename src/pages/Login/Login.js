import React, { Component } from 'react'
import logo from './image/logo.jpg'
// import cs from 'classnames'
import './style/login.less'
import { Form, Input, Button } from 'antd';

export default class Login extends Component {
  constructor () {
    super()
    this.onFinish = (values) => {
      console.log('Success:', values);
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
        offset: 8,
        span: 16,
      },
    };
    return (
      <div className="login_container">
        <img src={ logo } alt="图片" className="logo" />
        <h3 className="title">Easy Proxy</h3>
        <div className="login_wrap">
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
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

