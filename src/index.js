import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './redux';
import * as serviceWorker from './serviceWorker';

const All = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<All />, document.getElementById('root'));

serviceWorker.unregister();
