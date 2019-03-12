import React, { Component } from 'react';
import Display from './display';
import Buttons from './buttons';

const initState = 0;
const firstFigureState = 1;
const secondFigureState = 2;
const resultState = 3;
export class Calculator extends Component {
    state= {display:'', status: initState};
    firstFigure = 0;
    secondFigure = 0;
    result = 0;
    operator = 0;

    handleFigure(myNumber){
        if(this.state.status === initState){
            this.firstFigure = myNumber;
            this.setState({status: firstFigureState, display: this.state.display + myNumber});
        } else if(this.state.status === firstFigureState) {
            this.firstFigure = this.firstFigure*10+myNumber;
            this.setState({display: this.state.display + myNumber});
        } else if(this.state.status === secondFigureState) {
            this.secondFigure = this.secondFigure*10+myNumber;
            this.setState({display: this.state.display + myNumber});
        } else if(this.state.status === resultState){
            this.firstFigure = myNumber;
            this.secondFigure = 0;
            this.operator = '';
            this.result = 0;
            this.setState({status: firstFigureState, display: myNumber});
        }
    }


    handleSymbol(symbol) {
        if(this.state.status === firstFigureState){
            if(symbol=== '+'||symbol==='-'||symbol==='*'||symbol==='/'){
                this.operator = symbol;
                this.setState({status: secondFigureState, display: this.state.display + symbol});
            }
        }else if(this.state.status === secondFigureState){
            if(symbol === '='){
                this.result = this.resolve();
                this.setState({status: resultState, display: this.state.display + symbol + this.result});
            }
        } 
    }
    resolve() {
        if(this.operator === '+'){
            return this.firstFigure + this.secondFigure;
        } else if(this.operator === '-'){
            return this.firstFigure - this.secondFigure;
        } else if(this.operator === '*'){
            return this.firstFigure * this.secondFigure;
        } else if(this.operator === '/'){
            return this.firstFigure / this.secondFigure;
        }
    }

  render() {
    return (
      <div>
        <table className="table">
    <thead>
        <tr>
            <Display content={this.state.display}></Display>
        </tr>
    </thead>
    <tbody>
        <Buttons handleFigure={(e)=>this.handleFigure(e)} handleSymbol={(e)=>this.handleSymbol(e)}></Buttons>
    </tbody>
</table>
      </div>
    )
  }
}
