import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App';
import Layout from './components/Layout'
import './index.css';

const app = (
      <BrowserRouter>
      	 <Route path="/" component={App}/>
     </BrowserRouter>
)

ReactDOM.render(app,document.getElementById('root'));
