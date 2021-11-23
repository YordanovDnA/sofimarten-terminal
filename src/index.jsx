/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-named-as-default
import reportWebVitals from './reportWebVitals';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <div>Ract is cool</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
