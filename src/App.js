/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-10-23 10:25:47
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-17 16:29:19
 */
import React from 'react';
import { Switch, Redirect, withRouter, Route } from 'react-router-dom'
import LoginAsync from './pages/Login/Login.async'
import MainAsync from './pages/Main/Main.async'
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/createStore'

function App() {
  return (
    <StoreProvider store={store}>
      <Switch>
        <Route path="/login" component={LoginAsync} />
        <Route path="/main" component={MainAsync} />
        <Redirect exact={true} from="/" to={'/login'} />
      </Switch>
    </StoreProvider>
  );
}

export default withRouter(App)
