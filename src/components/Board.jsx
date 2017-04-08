import React from 'react';

import Square from './Square';

const Board = React.createClass({

  handleButtonClick(a) {
    console.log('Click! ', a);
  },

  renderSquare(i) {
    return <Square counter={i} newButtonClick={this.handleButtonClick} />;
  },

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='boardRow'>
          {this.renderSquare(0)}
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
