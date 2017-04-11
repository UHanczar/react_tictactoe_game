import React from 'react';

const Square = React.createClass({

  handleButtonClick() {
    this.props.onUpdateComponent();
  },

  render() {
    const value = this.props.value;
    return (
      <button className='square' onClick={this.handleButtonClick}>{value}</button>
    );
  }
});

export default Square;
