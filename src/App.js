import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import sw5elogo from './sw5e-logo.png';
import Sidebar from './Sidebar';
import DiceRoll from './DiceRoll';
import InitiativeTracker from './InitiativeTracker';

class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <div className='sw5elogo'>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <img src={sw5elogo} className="logo"></img>
        </div>
        <DiceRoll/>
        <InitiativeTracker></InitiativeTracker>
      </div>
      
    );
  }
}



export default App;
