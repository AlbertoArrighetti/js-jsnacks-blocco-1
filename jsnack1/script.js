// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta,
// poi la parola più lunga.



// chiedo all'utente di inserire 2 parole
const firstWord = prompt("Inserire la prima parola.");
const secondWord = prompt("Inserire la seconda parola.");


// controllo che le 2 parole siano state inserite
if(firstWord == null || secondWord == null) {
    alert("Ricarica la pagina e inserisci entrambe le parole")
}



// prelevo l'elemento html
const resultElement = document.querySelector(".result");

// creo il controllo con if e else per verificare le due parole
if (firstWord.length > secondWord.length) {
    // se la prima è più lunga
    resultElement.innerHTML = `La parola: ${firstWord} <br>
    è più lunga della parola: ${secondWord}`;

}else if (firstWord.length < secondWord.length) {
    // se la seconda è più lunga 
    resultElement.innerHTML = `La parola: ${secondWord} <br>
    è più lunga della parola: ${firstWord}`;

} else {
    // se sono uguali
    resultElement.innerHTML = `La parole: ${firstWord} e ${secondWord} sono uguali`;
}
