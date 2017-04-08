import React from 'react';

import Square from './Square';

const Board = React.createClass({

  getInitialState() {
    return {
      squares: Array(9).fill('d')
    };
  },

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    console.log(squares, i, squares[i]);
    this.setState({
      squares: squares
    });
  },

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onUpdate={() => this.handleClick(i)} />;
  },

  render() {
    const status = 'Next player: X';
    const r = 0;
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='boardRow'>
          <Square value={this.state.squares[r]} onUpdate={() => this.handleClick(r)} />;
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
