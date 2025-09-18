// Exercice 5

const livre = {
    titre: "Harry Potter and the Philosopher's Stone",
    auteur: "J.K Rowling",
    annee: 1997,
    getInfo() {
        return `This book is named "${this.titre}" written by ${this.auteur} and published in ${this.annee}`;
    }
};

// Exemple d'utilisation :
console.log(livre.getInfo());