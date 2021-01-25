var ws = new WebSocket("ws://127.0.0.1:5678/"),
    messages = document.createElement('ul');
ws.onmessage = function(event) {
    setinnerbyclassname('dump', event.data);
    var updateData = JSON.parse(event.data);
    setMatchData(updateData);
    setRoundData(updateData);
    setPlayerData(updateData);
    setinnerbyclassname('position', updateData['playerItem'].position);
};

function setinnerbyclassname(classname, innerhtml) {
    var elementList = document.getElementsByClassName(classname);
    for (item in document.getElementsByClassName(classname)){
        item.innerHTML = innerhtml;
    }
}

function setMatchData(inputData) {
    updateData = inputData['matchItem'];
    setinnerbyclassname('mode', updateData.mode);
    setinnerbyclassname('mapName', updateData.map_name);
    setinnerbyclassname('phase', updateData.phase);
    setinnerbyclassname('scoreCT', updateData.score_ct);
    setinnerbyclassname('scoreT', updateData.score_t);
    setinnerbyclassname('timestamp', updateData.timestamp);
}

function setRoundData(inputData) {
    updateData = inputData['roundItem'];
    setinnerbyclassname('roundNum', updateData.roundNum);
    setinnerbyclassname('phase', updateData.phase);
    setinnerbyclassname('phaseTime', updateData.phaseTime);
}

function setPlayerData(inputData) {
    updateData = inputData['playerItem'];
    if (updateData.team == "ct") {
        getElementsByClassName('team').style = "background-color:#327cad;"
    } else {
        getElementsByClassName('team').style = "background-color:#bc8302;"
    }
    setinnerbyclassname('name', updateData.name);

    setinnerbyclassname('kills', updateData.kills);
    setinnerbyclassname('assists', updateData.assists);
    setinnerbyclassname('deaths', updateData.deaths);
    setinnerbyclassname('mvps', updateData.mvps);
    setinnerbyclassname('score', updateData.score);

    setinnerbyclassname('health', updateData.health);
    setinnerbyclassname('armor', updateData.armor);
    setinnerbyclassname('helmet', updateData.helmet);
    setinnerbyclassname('money', updateData.money);
    setinnerbyclassname('round_kills', updateData.round_kills);
    setinnerbyclassname('round_killhs', updateData.round_killhs);
    setinnerbyclassname('round_totaldmg', updateData.round_totaldmg);
    setinnerbyclassname('equip_value', updateData.equip_value);
    setinnerbyclassname('position', updateData.position);
}

window.onbeforeunload = function() {
    ws.onclose = function() {}; // disable onclose handler first
    ws.close();
};