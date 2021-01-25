import React, { Component } from "react";
import Websocket from "react-websocket";

class WebSocketComponent extends Component {
	state = {};

	handleData(messageData) {
		const data = JSON.parse(messageData);

		
	}

	render() {
		return (
		<div>
		<Websocket
			url="ws:127.0.0.1:5678"
			onMessage={this.handleData}
		/>
		</div>
		)
	}
}

export default WebSocketComponent;