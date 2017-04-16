import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Table from './components/Table';
import './App.css';

/*
Basically this is the responsible for render the table under /table
*/
class App extends React.Component{
      render(){
            return(
                  <Router>
                         <div>
                              <ul>
                                    <li><Link to="/table">Table</Link></li>
                              </ul>
                              <hr/>
                              <Route path='/table' component= {Table}/>
                         </div>
                 </Router>
            );
      }
}

export default App;