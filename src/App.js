import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/Capture.PNG'
import './App.css';
import Test from '../src/components/Test';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./Capture.PNG')} className="App-logo" alt="logo" />
        <div>
        <Test/>
        </div>
          <br/>
          </div>
      </div>
    );
  }
}

export default App;
