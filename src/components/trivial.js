import React, { Component } from 'react'
import { Card } from '../model/card';

export default class Trivial extends Component {
    state = { data: {}, cards: [] };
    componentWillMount() {
        console.log('Monto apod');
        fetch('https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .then(data => this.processResult(data))
    }
    processResult(data) {
        console.log(JSON.stringify(data));
        this.setState({ data: data });
        data.results.forEach(jsonCard => {
            const card = new Card(jsonCard);
            this.setState({ cards: [...this.state.cards, card] });
        });

    }

    handleClick(indexCard,indexButton) {
        console.log('card: ' + indexCard);
        let myCard = this.state.cards[indexCard];
        myCard.responded = true;
        let myCards = this.state.cards;
        myCards.splice(indexCard, 1, myCard);
        this.setState({cards: myCards});
    }

    render() {
        const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

        const cards = this.state.cards.map(
            (card, indexCard) => <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 p-1" key={indexCard}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{renderHTML(card.question)}</h4>
                        {card.answers.map(
                            (answer, indexButton) => <button type="button" className="btn btn-primary btn-block" key={indexButton} onClick={(indexCard,indexButton)=>this.handleClick(indexCard,indexButton)}>{answer}</button>)
                        }
                    </div>
                </div>
            </div>);

        return (
            <div class="container-fluid">
                <div className="row">
                    {cards}
                </div>
            </div>
        )
    }
}
