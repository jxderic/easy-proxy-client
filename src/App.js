/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-10-23 10:25:47
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-10-23 19:02:54
 */
import React from 'react';
import { Switch, Redirect, withRouter, Route } from 'react-router-dom'
import LoginAsync from './pages/Login/Login.async'
import MainAsync from './pages/Main/Main.async'

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginAsync} />
      <Route path="/main" component={MainAsync} />
      <Redirect exact={true} from="/" to={'/login'} />
    </Switch>
  );
}

export default withRouter(App)
