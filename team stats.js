const team={
_players:[{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}],
_games: [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}],
get players(){
  return this._players;
},get games(){
  return this._games;
},
addPlayer(firstName,lastName,age){
const player={
  firstName:firstName,
  lastName:lastName,
  age:age
}
return this.players=player;
},
addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    return this.games=game;
  }
};
console.log(team.addPlayer('Steph','Curry',28));
console.log(team.addPlayer('Lisa','Leslie',44));
console.log(team.addPlayer('Bugs','Bunny',76));
console.log(team.addGame('Titans',100,98));
console.log(team.addGame('Basketball',105,45));
console.log(team.addGame('FootBall',9,5));