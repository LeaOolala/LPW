
const  tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
const historiqueOperations = [];

solde = depot + solde;
// console.log( "Vous avez déposé 200 euros. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Dépôt de 200 euros");

// Vérif solde pour retrait.
if (solde >= retrait){

    solde = solde-retrait;
    // console.log("Vous avez retiré 150 euros. Nouveau solde : " + solde +" euros.")
    historiqueOperations.push("Retrait de 150 euros");
}
else{console.log("Solde insuffisant pour effectuer ce retrait.")}

solde = solde + (solde * tauxInteret);
// console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Ajout des taux d'intérêt de 3%");

let nouveauDepot = 500;

solde = solde + nouveauDepot;
// console.log("Vous avez déposé 500 euros. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Dépôt de 500 euros");

let nouveauRetrait = 800;

if (solde >= nouveauRetrait){
    solde = solde - nouveauRetrait;
    // console.log("Vous avez retiré 800 euros. Nouveau solde : " + solde +" euros.");
    historiqueOperations.push("Retrait de 800 euros");

    solde = solde + (solde * tauxInteret);
    // console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde +" euros");
    historiqueOperations.push("Ajout des taux d'intérêt de 3%");

    console.table(historiqueOperations);
}
else { console.log("Solde insuffisant pour effectuer ce retrait.")}