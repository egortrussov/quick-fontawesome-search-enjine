import React, { Component } from 'react'

class IconsProperties extends Component {
  render() {
    let { iconSize } = this.props;
    let { color } = this.props;

    return (
      <div>
        <h3>Change icons styling</h3>
        <input min="16" max="64" step="2" type="range" value={ iconSize } onChange={ this.props.fontChange } /> <br/>
        <input type="color" value={ color } onChange={ this.props.colorChange } />
      </div>
    )
  }
}

export default IconsProperties
