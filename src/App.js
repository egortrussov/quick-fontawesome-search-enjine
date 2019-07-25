import React, { Component } from 'react';
import Icons from './components/Icons'
import { connect } from 'react-redux'
import IconProperties from './components/IconsProperties'
import AddIcon from './components/AddIcon'
import { addIcon } from './store/actions/iconActions'
import { fontChange } from './store/actions/iconActions'
import { colorChange } from './store/actions/iconActions'
import { deleteIcon } from './store/actions/iconActions'
import { loadData } from './store/actions/iconActions'
import SearchResults from './components/SearchResults'

import data from './data/data1.json'


import './css/App.css';

class App extends Component {

  componentDidMount() {
    console.log(data);
    
    this.props.loadData(data);
  }

  fontChange = (e) => {
    this.props.fontChange(e.target.value);
  }

  colorChange = (e) => {
    this.props.colorChange(e.target.value)
  }

  addIcon = (creds) => {
    let className = creds.name;
    console.log(className.length);
    className.trim();
    console.log(className.length);
    console.log(className);
   
    
    className = className.replace(/\s+/g, '-').toLowerCase();
    let firstChar = className.charAt(0);
    console.log(firstChar);
    console.log(className);
    while(className.charAt(0) === '-') {
      className = className.substr(1);
    }
    while(className.charAt(className.length - 1) === '-') {
      className = className.substr(0, className.length - 1);
    }
    console.log(className);
    
    creds.name = className;
    creds.uid = Math.random();
    this.props.addIcon(creds);
  }

  onDelete = (uid) => {
    console.log('Hello');
    
    this.props.deleteIcon(uid);
  }

  render() {
    let { icons } = this.props;
    let { iconSize } = this.props;
    let { color } = this.props;
    return (
      <div className="App">
        <Icons icons={ icons } iconSize={ iconSize } color={ color } />
        <IconProperties color={ color } iconSize={ iconSize } colorChange={ this.colorChange } fontChange={ this.fontChange } /> <br/> <br/>
        <AddIcon addIcon={ this.addIcon } />
        <SearchResults currText={ this.props.iconFormText } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    icons: state.icons,
    iconSize: state.iconSize,
    color: state.color,
    iconFormText: state.iconFormText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIcon: (icon) => dispatch(addIcon(icon)),
    fontChange: (fontSize) => dispatch(fontChange(fontSize)),
    colorChange: (color) => dispatch(colorChange(color)),
    deleteIcon: (uid) => dispatch(deleteIcon(uid)),
    loadData: (data) => dispatch(loadData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
