// Exercice 2

// Fonction classique
function somme(a, b) {
    return a + b;
}

// Arrow Function with explicit return
const somme1 = (a, b) => {
    return a + b;
};

// Arrow Function with implicit return
const somme2 = (a, b) => a + b;

console.log(somme(2, 3));  
console.log(somme1(2, 3));
console.log(somme2(2, 3));
