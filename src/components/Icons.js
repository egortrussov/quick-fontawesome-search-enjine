import React, { Component } from 'react'
import Icon from './Icon'

class Icons extends Component {
  

  render() {
    const { icons } = this.props;
    const { iconSize } = this.props;
    const { color } = this.props;
    let Icons = icons.map(icon => {
      let className = 'fa' + icon.type + ' fa-' + icon.name;
      return (
        <Icon uid={ icon.uid } name={ icon.name } class={ className } iconSize={ this.props.iconSize } color={ this.props.color } key={ icon.uid } />
      )
    })
    return (
      <div class="icons-container">
        { Icons }
      </div>
    )
  }
  
}

export default Icons
