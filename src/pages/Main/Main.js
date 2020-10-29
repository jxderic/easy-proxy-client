/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-10-23 14:32:34
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-10-29 16:30:29
 */
import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import style from './style/main.module.scss'
import logo from '@/assets/image/logo.jpg'
import { Switch, Redirect, Route, withRouter, Link } from 'react-router-dom'
import ProjectManageAsync from './ProjectManage/PeojectManage.async'
import PluginManageAsync from './PluginManage/PluginManage.async'
import { ProjectOutlined, BugOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;

class Main extends Component {
  constructor(props) {
    super(props)
    const { location } = props
    const match = /^\/main\/(.*?)(\/.*)?$/.exec(location.pathname)
	  this.page = match ? match[1] : 'project-manage'
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img src={ logo } alt="图片" className={style.logo} />
          <h3 className={style.title}>Easy Proxy</h3>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.page]} onClick={this.changeMenu}>
            <Menu.Item key="project-manage">
              <Link to="/main/project-manage/list">
                <ProjectOutlined />
                项目管理
              </Link>
            </Menu.Item>
            <Menu.Item key="plugin-manage">
              <Link to="/main/plugin-manage">
                <BugOutlined />
                插件管理
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={style['site-layout']}>
          <Header className={style['site-layout-background']} style={{ padding: 0 }} />
          <Content>
            <Switch>
              <Route path="/main/project-manage" component={ProjectManageAsync} />
              <Route path="/main/plugin-manage" component={PluginManageAsync} />
              <Redirect path="/main" to="/main/project-manage/list" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Main)
