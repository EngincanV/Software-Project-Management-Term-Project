import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import HeaderComponent from './components/Header'
import Main from './pages/main/Main'
import RockPaperScissor from './pages/games/RockPaperScissor';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/rock-paper-scissors" component={RockPaperScissor} />
        </Switch>
      </Router>
       
    </div>

  );
}

export default App;
