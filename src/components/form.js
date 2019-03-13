import React, { Component } from 'react'

export default class Form extends Component {
    state = { newHero: {} };

    handleChange(event) {
        if (event.target.id === 'name') {
            let myhero = this.state.newHero;
            myhero.name = event.target.value;
            this.setState({ newHero: myhero });
        } else if (event.target.id === 'description') {
            let myhero = this.state.newHero;
            myhero.description = event.target.value;
            this.setState({ newHero: myhero });
        }
    }

    render() {
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
                </label><button type="button" class="btn btn-primary" onClick={() => this.props.onNewHero(this.state.newHero)}>Add hero</button>
            </div>
        )
    }
}
