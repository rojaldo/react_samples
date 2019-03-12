import React, { Component } from 'react';

export class SampleComponent extends Component {
    state = {message: 'no clicks',
            status: false};
    constructor(props){
        super(props);
        this.state.status = false;
    }

    index = 0;

    handleClick(event){
        this.index++;
        this.setState({message: event});
        console.log(this.state.message);
    }

    render() {
        return (
            <div>
                <p> this is {this.state.message}!</p>
                <button type="button" id="special_button" className="btn btn-primary" onClick={()=>this.handleClick(9)}>9</button>
                <button type="button" id="special_button" className="btn btn-primary" onClick={()=>this.handleClick('+')}>+</button>
            </div>
        );
    }
}
