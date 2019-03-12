import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default class Heroes extends Component {
  render() {
    const heroes = ['superman', 'batman'];
    const listHeroes = heroes.map(
    (hero, i) => <ListGroup.Item key={i}>{hero}</ListGroup.Item>)
    
    return (
      <div>
<ListGroup>
  {listHeroes}
</ListGroup>
      </div>
    )
  }
}
