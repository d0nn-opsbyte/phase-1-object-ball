console.log(gameObject());
/*
{
home: {
teamName: "BrooklynNets",
colors: ["Black", "White"],
players: {
"Allan Anderson":{
number:0,
shoe:16,
points:22,
rebounds:12,
assists:12,
steals:3,
blocks:1,
slamDunks:1,},
"Reggie Evans":{
number:30,
shoe:14,
points:12,
rebounds:12,
assists:12,
steals:12.,
blocks:12,
slamDunks:7,},
"Broo Lopez":{
number:11,
shoe:17,
points:17,
rebounds:19,
assists:10,
steals:3,
blocks:1,
slamDunks:15,},
"Mason PLumlee":{
number:1],
shoe:19,
points:26,
rebounds:12,
assists:6,
steals:3,
blocks:8,
slamDunks:5,},
"Jason Terry":{
number:31,
shoe:15,
points:19,
rebounds:2,
assists:2,
steals:4,
blocks:11,
slamDunks:1,},
}
}
};

away: {
teamName: "Charlotte Hornets"
colors: ["Turquoise", "Purple"],
players: {
"Jeff Adrien": {
number:4,
shoe:18,
points:10,
rebounds:1,
assists:1,
steals:2,
blocks:7,
slamDunks:2,},
"Bismak Biyombo": {
number:0,
shoe:16,
points:12,
rebounds:4,
assists:7,
steals:7,
blocks:15,
slamDunks:10,},
"DeSagna Diop": {
number:2,
shoe:14,
points:24,
rebounds:12,
assists:12,
steals:4,
blocks:5,
slamDunks:5,},
"Ben Gordon": {
number:8,
shoe:15,
points:33,
rebounds:3,
assists:2,
steals:1,
blocks:1,
slamDunks:0,},
"Brendan Haywood": {
number:33,
shoe:15,
points:6,
rebounds:12,
assists:12,
steals:22,
blocks:5,
slamDunks:12,},
}
};
*/
function mostPointsScored() {
  let maxPoints = 0;
  let topScorer = '';
  const allPlayers = { ...gameObject().home.players, ...gameObject().away.players };

  for (let player in allPlayers) {
    if (allPlayers[player].points > maxPoints) {
      maxPoints = allPlayers[player].points;
      topScorer = player;
    }
  }

  return topScorer;
}
function winningTeam() {
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in gameObject().home.players) {
    homePoints += gameObject().home.players[player].points;
  }
  for (let player in gameObject().away.players) {
    awayPoints += gameObject().away.players[player].points;
  }

  return homePoints > awayPoints ? gameObject().home.teamName : gameObject().away.teamName;
}

function playerWithLongestName() {
  let longestName = '';
  const allPlayers = { ...gameObject().home.players, ...gameObject().away.players };

  for (let player in allPlayers) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  const allPlayers = { ...gameObject().home.players, ...gameObject().away.players };
  let maxSteals = 0;
  let topStealer = '';
  let longestNamePlayer = playerWithLongestName();

  for (let player in allPlayers) {
    if (allPlayers[player].steals > maxSteals) {
      maxSteals = allPlayers[player].steals;
      topStealer = player;
    }
  }

  return longestNamePlayer === topStealer;
}