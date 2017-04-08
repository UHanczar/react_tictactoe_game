import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

import Game from './components/Game';

ReactDOM.render(<Game />, document.getElementById('root'));
