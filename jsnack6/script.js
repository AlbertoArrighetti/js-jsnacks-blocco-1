// Calcola la somma e la media dei primi 10 numeri.



// dichiaro una variabile per la somma
let sum = 0;
// dichiaro una variabile per la media
let avarage = 0;


// creo un ciclo FOR per generare i primi 10 numeri (da 1 a 10)
for (i = 1; i <= 10; i++){

    // somma
    sum += i;
}

// media
avarage = sum / 10;


// stampa elementi in pagina
document.querySelector(".numbers-sum").innerHTML = "La somma dei numeri da 1 a 10 è: " + sum;
document.querySelector(".numbers-avarage").innerHTML = "La media è: " + avarage;
