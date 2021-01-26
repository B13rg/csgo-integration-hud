Scoreboards

# Functionality

* customize colors (config or color picker)
* set "Alpha" color
* Generate sets of stats after the match that would be shown on "analysts" desk (auto-generate graphs etc?)
* Homepage with links to each, place to set settings for everything
  * Default team names, random team names
  * color scheme

# Parts

## Match scorecard

Placed at top of screen, show limited info

* Team names
  * set manually?
* Team logos
  * set manually?
  * t/ct logos
* Team scores
  * [map][team_ct][score]
  * [map][team_t][score]
* Time left in round (or bomb symbol)
  * [phase_countdowns][phase]
  * [phase_countdowns][phase_ends_in]
  * [bomb][state] == planted
* Bomb plant bar
  * [bomb][countdown]
* Round number
  * [map][round]
* number of series wins
  * [map][team_ct][matches_won_this_series]
  * [map][team_t][matches_won_this_series]
  * [map][num_matches_to_win_series]

## Complete Scoreboard

Meant to be shown during pauses and after game
Combines both teams

* All players
  * [allplayers][idx][name]
  * [allplayers][idx][team]
* Kills, deaths, assists
  * [allplayers][idx][match_stats][kills]
  * [allplayers][idx][match_stats][assists]
  * [allplayers][idx][match_stats][deaths]
* map name
  * [map][name]
* mode
  * [map][mode]
* round wins
  * [map][round_wins][idx]
* Flashes
* utility damage
* ADR
  * calculated
  * [allplayers][idx][state][round_totaldmg]
* Clutches?
* 2k, 3k, 4k, aces
  * calculated

## Team Scoreboard

Meant to be placed on the left or right side of the screen.
Set by parameter?

* Team Players
  * [allplayers][idx][team]
* total Kills, headshots, deaths, assists
  * [allplayers][idx][match_stats][kills]
  * [allplayers][idx][match_stats][assists]
  * [allplayers][idx][match_stats][deaths]
* round kills, headshots, assists
  * [allplayers][idx][state][round_kills]
  * [allplayers][idx][state][round_killhs]
  * [allplayers][idx][state][round_totaldmg]
* Loadout (and active weapon)
  * [allplayers][idx][weapons][weapon_idx][name]
  * [allplayers][idx][weapons][weapon_idx][state] == active
* Armor, kit, bomb
  * [allplayers][idx][state][armor]
  * [allplayers][idx][state][helmet]
* Money
  * [allplayers][idx][state][money]
* health
  * [allplayers][idx][state][health]
* alive/dead
  * [allplayers][idx][state][health]
* Flashed/smoked/burning
  * [allplayers][idx][state][flashed]
  * [allplayers][idx][state][burning]
  * [allplayers][idx][state][smoked]

## Team Scoreboard between rounds

Between rounds during pre-round wait time, teams scoreboards show extra info

* Players
  * [allplayers][idx][name]
  * [allplayers][idx][team]
  * [allplayers][idx][observer_slot]
* Kills, deaths, assists
  * [allplayers][idx][match_stats][kills]
  * [allplayers][idx][match_stats][assists]
  * [allplayers][idx][match_stats][deaths]
* Loadout
  * [allplayers][idx][weapons][weapon_idx][name]
  * [allplayers][idx][weapons][weapon_idx][state] == active
* health
  * [allplayers][idx][state][health]
* Armor, kit, bomb
  * [allplayers][idx][state][armor]
  * [allplayers][idx][state][helmet]
* utility damage
* Total money (before spent)
  * calculated
* Difference between this round money and previous round
  * calculated
* Money spent
  * calculated
* round loss bonus
  * calculated
  * [map][team_ct][consecutive_round_losses]
  * [map][team_t][consecutive_round_losses]
* MVPs
  * [allplayers][idx][match_stats][mvps]
* Score
  * [allplayers][idx][match_stats][score]
* previous round damage
* Previous round wins/losses
  * [map][round_wins][idx]

## Team utility card

Displayed above team scoreboards

Appears when bomb planted?

* Total of each type of utility
  * [allplayers][idx][team]
  * [allplayers][idx][weapons][weapon_idx][type] == grenade
* Team gear value
  * [allplayers][idx][team]
  * [allplayers][idx][state][equip_value]

## Player card

Shown while spectating a player

* Player name
  * [player][name]
* Icon
  * calculated
* Weapons
  * [player][weapons]
* Active weapon (highlight)
  * [player][weapons][idx][state] == active
* Kills, headshots, deaths, assists
  * [player][match_stats][kills]
  * [player][match_stats][assists]
  * [player][match_stats][deaths]
  * headshots calculated
* Round kills, headshots, assists
  * [player][state][round_kills]
  * [player][state][round_killhs]
  * assists calculated
* armor, kit, bomb
  * [player][state][armor]
  * [player][state][helmet]
  * [player][weapons][idx][type] == bomb?
* health
  * [player][state][health]
* ammo
  * [player][weapons][idx][state] == active
  * [player][weapons][idx][ammo_clip]
  * [player][weapons][idx][ammo_clip_max]
  * [player][weapons][idx][ammo_reserve]
* fire mode
* utility
  * [player][weapons][idx][type] == grenade
* kit
* flashed/smoked/burning icon over player icon
  * [player][state][flashed]
  * [player][state][smoked]
  * [player][state][burning]

## Pre-round graphs

Appear in middle of screen, compare different stats between teams in graphs

* money round to round
* value of gear round to round (also show if they won the round)
* Who won which rounds
* weapon kill money round by round (leaves out round loss/win bonuses)


## Custom map

Stylized game map, shows where players are, sightlines?

* player location/direction
  * [allplayers][idx][position]
  * [allplayers][idx][forward]
* bomb plant
  * [bomb][position]


## Killfeed

* kills
* bomb plant
* Round over (for post-round kills)



