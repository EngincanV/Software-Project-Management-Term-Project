import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom'
import './App.css';

import Main from './pages/main/Main'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
       
    </div>

  );
}

export default App;
