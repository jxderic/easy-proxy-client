import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import ClassicHeader from '@/components/ClassicHeader'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'
import PropTypes from "prop-types";

class Peojectmanage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  render() {
    const { location } = this.props;
    return <>
      <ClassicHeader back={location.pathname.includes('/main/project-manage/create') || location.pathname.includes('/main/project-manage/modify')} />
      <Switch>
        <Route path="/main/project-manage/list" component={ProjectList} />
        <Route path="/main/project-manage/create" component={ProjectForm} />
        <Route path="/main/project-manage/modify/:id" component={ProjectForm} />
        <Redirect path="/main/project-manage" to="/main/project-manage/list" />
      </Switch>
    </>
  }
}

export default withRouter(Peojectmanage)
