import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class List extends Component {
    props = {heroes:[]}
    render() {
        const listHeroes = this.props.heroes.map(
            (hero, i) => <ListGroup.Item key={i}>
            <h3>{hero.name}</h3>
            <p>{hero.description}</p></ListGroup.Item>)
        return (
            <div>
                <ListGroup>
                    {listHeroes}
                </ListGroup>
            </div>
        )
    }
}
