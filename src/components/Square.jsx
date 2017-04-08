import React from 'react';

const Square = React.createClass({

  onButtonClick() {
    const num = this.refs.count.textContent;
    this.props.newButtonClick(num);
  },

  render() {
    const counter = this.props.counter;
    return (
      <button className='square' ref='count' onClick={this.onButtonClick}>{counter}</button>
    );
  }
});

export default Square;
