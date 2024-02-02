// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.

// Stampa a schermo il contenuto dell'array



// creo un array per contenere i numeri inseriti
let numbersOddArray = [];


// creare un ciclo FOR che chiede il numero 6 volte
// per ora tramite prompt
for (let i = 0; i < 6; i++) {
    
    // inserisco il prompt per chiedere i numeri
    const numbers = Number(prompt(`inserisci il ${i + 1}° numero`));


    if (numbers % 2 !== 0){
        // inserire i numeri nell'array con .push solo se risultano dispari
        numbersOddArray.push(numbers);
    }

    // stampa array a schermo con numeri 
    document.querySelector(".number-odd").innerHTML = `i numeri dispari inseriti sono: <br>` + numbersOddArray;


    // log
    console.log(numbersOddArray);
}
