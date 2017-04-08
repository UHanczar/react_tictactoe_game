import React from 'react';

import Board from './Board';

const Game = React.createClass({
  render() {
    return (
      <div className='game'>
        <div className='game-board'><Board /></div>
        <div className='game-info'>
          <div>{/* Status */}</div>
          <div>{/* To do */}</div>
        </div>
      </div>
    );
  }
});

export default Game;
