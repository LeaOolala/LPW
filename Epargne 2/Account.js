export class Account{
    #balance
    #historic = []
    interestRate = 0.03

    constructor(initialBalance){
        this.#balance = initialBalance
    }

    get balanceDisplay(){
        console.log(this.#balance.toFixed(2))
    }
    get historicDisplay(){
        console.table(this.#historic)
    }

    withdrawal(quantity){
        try{
            if (this.#balance >= quantity){

                this.#balance = this.#balance - quantity;
                this.#historic.push(`Retrait de ${quantity}, le ${new Date().toLocaleString()}`)
            }
            else{
                throw new Error("Solde insuffisant pour effectuer ce retrait.")
            }
        }
        catch(err){
            console.log(err)
        }
    }

    deposit(quantity){
        try{
            if(quantity>=1){
                this.#balance = this.#balance + quantity;
                this.#historic.push(`Depot de ${quantity}, le ${new Date().toLocaleString()}`)
            }
            else{
                throw new Error("Vous avez entré une quantité inferieur à 1; la transaction est annulée")
            }
        }
        catch(err){
            console.log(err)
        }
    }
}