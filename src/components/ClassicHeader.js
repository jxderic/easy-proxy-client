import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import routeConfig from '@/config/routes'
import style from './classicHeader.module.scss'
import { Button, Tooltip, Breadcrumb } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";


class Classicheader extends Component {
  static propTypes = {
    back: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    const { location, back, title, description, history } = this.props
    const matchs = matchRoutes(routeConfig, location.pathname)
    console.log(matchs)
    return (
      <div className={style['bread-container']}>
        <div className={style.breadcrumb}>
          { back && <Tooltip title="返回">
              <Button shape="circle" icon={<ArrowLeftOutlined />} onClick={() => {history.goBack()}}/>
            </Tooltip>
          }
          <Breadcrumb style={{ margin: '16px 5px' }}>
            {matchs.filter(item => !!item.route.title).map(item => (<Breadcrumb.Item key={item.route.path}>{item.route.title}</Breadcrumb.Item>))}
          </Breadcrumb>
        </div>
        <h3 className={style.title}>{title || matchs.filter(item => !!item.route.title).slice(-1)[0].route.title}</h3>
        <p>{description || matchs.slice(-1)[0].route.desc}</p>
      </div>
    )
  }
}

export default withRouter(Classicheader)
