import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import HeaderComponent from './components/Header'
import Main from './pages/main/Main'

//games
import RockPaperScissor from './pages/games/RockPaperScissor';
import { Chatbot } from './pages/games/Chatbot';
import KiwiOrStoat from './pages/games/KiwiOrStoat';
import TouristInfo from './pages/games/TouristInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/rock-paper-scissors" component={RockPaperScissor} />
          <Route path="/chatbots" component={Chatbot} />
          <Route path="/kiwi-or-stoat" component={KiwiOrStoat} />
          <Route path="/tourist-info" component={TouristInfo} />
        </Switch>
      </Router>
       
    </div>

  );
}

export default App;
