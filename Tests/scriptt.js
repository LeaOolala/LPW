class Agent {
    constructor(type,rank="iron", player="bastard") {
        this.player=player
        this.type=type
        this.rank=rank
    }
    #presentation(){
        return `Hello, I am ${this.player}`
    }
    prepresentation(){
        return this.#presentation()
    }
}
const killjoy = new Agent( "sentinel", "bronze", "Fanny")
const harbor = new Agent( "controller", "radiant" ,"Lea")
const clove = new Agent("smoker", "paper", "Jessy" )
const fade = new Agent( "initiator", "gold")
const omen = new Agent("smoker", "iron", "Louano")

console.log(fade.prepresentation())

//autre test
