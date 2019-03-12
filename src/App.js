import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleComponent } from './components/SampleComponent';
import { Calculator } from './components/calculator';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/heroes';


class App extends Component {
  name = 'clase';
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Calculator">
          <Calculator></Calculator>
          </Tab>
        <Tab eventKey="profile" title="Heroes">
          <Heroes></Heroes>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default App;
