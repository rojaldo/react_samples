import React, { Component } from 'react'

export default class Apod extends Component {
    state={data:{}};
    componentWillMount() {
        console.log('Monto apod');
        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
            .then(response => response.json())
            .then(data => this.processResult(data))

    }

    processResult(data){
        console.log(JSON.stringify(data));
        this.setState({data: data});

    }
    render() {
        return (
            <div>
                
                <div className="jumbotron">
                    <div className="container">
                        <h1>{this.state.data.title}</h1>
                        <img src={this.state.data.url} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
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
