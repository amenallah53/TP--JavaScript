// Exercice 8

//Exemple : Créer une fonction qui retourne une promesse

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

attendre(1000).then(() => console.log("1 seconde écoulée"));