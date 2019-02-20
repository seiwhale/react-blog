import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Front from './pages/Front';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Switch, Route, history} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path='/404' component={NotFound}/>
        <Route path='/admin' component={Admin}/>
        <Route component={Front}/>
      </Switch>
    </div>
  </Router>
  , document.getElementById('root')
);