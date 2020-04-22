import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import HeaderComponent from './components/Header'
import Main from './pages/main/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
       
    </div>

  );
}

export default App;
