import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class List extends Component {
    props = {heroes:[]}
    render() {
        const listHeroes = this.props.heroes.map(
            (hero, index) => <ListGroup.Item key={index}>
            <h3>{hero.name}</h3>
            <p>{hero.description}</p>
            <button type="button" class="btn btn-danger" onClick={()=>this.props.onRemove(index)}>Remove</button>
            </ListGroup.Item>)
        return (
            <div>
                <ListGroup>
                    {listHeroes}
                </ListGroup>
            </div>
        )
    }
}
