import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleComponent } from './components/SampleComponent';
import { Calculator } from './components/calculator';

class App extends Component {
  name = 'clase';
  render() {
    return (
      <div>
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
