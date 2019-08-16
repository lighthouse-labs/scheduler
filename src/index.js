import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import Application from 'components/Application';
import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}
ReactDOM.render(<Application />, document.getElementById('root'));
