// const  tauxInteret = 0.03;
// let solde = 1000;
// let depot = 200;
// let retrait = 150;
// const historiqueOperations = [];

// let depot= 200;
// let retrait= 150; 

class Epargne {
    #solde ;
    #tauxInteret;
    constructor(initialAmount){
    this.#tauxInteret = 0.03
    this.#solde = initialAmount

    }
    // get otherSolde(){
    //     return this.#solde
    // }

    set otherDepot(depot){
        return this.#solde += depot;
    }

    set otherRetrait(retrait){
        return this.#solde-=retrait;
    }
    // set otherInterets(#tauxInteret){
    //     return this.#solde = this.#solde + (this.solde * #tauxInteret);
    // }
}
const compteEpargne = new Epargne(1000)
compteEpargne.otherDepot(200)

// console.log(epargne.#solde);
// console.log(epargne.otherDepot);
// console.log(epargne.otherRetrait);
// console.log(epargne.otherInterets);
// depot= 500;
// console.log(epargne.otherDepot);
// retrait = 800;
// console.log(epargne.otherRetrait);


// console.log(epargne.depot);