import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import HeaderComponent from './components/Header';
import Main from './pages/main/Main';

//games
import RockPaperScissor from './pages/games/RockPaperScissor';
import { Chatbot } from './pages/games/Chatbot';
import KiwiOrStoat from './pages/games/KiwiOrStoat';
import TouristInfo from './pages/games/TouristInfo';
import MakeMeHappy from './pages/games/MakeMeHappy';
import SortingHat from './pages/games/SortingHat/sortinghat';
import JudgeBook from './pages/games/JudgeBook';
import Chameleon from './pages/games/Chamelon/chamelon';

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
          <Route path="/make-me-happy" component={MakeMeHappy} />
          <Route path="/sorting-hat" component={SortingHat} />
          <Route path="/judge-a-book" component={JudgeBook} />
          <Route path="/chameleon" component={Chameleon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
