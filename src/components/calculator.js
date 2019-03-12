import React, { Component } from 'react'

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
        <table class="table">
    <thead>
        <tr>
            {this.state.display}
        </tr>
    </thead>
    <tbody>
        <tr>
            
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(7)}>7</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(8)}>8</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(9)}>9</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('/')}>/</button>
            
        </tr>
        <tr>
            
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(4)}>4</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(5)}>5</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(6)}>6</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('*')}>*</button>
            
        </tr>
        <tr>
            
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(1)}>1</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(2)}>2</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(3)}>3</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('-')}>-</button>
            
        </tr>
        <tr>
            
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('.')}>.</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleFigure(0)}>0</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('=')}>=</button>
                <button type="button" class="btn btn-primary m-1" onClick={()=>this.handleSymbol('+')}>+</button>
            
        </tr>
    </tbody>
</table>
      </div>
    )
  }
}
