import React, {Component} from 'react'
import NotFoundImg from './404.png'
import './index.less'
import animationStyle from '../../style/animate.css'

export default class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationType: 'swing'
    }
    this.enter = this.enter.bind(this)
  }

  enter() {
    this.setState({
      animationType: 'hinge'
    });

    setTimeout(() => {
      this.setState({
        animationType: 'lightSpeedIn'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="nf_container">
        <img src={NotFoundImg} className={`${animationStyle.animated} ${animationStyle[this.state.animationType]}`}
             onMouseEnter={this.enter} alt=''/>
      </div>
    )
  }
}