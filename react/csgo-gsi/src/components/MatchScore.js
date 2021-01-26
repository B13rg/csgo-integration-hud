import React from 'react'

// import {
//   ReflexContainer,
//   ReflexSplitter,
//   ReflexElement
// } from 'react-reflex'

// import 'react-reflex/styles.css'
import '../css/bootstrap.css'
import '../css/bootstrap-theme.css'

/////////////////////////////////////////////////////////
// Matchscore, meant to be displayed at the top of the screen
// Reads primarily from the match object
// Meant to be loaded into obs browser source, 1250px x 110px
/////////////////////////////////////////////////////////
class MatchScore extends React.Component {

	teamName(props) {
		return (
			<div class="h-100 h2 teamtitle">
				TEAM { props.team }
			</div>
		)
	}

	teamScore(props) {
		var score = 0;
		if ( props.team == "T") {
			score = 8;
		}
		else {
			score = 12;
		}
		return (
			<div class="h-100 h1 scorebox">
				{ score }
			</div>
		)
	}

	roundTime() {
		return (
			<div class="h-100 h1">
				2:34
			</div>
		)
	}

	seriesScore(props) {
		return (
			<div class="h-100">
				{ props.won }/{ props.total }
			</div>
		)
	}

	roundNum(props) {
		return (
			<div class="h-100">
				Round { props.round }/30
			</div>
		)
	}

	render() {

		return (
			<div class="container">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<div class="row">
							<div class="col-sm-4 color-scoreboard-plain text-right">
								{/* CT Team Name */}
								<this.teamName team="CT"/>
							</div>
							<div class="col-sm-1 color-ct-side">
								{/* CT Team Score */}
								<this.teamScore team="CT"/>
							</div>
							<div class="col-sm-2 color-scoreboard-plain text-center align-self-center">
								{/* Round Time */}
								<this.roundTime/>
							</div>
							<div class="col-sm-1 color-t-side">
								{/* T Team Score */}
								<this.teamScore team="T"/>
							</div>
							<div class="col-sm-4 color-scoreboard-plain text-left">
								{/* T Team Name */}
								<this.teamName team="T"/>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-4">
								{/* Space */}
							</div>
							<div class="col-sm-4">
								<div class="row">
								<div class="col-sm-3 color-scoreboard-plain">
									{/* Series Score T */}
									<this.seriesScore won="1" total="5"/>
								</div>
								<div class="col-sm-6 color-scoreboard-plain text-center align-self-center">
									{/* Round Number */}
									<this.roundNum round="23"/>
								</div>
								<div class="col-sm-3 color-scoreboard-plain">
									{/* Series Score CT */}
									<this.seriesScore won="2" total="5"/>
								</div>
								</div>
								<div class="row">
									<div class="progress">
										<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
											<span class="sr-only">Bomb Bar</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								{/* Space */}
							</div>
						</div>
					</div></div>
				<div class="col-md-2"></div>
			</div>
		)
	}
}

export default MatchScore