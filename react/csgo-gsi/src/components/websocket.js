import React, { Component } from 'react'

export default class Example extends Component {

	//ws = new WebSocket('wss://echo.websocket.org/')
	ws = new WebSocket('ws://localhost:5678')

   componentDidMount() {
		this.ws.onopen = () => {
		// on connecting, do nothing but log it to the console
		console.log('connected')
		this.ws.send("teseringo")
		}

		this.ws.onmessage = evt => {
		// listen to data sent from the websocket server
		const message = JSON.parse(evt.data)
		//this.setState({dataFromServer: message})
		console.log(message)
		}

		this.ws.onclose = () => {
		console.log('disconnected')
		// automatically try to reconnect on connection loss

		}

	}


	
	render () {
		return (
		<div style={{flex: 1}}>
		</div>
		)
	}
}