// alert('Hello world');
// console.log("prenom"); 
const  tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
const historiqueOperations = [];

solde = depot + solde;
console.log( "Vous avez déposé 200 euros. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Dépôt de 200 euros");

// Vérifiez si le solde est suffisant pour permettre le retrait.
if (solde >= retrait){

    // Si le solde est suffisant, soustrayez le montant de retrait du solde, 
    //puis affichez : “Vous avez retiré 150 euros. Nouveau solde : X euros.""
    solde = solde-retrait;
    console.log("Vous avez retiré 150 euros. Nouveau solde : " + solde +" euros.")
    historiqueOperations.push("Retrait de 150 euros");
}

//Si le solde est insuffisant, affichez un message dans la console : “Solde 
//insuffisant pour effectuer ce retrait.”
else{
    console.log("Solde insuffisant pour effectuer ce retrait.")
}

//Multipliez le solde actuel par le tauxInteret et ajoutez le résultat au solde
solde = solde + (solde * tauxInteret);

//Utilisez console.log() pour afficher le message : “Intérêts annuels de 3% ajoutés.
// Nouveau solde : X euros.”
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Ajout des taux d'intérêt de 3%");

// Créez une nouvelle variable appelée nouveauDepot avec une valeur de 500.
let nouveauDepot = 500;

// Ajoutez ce montant au solde et affichez un message similaire à celui utilisé pour le
// premier dépôt.
solde = solde + nouveauDepot;
console.log("Vous avez déposé 500 euros. Nouveau solde : " + solde + " euros");
historiqueOperations.push("Dépôt de 500 euros");

// Créez une variable appelée nouveauRetrait avec une valeur de 800.
let nouveauRetrait = 800;

// Effectuez un retrait en vérifiant que le solde est suffisant et affichez un message comme
// pour le premier retrait.
if (solde >= nouveauRetrait){
    solde = solde - nouveauRetrait;
    console.log("Vous avez retiré 800 euros. Nouveau solde : " + solde +" euros.");
    historiqueOperations.push("Retrait de 800 euros");

    // Enfin, recalculer les intérêts avec ce nouveau solde et affichez le résultat dans la console.
    solde = solde + (solde * tauxInteret);
    console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde +" euros");
    historiqueOperations.push("Ajout des taux d'intérêt de 3%");

    //tableau
    // console.table(historiqueOperations);
    for (i=0; i<historiqueOperations.length; i++){
        console.log(historiqueOperations[i]);
    }
}
else { console.log("Solde insuffisant pour effectuer ce retrait.")}