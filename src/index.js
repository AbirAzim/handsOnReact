import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counters from './components/counters'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this//bit. comes with some pitfalls.
// Learn more about service workers: https:ly/CRA-PWA
serviceWorker.unregister();