import React from 'react';

import Board from './Board';
import calculateWinner from './CalcWinner';

const Game = React.createClass({

  getInitialState() {
    return {
      history: [{
        squares: Array(9).fill('')
      }],
      xIsNext: true,
      stepNumber: 0
    };
  },

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log(squares, i, squares[i]);
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  },

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true
    });
  },

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    winner ? status = `The Winner: ${winner}` : status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    const moves = history.map((step, move) => {
      const desc = move ? `Move: ${move}` : `Game start:`;
      return (
        <li key={move}>
          <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    });

    return (
      <div className='game'>
        <div className='game-board'><Board  squares={current.squares} onUpdate={(i) => this.handleClick(i)}/></div>
        <div className='game-info'>
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
});

export default Game;
