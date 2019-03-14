import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleComponent } from './components/SampleComponent';
import { Calculator } from './components/calculator';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/heroes';
import Apod from './components/apod';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trivial from './components/trivial';

class App extends Component {
  name = 'clase';
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/heroes/">Heroes</Link>
              </li>
              <li>
                <Link to="/apod/">Apod</Link>
              </li>
              <li>
                <Link to="/trivial/">Trivial</Link>
              </li>
            </ul>
          </nav>

          <Route path="/calculator" exact component={Calculator} />
          <Route path="/heroes/" component={Heroes} />
          <Route path="/apod/" component={Apod} />
          <Route path="/trivial/" component={Trivial} />
        </div>
      </Router>
    );
  }
}

export default App;
