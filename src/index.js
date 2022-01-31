import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducers from '../src/reducers/combineReducers';
import { Provider } from 'react-redux';

const storeCreated = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("store details :",storeCreated);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeCreated}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
