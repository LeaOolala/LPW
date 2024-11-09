// alert('Hello world');
// console.log("prenom"); 
const  tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;

solde = depot + solde;
console.log( "Vous avez déposé 200 euros. Nouveau solde : " + solde + " euros");

// Vérifiez si le solde est suffisant pour permettre le retrait.
if (solde >= retrait){
    // Si le solde est suffisant, soustrayez le montant de retrait du solde, 
    //puis affichez : “Vous avez retiré 150 euros. Nouveau solde : X euros.""
    solde = solde-150;
    console.log("Vous avez retiré 150 euros. Nouveau solde : " + solde +" euros.")
}
//Si le solde est insuffisant, affichez un message dans la console : “Solde 
//insuffisant pour effectuer ce retrait.”
else{
    console.log("Solde insuffisant pour effectuer ce retrait.")
}
//Multipliez le solde actuel par le tauxInteret et ajoutez le résultat au solde
solde = solde + (solde + tauxInteret);
