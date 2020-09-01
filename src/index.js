import 'core-js/features/set';
import 'core-js/features/promise';
import 'core-js/features/map';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { detect } from 'detect-browser';
import { polyfill } from 'es6-promise';

const ua = detect();

if (ua.name === 'ie') {
  polyfill();
}

ReactDOM.render(<App />, document.getElementById('root'));