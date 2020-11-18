import React, { Component } from 'react'
import { Layout } from 'antd';
import style from './style/ProjectList.module.scss'
import { Button, Table, Select, Space, Typography, Divider } from 'antd';
import { ReloadOutlined, CompassOutlined, PauseOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Column } = Table;
const { Option } = Select;

export default class ProjectList extends Component {
  constructor() {
    super()
    this.state = {
      deleteDisabled: true
    }
  }
  handleChange = () => {

  }
  filterConfig = (options) => {
    const selectOption = options.filter(item => item.select)
    return selectOption[0]
  }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    };
    const data = [
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111111',
        configs: [
          {
            configDetail: '',
            name: '213as',
            select: false,
            _id: '231111'
          },
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          }
        ]
      },
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111112',
        configs: [
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          },
          {
            configDetail: '',
            name: '21323',
            select: false,
            _id: '231112'
          }
        ]
      },
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111113',
        configs: [
          {
            configDetail: '',
            name: '21343',
            select: false,
            _id: '2311123'
          },
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          }
        ]
      },
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111114',
        configs: [
          {
            configDetail: '',
            name: '21123',
            select: false,
            _id: '231115'
          },
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          }
        ]
      },
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111115',
        configs: [
          {
            configDetail: '',
            name: '2113',
            select: false,
            _id: '231117'
          },
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          }
        ]
      },
      {
        name: 'wadx',
        port: 22129,
        status: 0,
        _id: '1111116',
        configs: [
          {
            configDetail: '',
            name: '21',
            select: false,
            _id: '231118'
          },
          {
            configDetail: '',
            name: '21323',
            select: true,
            _id: '231112'
          }
        ]
      }
    ]
    const pagination = {
      pageSize: 5
    }
    return (
      <Content style={{ margin: '24px 16px 0' }}>
        <div className={style['site-layout-background']} style={{ padding: 24, minHeight: 360 }}>
          <div className={style.btn_wrap}>
            <Button type="primary" className={style.add_btn}>添加</Button>
            <Button disabled={this.state.deleteDisabled}>删除</Button>
          </div>
          <Table dataSource={data} rowSelection={rowSelection} pagination={pagination}>
            <Column title="名称" dataIndex="name" key="1" />
            <Column title="配置文件" dataIndex="configs" key="2" render={
              configs => (
                <Select defaultValue={this.filterConfig(configs)._id} style={{ width: 120 }} onChange={this.handleChange}>
                  {
                    configs.map(item => (
                      <Option value={item._id} key={item._id}>{item.name}</Option>
                    ))
                  }
                </Select>
              )
            }/>
            <Column title="地址" dataIndex="port" key="3" render={
              port => (
                <span>{`http://emptycup.hikvision.com.cn:${port}`}</span>
              )
            } />
            <Column title="目的地" dataIndex="configs" key="4" render={
              configs => (
                <span>{this.filterConfig(configs).configDetail}</span>
              )
            } />
            <Column title="状态" dataIndex="status" key="5" render={
              status => (
                <span className={status ? style.status_start : style.status_stop}>{status ? '已启用' : '已停止'}</span>
              )
            } />
            <Column title="操作"  key="6" render={
              id => (
                <>
                <Space split={<Divider type="vertical" />}>
                  <Button shape="circle" icon={<CompassOutlined />} />
                  <Button shape="circle" icon={<ReloadOutlined />} />
                  <Button shape="circle" icon={<PauseOutlined />} />
                  </Space>
                </>
              )
            } />
            <Column title="编辑" key="7" render={
              id => (
                <>
                  <Space split={<Divider type="vertical" />}>
                    <Typography.Link>修改</Typography.Link>
                    <Typography.Link>删除</Typography.Link>
                  </Space>
                </>
              )
            } />
          </Table>
        </div>
      </Content>
    )
  }
}