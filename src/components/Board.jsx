import React from 'react';

import Square from './Square';
import calculateWinner from './CalcWinner';

const Board = React.createClass({

  getInitialState() {
    return {
      squares: Array(9).fill(''),
      xIsNext: true
    };
  },

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log(squares, i, squares[i]);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  },

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onUpdate={() => this.handleClick(i)} />;
  },

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    winner ? status = `The Winner: ${winner}` : status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    const r = 0;
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='boardRow'>
          <Square value={this.state.squares[r]} onUpdate={this.handleClick.bind(this, r)} />;
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className='boardRow'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className='boardRow'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
});

export default Board;
