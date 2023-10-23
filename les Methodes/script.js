// // Exercice1 : Filtrer et multiplier les nombres pairs

// // creation d'une fonction nommé filterAndMultiply

// function filterAndMultiply() {
//     let myArray = [2, 3, 4, 5, 6];
//     // function isEven(num) {
//     //     return num % 2 === 0;
//     //     }
//     //     const filteredArray = myArray.filter(isEven);
//     //     const result = filteredArray.map((x) => x * 2);
//     //     console.log(result);

//     // Dans la fonction filterAndMultiply, utilisez une boucle pour parcourir chaque nombre du tableau d'entrée.
//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] % 2 == 0) {
//             myArray[i] *= 2;
//             }
//     }

//     // Si le nombre est pair, multipliez-le par le facteur de multiplication passé en paramètre.
//     // Stockez les nombres pairs multipliés dans un nouveau tableau.
//     // Renvoyez ce tableau.
//     function isEven(num) {
//             return num % 2 === 0;
//             }
//             const filteredArray = myArray.filter(isEven);
//             const result = filteredArray.map((x) => x * 10);
//             console.log(result);
// }
// filterAndMultiply()

function mergeSortedArrays () {
    
    const tab1 = [1,3,5,7];
    
    const tab2 = [2,4,6,8];
    
    // filtrer les éléments de tab1 et de copier dans tab3
    
    const mergedArray =tab1.concat(tab2);
    // trier la fusion des tableaux
    // const sortedMergedArray = mergedArray.sort((a, b)=> a -b );
    // afficher le résultat
   mergedArray.sort();
   console.log(mergedArray);
}
mergeSortedArrays()

