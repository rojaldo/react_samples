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
    const myHero = new Hero(newHero.name, newHero.description);
    this.setState({ heroes: [...this.state.heroes, myHero] });
  }

  removeHero(index) {
    let myHeroes = this.state.heroes;
    myHeroes.splice(index,1);
    this.setState({heroes: myHeroes});
  }

  render() {

    return (
      <div>
        <Form onNewHero = {(event)=> this.addHero(event)}></Form>
        <List heroes={this.state.heroes} onRemove={(event)=> this.removeHero(event)}></List>
      </div>
    )
  }
}
