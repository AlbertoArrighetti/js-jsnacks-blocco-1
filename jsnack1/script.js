// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta,
// poi la parola più lunga.

// chiedo all'utente di inserire 2 parole
const firstWord = prompt("Inserire la prima parola.");
const secondWord = prompt("Inserire la seconda parola.");

// creo il controllo con if e else per verificare le due parole
// sapendo che ci sono 3 casi

// creo una variabile per capire se le condizioni si avverano
let flag;

if (firstWord.length > secondWord.length) {
    flag = "maggiore";
}else if (firstWord.length < secondWord.length) {
    flag = "minore";
} else {
    flag = "uguale";
}


// verifico il risultato
console.log(flag);