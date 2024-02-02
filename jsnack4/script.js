// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// creo un array per contenere il numero
let numberArray = [];

// prompt per il numero a 4 cifre
let number = prompt("Inserire numero a 4 cifre:");


// controllo che il numero sia a 4 cifre
if (!isNaN(number) && number.length === 4) {
    // dichiaro variabile somma
    let sum = 0;
    
    // inserire i numeri nell'array con .push
    numberArray.push(number);  
    
    let digit1 = Math.floor(numberArray / 1000);
    let digit2 = Math.floor((numberArray % 1000) / 100);
    let digit3 = Math.floor((numberArray % 100) / 10);
    let digit4 = number % 10;

    
    // somma 
    sum = digit1 + digit2 + digit3 + digit4
    
    
    
    
    
    // log
console.log(sum);
console.log(numberArray);




    
   
}else {
    // se non è a 4 cifre
    alert("error");
}



 