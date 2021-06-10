const Team = require( "./Team" ).Team
const Player = require( "./Player" ).Player
const Input = require( "./Skills" ).Input
const fileWithPlayers = require( './file' )
const prompt = require('prompt-sync')({sigint: true});

// criar function para_cada retorne novo Player
function para_cada ( objecto_a_serMapeado ) {
    return new Player( objecto_a_serMapeado.playerName, objecto_a_serMapeado.number )
}

const lista_jogadores_sada = fileWithPlayers.map( para_cada )
const team_sada = new Team( "Sada", lista_jogadores_sada )
const player = team_sada.players.find( playerName => playerName.number === 10 )

new Input( team_sada, "serve", player, "+" )
new Input( team_sada, "serve", player, "+" )
new Input( team_sada, "serve", player, "+" )
new Input( team_sada, "serve", player, "+" )



console.log( player )


 
// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
 
while (true) {
  // Get user input
  let skill = prompt('Skill ');
  let number = prompt('Number ')
  let result = prompt('Result ')
  // Convert the string input to a number
  const player = team_sada.players.find( playerName => playerName.number === parseInt(number) )
  new Input( team_sada, skill, player, result )
 
    console.log(player)
}
