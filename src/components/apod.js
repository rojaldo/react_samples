import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import YouTube from 'react-youtube';

export default class Apod extends Component {
    state = { data: {}, startDate: new Date() };
    componentWillMount() {
        console.log('Monto apod');
        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
            .then(response => response.json())
            .then(data => this.processResult(data))

    }

    processResult(data) {
        console.log(JSON.stringify(data));
        this.setState({ data: data });

    }

    handleChange(event){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo&date=' 
        + event.getFullYear() + '-' + (Number(event.getMonth()) + 1) + '-' + event.getDate();
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => this.processResult(data))
        this.setState({startDate: event});
    }
    render() {
        let content = <p></p>;
        if (this.state.data.media_type === 'image') {
            content = <img src={this.state.data.url} className="img-fluid" alt="" />;
        } else if (this.state.data.media_type === 'video') {
            content = <YouTube videoId="-3hO58HFa1M"></YouTube>
            }
           
        return (
            <div>

                <DatePicker
                    selected={this.state.startDate}
                    onChange={(event)=>this.handleChange(event)}
                    dateFormat="yyyy/MM/dd"

                />

                <div className="jumbotron">
                    <div className="container">
                        <h1>{this.state.data.title}</h1>
                        {content}
                        <p>{this.state.data.explanation}</p>
                        <p>
                            <a class="btn btn-primary btn-lg" href={this.state.data.hdurl}>Download</a>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}