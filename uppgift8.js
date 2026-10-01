//Objekt, uppgift 8 av Victor H, 2026
//Program som har ett objekt där en funktion sedan tar emot ett objekt och skriver ut informationen från objektet

"use strict";

let bok = {
    titel: "The Last Wish",
    författare: "Andrzej Sapkowski",
    utgivningsår: 1993
}

function om_bok(boken){
    console.log("Titel: " + boken.titel);
    console.log("Författare: " + boken.författare);
    console.log("Utgivingsår: " + boken.utgivningsår);    
}

om_bok(bok) //function kallas med bok i 