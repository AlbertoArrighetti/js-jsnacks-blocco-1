// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

// (partendo da 1, il numero N indicato dall'utente è compreso)



// utente inserisce un numero
const userNumber = prompt("Inserisci un numero.");


if (!isNaN(userNumber)) {
    
    // creo un ciclo che mi dia tutti i numeri fino a quello inserito 
    for (let i = 1; i <= userNumber; i++){

        // numeri elevati al cubo
        // posso usare anche math.pow(i, 3); oppure i ** 3;

        
        let cubeCalc = (i * i * i);
        
        
        // stampa dei numeri
        document.querySelector(".user-numbers").innerHTML = "il numero da te inserito è: " + userNumber;
        // stampa numeri elevati al cubo
        document.querySelector(".cube-numbers").innerHTML += "numero " + i + " = " + cubeCalc + "<br>" ;
    }
}else {
    alert("Inserire un numero.")
}


