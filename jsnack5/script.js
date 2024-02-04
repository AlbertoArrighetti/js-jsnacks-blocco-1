// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

// (partendo da 1, il numero N indicato dall'utente è compreso)



// utente inserisce un numero
const userNumber = prompt("Inserisci un numero.");
// creo un array che contenga il numero dell'utente
const userNumberArray = [userNumber];


if (!isNaN(userNumber)) {
    
    // creo un ciclo che mi dia tutti i numeri fino a quello inserito 
    for (i = 1; i <= userNumberArray; i++){
        // numeri elevati al cubo
        let cubeCalc = (i * i * i);
        
        
        // stampa dei numeri
        document.querySelector(".user-numbers").innerHTML = "il numero da te inserito è: " + userNumber;
        // stampa numeri elevati al cubo
        document.querySelector(".cube-numbers").innerHTML += "numero " + i + " = " + cubeCalc + "<br>" ;
      
        // log
        // console.log(cubeCalc);
    }
}else {
    alert("Inserire un numero.")
}


