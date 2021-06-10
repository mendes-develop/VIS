const result = {
    "+": "positivo",
    "-": "negativo",
    "a": "acao"
}

class Relatorio {
    constructor() {

    }
}

class Input {
    constructor( team, skill, player, result ) {
        this.team = team
        this.skill = skill
        this.player = player
        this.result = result

        this.player.accumulator( this )
    }


}

module.exports.Input = Input

