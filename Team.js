class Team {
    constructor( name, players ) {
        this.name = name
        this.players = players
    }

    printProperties () {
        console.log( "Name:", this.name )
        console.log( "Players: ", this.players )
    }
}

module.exports.Team = Team

