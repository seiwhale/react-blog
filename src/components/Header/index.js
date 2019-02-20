import React, {Component} from 'react';
import './index.less';

const logo = require('./logo.svg');

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">
            <img src={logo}/>
        </span>
        <h1>Cola_J's Blog</h1>
        <p>If you can't measure it , you can't improve it</p>
      </div>
    )
  }
}
