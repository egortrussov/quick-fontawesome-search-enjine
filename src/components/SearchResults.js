import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editIconFormText } from '../store/actions/iconActions'
import { editIconFormType } from '../store/actions/iconActions'

class SearchResults extends Component {
  constructor() {
    super();
  }

  onEditText = (text, char) => {
    this.props.editIconFormText(text);
    this.props.editIconFormText(text);
    this.props.editIconFormType(char);
    this.props.editIconFormType(char);
  }
  render() {
    
    let { data } = this.props;
    let { currText } = this.props;
    let icons = data.map(icon => {
      let name;
      if (icon.search('fab') !== -1)
        name = icon.replace('fab fa-', '');
      else 
        name = icon.replace('fas fa-', '')
      if (name.search(currText) !== -1 && currText && icon.search('fal') === -1     && icon.search('far') === -1) 
        return (
          <div>
            <a onClick={ this.onEditText.bind(this, name, icon.charAt(2)) }>{ icon } <i className={ icon }></i></a>
          </div>
        )
    })
    return (
      <div>
        { icons }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editIconFormText: (text) => dispatch(editIconFormText(text)),
    editIconFormType: (text) => dispatch(editIconFormType(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchResults)