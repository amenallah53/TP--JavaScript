// Exercice 1

// Déclaration
var x = 1;
let y = 2;
const z = 3;

{
    var x = 10;   // var est redéclarée et visible en dehors du bloc
    let y = 20;   // let est limitée à ce bloc
    const z = 30; // const est limitée à ce bloc
    console.log("Dans le bloc :", x, y, z); // 10 20 30
}

console.log("En dehors du bloc :", x, y, z); // 10 2 3
