import React, { Component } from 'react'

export default class Trivial extends Component {
    state = { data: {} };
    componentWillMount() {
        console.log('Monto apod');
        fetch('https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .then(data => this.processResult(data))
    }
    processResult(data) {
        console.log(JSON.stringify(data));
        this.setState({ data: data });


    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
