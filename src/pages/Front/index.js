import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Home/index'
import Detail from '../Detail/index'
import NotFound from '../NotFound/index'
import {BackTop} from 'antd'

export default class RouterConfig extends Component {
  render() {
    const {url} = this.props.match;
    return (
      <div>
        <div>
          <Switch>
            <Route exact path={url} component={Home}/>
            <Route path={`/detail/:id`} component={Detail}/>
            <Route path={`/:tag`} component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
        <BackTop/>
      </div>
    )
  }
}