// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.




// prompt per il numero a 4 cifre
const number = prompt("Inserire numero a 4 cifre:");
// dichiaro variabile somma
let sum = 0;

// controllo che sia un numero e che sia di 4 cifre
if (number.length != 4 || isNaN(number)){

    // errore
    alert("inserisci un numero valido.")
}else {
    
    // creo un ciclo for
    for (let i = 0; i < number.length; i++ ){
    
        // sommo tutti i numeri uno alla volta 
        // con number converto la stringa in 4 cifre numeriche 
        sum += Number(number[i]);
    }
}




document.querySelector(".sum").innerHTML = `il tuo numero dà come somma di ogni cifra: ` + sum;
 
















