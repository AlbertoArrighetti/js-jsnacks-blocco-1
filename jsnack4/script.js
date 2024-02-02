// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// creo un array per contenere il numero
let numberArray = [];

// prompt per il numero a 4 cifre
let number = prompt("Inserire numero a 4 cifre:");

// dichiaro variabile somma
let sum = 0;

// controllo che il numero sia a 4 cifre
if (!isNaN(number) && number.length === 4) {
    
    // inserire i numeri nell'array con .push
    numberArray.push(number);  
    
    let digit1 = Math.floor(number[0]);
    let digit2 = Math.floor(number[1]);
    let digit3 = Math.floor(number[2]);
    let digit4 = Math.floor(number[3]);

    
    // somma 
    sum = digit1 + digit2 + digit3 + digit4

}else {
    // se non è a 4 cifre
    alert("error");
}


document.querySelector(".sum").innerHTML = `il tuo numero dà come somma di ogni cifra: ` + sum;
 