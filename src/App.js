import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleComponent } from './components/SampleComponent';
import { Calculator } from './components/calculator';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/heroes';
import Apod from './components/apod';


class App extends Component {
  name = 'clase';
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="apod" id="uncontrolled-tab-example">
          <Tab eventKey="calculator" title="Calculator">
          <Calculator></Calculator>
          </Tab>
        <Tab eventKey="heroes" title="Heroes">
          <Heroes></Heroes>
        </Tab>
        <Tab eventKey="apod" title="Apod">
          <Apod></Apod>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default App;
