import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from '../src/components/Test';
import Container from '../src/components/Container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my React Challenge</h2>
        </div>
        <Container/>
      </div>
    );
  }
}

export default App;
