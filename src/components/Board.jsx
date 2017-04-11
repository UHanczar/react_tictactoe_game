import React from 'react';

import Square from './Square';

const Board = React.createClass({

  renderSquare(i) {
    const squares = this.props.squares;
    return <Square value={this.props.squares[i]} onUpdateComponent={() => this.props.onUpdate(i)} />;
  },

  render() {
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
