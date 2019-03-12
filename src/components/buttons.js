import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <div>
            <tr>
            
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(7)}>7</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(8)}>8</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(9)}>9</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('/')}>/</button>
        
    </tr>
    <tr>
        
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(4)}>4</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(5)}>5</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(6)}>6</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('*')}>*</button>
        
    </tr>
    <tr>
        
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(1)}>1</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(2)}>2</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(3)}>3</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('-')}>-</button>
        
    </tr>
    <tr>
        
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('.')}>.</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleFigure(0)}>0</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('=')}>=</button>
            <button type="button" className="btn btn-primary m-1" onClick={()=>this.props.handleSymbol('+')}>+</button>
        
    </tr>
      </div>
    )
  }
}
