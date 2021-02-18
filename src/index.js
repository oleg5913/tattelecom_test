import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './data/reduxStore';
import AppContainer from './App';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
      <AppContainer />
  </Provider>
</HashRouter>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
