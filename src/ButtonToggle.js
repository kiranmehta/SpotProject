import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import Test from './Test.js';
import './App.css';
 
class ToggleButton extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
 
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
 
  render() {
    return (
      <div className="App">
        <button type="submit" className="searchButton"  onClick={ () => this.handleClick() }>
          <i className="fa fa-filter "></i>
          </button>
        <ToggleDisplay show={this.state.show}>
        <div className="filterNames clearfix">
               <Test name="Team"/>
               <Test name="Job Title" />
          </div>
        </ToggleDisplay>
      </div>
    );
  }
}
 
export default ToggleButton;