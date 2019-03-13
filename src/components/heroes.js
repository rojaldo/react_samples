import React, { Component } from 'react'
import Hero from '../model/hero';
import List from './list';
import Form from './form';


export default class Heroes extends Component {
  state = {
    heroes: [new Hero('superman', 'man of steel'), new Hero('batman', 'dark knight')],
    newHero: {}
  };

  addHero(newHero) {
    this.setState({ heroes: [...this.state.heroes, newHero] });
  }

  render() {

    return (
      <div>
        <Form onNewHero = {(event)=> this.addHero(event)}></Form>
        <List heroes={this.state.heroes}></List>
      </div>
    )
  }
}
