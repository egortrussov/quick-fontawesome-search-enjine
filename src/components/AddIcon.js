import React, { Component } from 'react'
import { editIconFormText } from '../store/actions/iconActions';
import { connect } from 'react-redux'

class AddIcon extends Component {
  state = {
    name: '',
    type: 'b',
    desc: ''
  }
  textChange = (e) => {
    if (e.target.id === 'iconName') {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value    
      });
      this.props.editIconFormText(e.target.value);
    }
    else
      if (e.target.name != "iconType")
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value    
        });
        else 
          this.setState({
            ...this.state,
            type: e.target.id
          })
  }

  handleSubmit = (e) => {
    e.preventDefault();    
    console.log(this.props);
    this.state.name = this.props.iconFormText;
    this.state.type = this.props.iconFormType;
    console.log(this.state);
    this.props.addIcon(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Add an icon</h3>
        <input ref="iconName" type="text" id="iconName" name="name" value={ this.props.iconFormText } onChange={ this.textChange } /> <br/>
        <input type="text" name="desc" onChange={ this.textChange } placeholder="enter description" /> <br/>
        { 
          this.props.iconFormType === 'b' ? <input checked id="b" type="radio" name="iconType" onSelect={ this.textChange } /> : 
          <input id="b" type="radio" name="iconType" onSelect={ this.textChange } />
        }
         <span>Brand icon</span> <br/>
         { 
          this.props.iconFormType === 's' ? <input checked id="s" type="radio" name="iconType" onSelect={ this.textChange } /> : 
          <input id="s" type="radio" name="iconType" onSelect={ this.textChange } />
        }
        <span>Solid icon</span> <br/>
        <button type="submit">Add icon</button>
        
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    iconFormText: state.iconFormText,
    iconFormType: state.iconFormType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editIconFormText: (text) => dispatch(editIconFormText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddIcon)