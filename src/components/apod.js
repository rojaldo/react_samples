import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ShowApod from './showapod';

export default class Apod extends Component {
    state = { startDate: new Date() };
    componentWillMount() {
    }

    handleChange(event){
        this.setState({startDate: event});
    }
    render() {
          
        return (
            <div>

                <DatePicker
                    selected={this.state.startDate}
                    onChange={(event)=>this.handleChange(event)}
                    dateFormat="yyyy/MM/dd"
                />

                <ShowApod date={this.state.startDate}></ShowApod>

            </div>
        )
    }
}