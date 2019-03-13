import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Hero from '../model/hero';


export default class Heroes extends Component {
  state = {
    heroes: [new Hero('superman','man of steel'), new Hero('batman','dark knight')],
    newHero: {}
  };

  handleChange(event){
    if(event.target.id==='name'){
      let myhero = this.state.newHero;
      myhero.name = event.target.value;
      this.setState({ newHero: myhero });  
    } else if(event.target.id==='description'){
      let myhero = this.state.newHero;
      myhero.description = event.target.value;
      this.setState({ newHero: myhero });  
    }
  }

  addHero() {
    this.setState({ heroes: [...this.state.heroes, this.state.newHero] });
  }

  render() {
    const listHeroes = this.state.heroes.map(
      (hero, i) => <ListGroup.Item key={i}>
      <h3>{hero.name}</h3>
      <p>{hero.description}</p></ListGroup.Item>)

    return (
      <div>
        <label>
          Name:<input id="name" type="text"
            value={this.state.newHero.name}
            onChange={(e) => this.handleChange(e)} />
        </label>
        <br /> 
        <label>
          Description:<input id="description" type="text"
            value={this.state.newHero.description}
            onChange={(e) => this.handleChange(e)} />
        </label><button type="button" class="btn btn-primary" onClick={() => this.addHero()}>Add hero</button>
        <ListGroup>
          {listHeroes}
        </ListGroup>
      </div>
    )
  }
}
