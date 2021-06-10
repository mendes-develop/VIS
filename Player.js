class Player {
    constructor( playerName, number ) {
        this.name = playerName
        this.number = number
        this.totalPoints = 0
    }

    accumulator(input){
        if(input.result === "+"){
            this.totalPoints += 1
        } else if(input.result === "-"){
            this.totalPoints -= 1
        } 
        
    }
}

module.exports.Player = Player