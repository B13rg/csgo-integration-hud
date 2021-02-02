import React from "react";
import logo from './logo.svg';
import './App.css';
//import WebSocketComponent from "./components/WebSocketComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MatchScore from './components/MatchScore.js'
import PlayerCard from './components/PlayerCard.js'
import DataSocket from './components/websocket.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/matchscore" exact component={() => <MatchScore />} />
          <Route path="/playercard" exact component={() => <PlayerCard />} />
          <Route path="/ws" exact component={() => <DataSocket/>} />
          <Route path="/" exact component={() => <PlayerCard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
