import React, { Component } from 'react';
import { render } from 'react-dom';
import './Main.css';
import sw5elogo from './sw5e-logo.png';
import Sidebar from './Sidebar';
import DiceRoll from './DiceRoll';
import InitiativeTracker from './InitiativeTracker';
import Player from "./Player.js";

class Main extends Component {
render() {
	return (     
		<div className="App" id="outer-container">
			<div className="headerBar">
				<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
				<h1 className="title">Welcome to Tines's SW5E DM's Tools</h1>
				<a href="https://sw5e.com/" className="logo">
					<img src={sw5elogo}  className="logo"></img>
				</a>
			</div>
			<body>
				
				<div className="initiativeTracker">
					<InitiativeTracker></InitiativeTracker>
				</div>
				<div className="player">
					<Player></Player>
				</div>
			</body>
			<footer>
				<div className="diceRoller">
					<DiceRoll/>
				</div>
			</footer>
		</div>
	);
}
}



export default Main;

