// Il software deve chiedere per 10 volte
// all’utente di inserire un numero.

// Il programma stampa la somma di tutti i numeri inseriti.

// creo un array per contenere i numeri inseriti
let numberArray = [];
// dichiaro già la somma
let sum = 0;

// creare un ciclo FOR che chiede il numero 10 volte
// per ora tramite prompt
for (let i = 0; i < 10; i++) {
    
    // inserisco il prompt per chiedere i numeri
    const numbers = Number(prompt(`inserisci il ${i + 1}° numero da sommare`));

    // variabile per ottenere la somma
    sum = sum + numbers;
    // inserire i numeri nell'array con .push
    numberArray.push(numbers);
    
    console.log(numberArray);
    console.log("numero :" + sum);


    document.querySelector(".number-choosed").innerHTML = "I numeri inseriti sono: " + numberArray;
    document.querySelector(".sum-of-all").innerHTML = "la somma dei numeri è: " + sum;
}



console.log(sum);