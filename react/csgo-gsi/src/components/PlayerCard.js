import React from 'react'

// import {
//   ReflexContainer,
//   ReflexSplitter,
//   ReflexElement
// } from 'react-reflex'

// import 'react-reflex/styles.css'
import '../css/bootstrap.css'
import '../css/bootstrap-theme.css'
import DataSocket from './websocket.js'

import ak47 from "../images/weapons/ak47.png"
import deagle from "../images/weapons/deagle.png"

import armorhelmet from "../images/icons/armorhelmet.png"
import armor from "../images/icons/armor.png"
import kit from "../images/icons/defuse.png"
import bomb from "../images/icons/bomb.png"

import nade from "../images/grenades/grenade_active.png"
import flash from "../images/grenades/flashbang_active.png"
import smoke from "../images/grenades/smoke_active.png"
import decoy from "../images/grenades/decoy_active.png"

/////////////////////////////////////////////////////////
// Playercard, meant to be displayed while spectating a player.
// Reads primarily from the player object
// Meant to be displayed in OBS browser source, somewhere around 1000px x 110px
/////////////////////////////////////////////////////////
class PlayerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: {
				team: "CT",
				name: "Player Namebo",
				kills: 3,
				assists: 4,
				deaths: 2,
				mvps: 1,
				score: 8,
				health: 97,
				armor: 100,
				helmet: true,
				money: 2250,
				round_kills: 2,
				round_killhs: 1,
				round_totaldmg: 123,
				equip_value: 1423,
				position: "-449.17, -370.51, -215.97"
			}
		}

		this.grenades = this.grenades.bind(this);
		this.health = this.health.bind(this);
		this.kda = this.kda.bind(this);
		this.name = this.name.bind(this);
		this.gear = this.gear.bind(this);
		this.weapon = this.weapon.bind(this);
	}

	loadData = (gamestate) => {
		let newState = this.state;
		console.log("Recieved player gamestate");
		console.log(gamestate.player);
		newState = {
			player: gamestate.player
		}

		this.setState(newState);
	}

	getGrenadeIcon(nadeName) {
		var type = null;
		switch(nadeName) {
			case "weapon_flashbang":
				type = flash;
				break;
			case "weapon_smokegrenade":
				type = smoke;
				break;
			case "weapon_decoy":
				type = decoy;
				break;
			case "weapon_grenade":
				type = nade;
				break;
		}
		return type;
	}

	grenades() {
		var grenades = [];
		for (var item in this.state.player.weapon) {
			if (item.type == "Grenade") {
				var type = this.getGrenadeIcon(item.name);
				if (item.ammo_reserve == 2) {
					grenades.push(type);
				}
				grenades.push(type);
			}
		}
		var grenadetml = grenades.map((item) => <img src={ item } alt="grenade" class="icon"/>);
		return (
			<div class="h-100">
				{grenadetml}
			</div>
		)
	};

	weapon() {
		var activeWeapon = null;
		for (var item in this.state.player.weapon) {
			if (item.state == "active") {
				activeWeapon = item;
				break;
			}
		}
		if (activeWeapon == null) { return null;}
		return (
			<div class="h-100">
				<img src={ ak47 } alt="ak47"/> { activeWeapon.ammo_clip }/{ activeWeapon.ammo_clip_max } - {activeWeapon.ammo_reserve }
			</div>
		)
	}

	health() {
		return (
			<div class="h-100 h2">
				{ this.state.player.health } ❤️
			</div>
		)
	}

	kda() {
		return (
			<div class="h-100 h2 text-right">
				K{this.state.player.kills }/A{this.state.player.assists }/D{this.state.player.deaths }
			</div>
		)
	}

	name() {
		// Displays player name
		return (
			<div class="h-100 h1 text-left">
				{ this.state.player.name }
			</div>
		)
	}

	gear() {
		// Displays gear player has: kit, armor, bomb
		var armorImg = null;
		if (this.state.player.armor > 0) {
			if(this.state.player.helmet) {
				armorImg = <img src={ armorhelmet } class="icon" alt="armor"/>;
			}
			else {
				armorImg = <img src={ armor } class="icon" alt="armor"/>;
			}
		}
		
		return (
			<div class="h-100 text-left">
				{/* Kit */}
				<img src={ kit } class="icon" alt="kit"/>
				{/* Player helmet*/}
				{armorImg}
			</div>
		)
	}

	render() {


		return (
			<div class="container">
				// Create datasocket and pass the message handler function
				<DataSocket sendData={ this.loadData.bind(this) } />
				<div class="row color-scoreboard-plain">
					<div class="col-8 tight">
						{/* Player Name */}
						<this.name/>
					</div>
					<div class="col-4 tight">
						{/* K/A/D */}
						<this.kda/>
					</div>
				</div>
				<div class="row color-scoreboard-plain">
					<div class="col-2 bg-primary">
						<this.gear/>
					</div>
					<div Class="col-2 bg-primary tight">
						{/* Player Health */}
						<this.health/>
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