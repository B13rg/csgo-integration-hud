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
// Playercard, meant to be displayed while spectating a player.
// Reads primarily from the player object
// Meant to be displayed in OBS browser source, somewhere around 1000px x 110px
/////////////////////////////////////////////////////////
class PlayerCard extends React.Component {

	grenades() {
		return (
			<div class="h-100">
				<img src={ flash } alt="flash" class="icon"/>
				<img src={ flash } alt="flash" class="icon"/>
				<img src={ smoke } alt="smoke" class="icon"/>
				<img src={ nade } alt="nade" class="icon"/>
			</div>
		)
	};

	weapon() {
		return (
			<div class="h-100">
				<img src={ ak47 }/> 23/56
			</div>
		)
	}

	render() {


		return (
			<div class="container">
				<div class="row color-scoreboard-plain">
					<div class="col-8 text-left h1 text-left tight">
						{/* Player Name */}
						Player Name
					</div>
					<div class="col-4 h2 text-right tight">
						{/* K/A/D */}
						K: 12 A: 2 D: 10
					</div>
				</div>
				<div class="row color-scoreboard-plain">
					<div class="col-2 bg-primary text-left">
						{/* Kit */}
						<img src={ kit } class="icon"/>
						{/* Player helmet*/}
						<img src={ armorhelmet } class="icon"/>
					</div>
					<div Class="col-2 bg-primary h2 tight">
						{/* Player Health */}
						100 ❤️
					</div>
					<div class="col-5 bg-success h2 tight">
						{/* Active Weapon */}
						<this.weapon />
					</div>
					<div class="col-3 bg-primary">
						{/* Utility */}
						<this.grenades />
					</div>
				</div>
			</div>
		)
	}
}

export default PlayerCard;