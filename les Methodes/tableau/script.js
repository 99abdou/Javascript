// Exercice2 : Fusionner deux tableaux triés
// Écrivez une fonction nommée mergeSortedArrays qui prend deux tableaux triés de nombres en entrée et renvoie un nouveau tableau trié contenant tous les éléments des deux tableaux d'origine.

function mergeSortedArrays () {
    
    const tab1 = [1,3,5,7];
    
    const tab2 = [2,4,6,8];
    
    // trier la fusion des tableaux
    const mergedArray =tab1.concat(tab2);
   
   mergedArray.sort();
   console.log(mergedArray);
}
mergeSortedArrays()git 