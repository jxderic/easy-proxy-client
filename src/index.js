import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import * as serviceWorker from './serviceWorker';
import history from './history'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router history={history}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
