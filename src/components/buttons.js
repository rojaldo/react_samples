import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <tbody>
        <tr>


          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(7)}>7</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(8)}>8</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(9)}>9</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('/')}>/</button></td>

        </tr>
        <tr>

          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(4)}>4</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(5)}>5</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(6)}>6</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('*')}>*</button></td>

        </tr>
        <tr>

          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(1)}>1</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(2)}>2</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(3)}>3</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('-')}>-</button></td>

        </tr>
        <tr>

          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('.')}>.</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleFigure(0)}>0</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('=')}>=</button></td>
          <td><button type="button" className="btn btn-primary m-1" onClick={() => this.props.handleSymbol('+')}>+</button></td>

        </tr>
      </tbody>
    )
  }
}
