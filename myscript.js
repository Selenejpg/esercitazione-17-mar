//controllare che un numero richiesto tramite prompt sia positivo
//in caso contrario richiedere il numero

let numeroRichiesto = prompt("Scrivi un numero");

//while (numeroRichiesto < 0 ) {
    //numeroRichiesto = prompt("Reinserisci un numero")
//}



do {
    let numeroRichiesto = prompt("Scrivi un numero");
} while (numeroRichiesto < 0);

document.getElementById("numero").innerHTML = numeroRichiesto;


 let test = prompt("testo")
 console.log(test)

 