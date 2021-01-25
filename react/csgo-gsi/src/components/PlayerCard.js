import React from 'react'

// import {
//   ReflexContainer,
//   ReflexSplitter,
//   ReflexElement
// } from 'react-reflex'

// import 'react-reflex/styles.css'
import '../css/bootstrap.css'
import '../css/bootstrap-theme.css'

import ak47 from "../images/weapons/ak47.png"
import deagle from "../images/weapons/deagle.png"

/////////////////////////////////////////////////////////
// Basic vertical re-flex layout with splitter
// Adding a splitter between two ReflexElements
// will allow the user to resize them
//
/////////////////////////////////////////////////////////
class PlayerCard extends React.Component {

	render() {


		return (
			<div class="container">
				<div class="row color-scoreboard-plain">
					<div class="col-auto text-left">
						{/* Player Name */}
						Player Name
					</div>
					<div class="col no-gutters">
						{/* Player helmet*/}
						⛑️
					</div>
					<div class="col no-gutters">
						{/* Player Armor */}
						🦺
					</div>
					<div Class="col-auto">
						{/* Player Health */}
						100 ❤️
					</div>
				</div>
				<div class="row color-scoreboard-plain">
					<div class="col">
						{/* Kit */}
						🛠️
					</div>
					<div class="col-auto">
						<div class="row">
							{/* Primary Weapon */}
							<div class="col"><img src={ ak47 }/></div>							
						</div>
						<div class="row">
							{/* Primary Weapon Ammo */}
							<div class="col">23/56</div>
						</div>
						
					</div>
					<div class="col-auto">
						<div class="row">
							{/* Secondary Weapon */}
							<div class="col"><img src={ deagle }/></div>
						</div>
						<div class="row">
							<div class="col">8/21</div>
						</div>
					</div>
					<div class="col-auto">
						{/* Utility */}
						SFFM
					</div>
				</div>
			</div>
		)
	}
}

export default PlayerCard