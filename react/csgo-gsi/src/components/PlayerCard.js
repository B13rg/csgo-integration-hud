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
import armorhelmet from "../images/icons/armorhelmet.png"
import kit from "../images/icons/defuse.png"
import nade from "../images/grenades/grenade_active.png"
import flash from "../images/grenades/flashbang_active.png"
import smoke from "../images/grenades/smoke_active.png"

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
					<div class="col-auto"></div>
					<div class="col-auto">
						{/* K/A/D */}
						K 12 A 2 D 10
					</div>
				</div>
				<div class="row color-scoreboard-plain">
					<div class="col bg-primary">
						{/* Kit */}
						<img src={ kit }/>
					</div>
					<div class="col no-gutters bg-success">
						{/* Player helmet*/}
						<img src={ armorhelmet }/>
					</div>
					<div Class="col-auto bg-primary">
						{/* Player Health */}
						100 ❤️
					</div>
					<div class="col-auto bg-success">
						{/* Active Weapon */}
						<img src={ ak47 }/> 23/56
					</div>
					<div class="col-auto bg-primary">
						{/* Utility */}
						<img src={ flash }/>
						<img src={ smoke }/>
						<img src={ nade }/>
						
					</div>
				</div>
			</div>
		)
	}
}

export default PlayerCard