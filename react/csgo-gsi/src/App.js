import React from "react";
import logo from './logo.svg';
import './App.css';
import WebSocketComponent from "./components/WebSocketComponent";

import MatchScore from './components/MatchScore.js'
import PlayerCard from './components/PlayerCard.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="row">
          <MatchScore></MatchScore>
          </div>
          <div class="row">
            <div class="col-3"></div>
            <div class="col-5">
              <PlayerCard></PlayerCard>
            </div>
            <div class="col-5"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
