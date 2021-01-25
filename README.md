# CS:GO Gamestate integration hud

Provides a stream overlay from data from CSGO gamestate integration.

Can be used for streaming solo play and spectated matches.

## Setup and Installation

### Gamestate server

Written in python

Start with `python gamereader.py`

Will be able to reacieve gamestate integration info from the game, and forward it to websockets created on localhost port 5678.

### Overlay Webpage

Located in the `react/csgo-gsi` folder.

Install dependencies with `npm i`

Start server with `npm start`.

Will host a webpage on localhost:3000, showing game state info.