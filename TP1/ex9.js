// Exercice 9

async function getAPIData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération");
        }
        const data = await response.json();
        // afficher les 5 premiers
        console.log(data.slice(0,5));
    } catch (err) {
        console.error("Erreur :", err.message);
    }
}

getAPIData()