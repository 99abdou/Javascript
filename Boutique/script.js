// Liste des produits
const produits = [
    {nom: 'Chemise', prix: 1000},
    {nom: 'Lacoste', prix: 2000},
    {nom: 'T-shirt', prix: 4000},
    {nom: 'Casque', prix: 5000},
    {nom: 'Portable', prix: 60000}
    ];

// Demander à l'utilisateur de choisir un produit
let choixProduit = prompt('Veuillez choisir un produit (chemise, lacoste ou t-shirt) :');
let produitChoisi = produits[choixProduit - 1];

// function choisirProduit() {
//     const choixProduit = parseInt(prompt('Veuillez choisir un produit (1, 2 ou 3) :'));
//     if (choixProduit >= 1 && choixProduit <= produits.length) {
//         const produitChoisi = produits[choixProduit - 1];
//         quantiteNombre(produitChoisi);
//     } else {
//         alert('Choix invalide. Veuillez sélectionner un produit valide.');
//     }
// }

// Demander la quantité souhaitée
let quantite = prompt(`Combien de ${produitChoisi.nom} voulez-vous acheter ?`);
let quantiteNombre = parseInt(quantite, 10);

// Calculer le prix total
let prixTotal = produitChoisi.prix * quantiteNombre;

// Afficher le récapitulatif de la commande
 alert(`Vous avez commandé ${quantiteNombre} ${produitChoisi.nom}(s) pour un prix total de ${prixTotal}Cfa.`);
   

