import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default class Heroes extends Component {
  state = {
    heroes: ['superman', 'batman'],
    newHero: ''
  };

  handleChange(event) {
    this.setState({ newHero: event.target.value });
  }

  addHero() {
    this.setState({ heroes: [...this.state.heroes, this.state.newHero] });
  }

  render() {
    const listHeroes = this.state.heroes.map(
      (hero, i) => <ListGroup.Item key={i}>{hero}</ListGroup.Item>)

    return (
      <div>
        <label>
          Name:<input type="text"
            value={this.state.newHero}
            onChange={(e) => this.handleChange(e)} />
        </label> <button type="button" class="btn btn-primary" onClick={() => this.addHero()}>Add hero</button>
        <ListGroup>
          {listHeroes}
        </ListGroup>
      </div>
    )
  }
}
