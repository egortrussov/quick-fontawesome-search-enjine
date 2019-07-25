import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteIcon } from '../store/actions/iconActions'
import { changeIconDesc } from '../store/actions/iconActions'

class Icon extends Component {
  constructor() {
    super();
  }

  state = {
    formVisible: false
  }

  onDelete = (e) => {
    e.preventDefault();
    this.props.deleteIcon(this.props.uid);
  }

  showForm = () => {
    this.setState({
      formVisible: true
    })
  }

  handleChange = (e) => {
    this.props.changeIconDesc(this.props.uid, e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: false
    })
  }

  render() {
    let desc = '';
    for (let i = 0; i < this.props.icons.length; i++) {
      if (this.props.icons[i].uid === this.props.uid) {
        desc = this.props.icons[i].desc;
        break;
      } 
    }
    return (
      <div className="icon-box">
        <div style={ {fontSize: this.props.iconSize + 'px', color: this.props.color} } className="icon-top">
          <i className={ this.props.class }></i>
        </div>
        <div className="icon-description">
          <h3>{ this.props.name }</h3>
          { this.state.formVisible ? 
              <form onSubmit={ this.handleSubmit }>
                <input type="text" onChange={ this.handleChange } value={ desc } />
                <button>Change</button>
              </form>
              : 
              <p>
                { desc }
                <i onClick={ this.showForm.bind(this) } class="desc-i fas fa-pencil-alt"></i>
              </p>
          }
        </div>
        <form onSubmit={ this.onDelete }>
          <button>Delete</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    icons: state.icons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIcon: (uid) => dispatch(deleteIcon(uid)),
    changeIconDesc: (uid, desc) => dispatch(changeIconDesc(uid, desc))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Icon)
