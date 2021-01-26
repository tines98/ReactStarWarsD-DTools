import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "./Player.css"

class Player extends Component {
	state = {
		url: null,
		pip: false,
		playing: true,
		controls: false,
		light: false,
		volume: 0.8,
		muted: false,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		loop: false
	}



	render(){
		const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
		return(
			<div>
				<ReactPlayer
					id="videoPlayer"
					ref={this.ref}
					className='react-player'
					width='92%'
					height='54%'
					url={url}
					pip={pip}
					playing={playing}
					controls={controls}
					light={light}
					loop={loop}
					playbackRate={playbackRate}
					volume={volume}
					muted={muted}
					onReady={() => console.log('onReady')}
					onStart={() => console.log('onStart')}
					onPlay={this.handlePlay}
					onEnablePIP={this.handleEnablePIP}
					onDisablePIP={this.handleDisablePIP}
					onPause={this.handlePause}
					onBuffer={() => console.log('onBuffer')}
					onSeek={e => console.log('onSeek', e)}
					onEnded={this.handleEnded}
					onError={e => console.log('onError', e)}
					onProgress={this.handleProgress}
					onDuration={this.handleDuration}
				/>
				{this.renderPlayPauseButton()}
				<input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
				<button id="showhide"onClick={this.hideButtons}>hide</button>
				<button id="showhideVideo"onClick={this.hideVideo}>hide video</button>
				{this.renderButtons()}
			</div>
		);
	}

	hideButtons() {
		var buttonTable = document.getElementById("soundBoard");
		var showhideButton = document.getElementById("showhide");
		if (buttonTable.style.display === "none"){
			buttonTable.style.display = "block";
			showhideButton.innerHTML = "hide";
		}
		else {
			buttonTable.style.display = "none";
			showhideButton.innerHTML = "show";
		}
	}

	hideVideo() {
		var player = document.getElementById("videoPlayer");
		var showhideButton = document.getElementById("showhideVideo");
		if (player.style.display == "none"){
			player.style.display = "block";
			showhideButton.innerHTML = "hide video";
		}
		else {
			player.style.display = "none";
			showhideButton.innerHTML = "show video";
		}
	}

	renderButtons = () => {
		return (
			<table className="soundBoard" id="soundBoard">
				<thead  className="soundBoardHeader">
					<th className="soundBoardHeader">city</th>
					<th className="soundBoardHeader">ship</th>
					<th className="soundBoardHeader">nature</th>
				</thead>
				<td className="soundBoardColumn">
					<tr>
						{this.renderLoadButton('https://www.youtube.com/watch?v=xoRwL8GjIRo', 'Coruscant upper city')}
					</tr>
					<tr>
						{this.renderLoadButton('https://www.youtube.com/watch?v=uEPxs6WNTP0', 'Coruscant lower city')}
					</tr>
					<tr>
						{this.renderLoadButton('https://www.youtube.com/watch?v=oGhzrhtriAY', 'Cantina')}
					</tr>
					<tr>
						{this.renderLoadButton('https://www.youtube.com/watch?v=LQOKUDJ22xc', 'Pew!')}
					</tr>
				</td>
				<td className="soundBoardColumn">
					<tr>
					{this.renderLoadButton('https://www.youtube.com/watch?v=-61nRZiLQQg', 'ship')}
					</tr>
				</td>
				<td className="soundBoardColumn">
					<tr>  
						{this.renderLoadButton('https://www.youtube.com/watch?v=zCCEJCyalFw', 'kashyyyk shadowlands')}
					</tr>
					<tr>
						{this.renderLoadButton('https://www.youtube.com/watch?v=O-X_v1uL4QY', 'tatooine')}
					</tr>
				</td>
			</table>
		)
	}

	renderLoadButton = (url, label) => {
		return (
			<button className="soundButton" onClick={() => this.load(url)}>
				{label}
			</button>
		)
	}

	handleVolumeChange = e => {
		this.setState({ volume: parseFloat(e.target.value) })
	}

	renderPlayPauseButton = () => {
		return (
			<button id="playpause" className="playpause" onClick={() => this.playpause()}>
			❚❚</button>
		)
	}

	renderPauseButton = (label) => {
		return (
			<button onClick={() => this.stop()}>
				{label}
			</button>
		)
	}

	renderResumeButton = (label) => {
		return (
			<button onClick={() => this.resume()}>
				{label}
			</button>
		)
	}

	resume = () => {
		this.setState({
			playing: true
		})
	}

	stop = () => {
		this.setState({
			playing: false
		})
	}

	playpause(){
		var button = document.getElementById("playpause");
		if (this.state.playing){
			this.setState({
				playing: false
			})
			button.innerHTML = "▶";
		}
		else{
			this.setState({
				playing: true
			});
			button.innerHTML = "❚❚";
		}
	}

	ref = player => {
		this.player = player;	
	}

	load = url => {
		this.setState({
			url,
			played: 0,
			loaded: 0,
			pip: false
		})
	}

}

export default Player;