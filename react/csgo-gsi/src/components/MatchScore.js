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
// Basic vertical re-flex layout with splitter
// Adding a splitter between two ReflexElements
// will allow the user to resize them
//
/////////////////////////////////////////////////////////
class MatchScore extends React.Component {

	render() {
		const progress_bar_percent = {
			width: '80%'
		}

		return (
			<div class="container">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<div class="row">
							<div class="col-sm-4 color-scoreboard-plain text-right">
								{/* CT Team Name */}
								TEAM CT
							</div>
							<div class="col-sm-1 color-ct-side">
								{/* CT Team Score */}
								14
							</div>
							<div class="col-sm-2 color-scoreboard-plain text-center align-self-center">
								{/* Round Time */}
								2:34
							</div>
							<div class="col-sm-1 color-t-side">
								{/* T Team Score */}
								15
							</div>
							<div class="col-sm-4 color-scoreboard-plain text-left">
								{/* T Team Name */}
								TEAM T
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
									1/3
								</div>
								<div class="col-sm-6 color-scoreboard-plain text-center align-self-center">
									{/* Round Number */}
									23/20
								</div>
								<div class="col-sm-3 color-scoreboard-plain">
									{/* Series Score CT */}
									1/3
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