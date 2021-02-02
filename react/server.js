http = require('http');
fs = require('fs');

var version = "1.0.0";
var csgoport = 8000;
var webport = 8282;
var websocketPort = 5678;

var io = require('socket.io');

console.log()
console.log("\tStarting CSGO GameState Integration HUD " + version + " by Mimc14");
console.log("\thttps://github.com/Mimc14/csgo-integration-hud");

io.on('connection', function (socket) {

});


server = http.createServer(function (req, res) {

	if (req.method == 'POST') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});

		var body = '';
		req.on('data', function (data) {
			body += data;
		});
		req.on('end', function () {
			console.log("POST payload: " + body);
			update(JSON.parse(body));
			res.end('');
		});

	} else {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		var html = 'yes';
		res.end(html);
	}

});

var map;
var player;

var round = {
	phase: "",
	timestart: 0,
	time: 0,
	maxTime: 0,
	bomb: {
		planted: false,
		timestart: 0,
		time: 0,
		maxTime: 40
	}
};

function update(json) {
	if (json.round) {
		if (!(round.phase === json.round.phase)) {
			round.timestart = json.provider.timestamp;
			round.phase = json.round.phase;
		}

		var maxTime = 0;
		if (json.round.phase === 'live') {
			maxTime = 115;
		} else if (round.phase === 'freezetime') {
			maxTime = 15;
		} else {
			maxTime = 7;
		}
		round.time = maxTime - (new Date().getTime() / 1000 - round.timestart);
		round.maxTime = maxTime;

		if (!round.bomb.planted && json.round.bomb === 'planted') {
			round.bomb.planted = true;
			round.bomb.timestart = json.provider.timestamp;
		} else if (round.bomb.planted && json.round.bomb !== 'planted') {
			round.bomb.planted = false;
		}

		if (round.bomb.planted) {
			round.bomb.time = 40 - (new Date().getTime() / 1000 - round.bomb.timestart);
		}

		json.extra = {};
		json.extra.round = round;
	}

	io.emit("update", JSON.stringify(json));
}

server.listen(csgoport);
