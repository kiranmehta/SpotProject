import React, { Component } from 'react';
import './App.css';



class SearchComponent extends Component {
  getInitialState() {
    return {
      inputValue: ''
    }
  }

updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }


  render(){
    return (
      <input className="searchTerm" placeholder="Search" value={this.state.inputValue} onChange={this.updateInputValue}/>
    );
  }

 
export default SearchComponent;