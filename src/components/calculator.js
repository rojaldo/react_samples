import React, { Component } from 'react'

export class Calculator extends Component {
    state= {display:''};

    handleFigure(myNumber){
        this.setState({display: this.state.display + myNumber});
    }

    handleSymbol(symbol) {
        this.setState({display: this.state.display + symbol});
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
            <td>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(7)}>7</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(8)}>8</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(9)}>9</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSymbol('/')}>/</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(4)}>4</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(5)}>5</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(6)}>6</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSymbol('*')}>*</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(1)}>1</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(2)}>2</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(3)}>3</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSymbol('-')}>-</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSymbol('.')}>.</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleFigure(0)}>0</button>
                <button type="button" class="btn btn-primary"onClick={()=>this.handleSymbol('=')}>=</button>
                <button type="button" class="btn btn-primary"onClick={()=>this.handleSymbol('+')}>+</button>
            </td>
        </tr>
    </tbody>
</table>
      </div>
    )
  }
}
