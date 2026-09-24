//Arrayer
//Program med en array som skrivs ut, skriver ut första och sista värdet i arrayen, lägger till ett värde i slutet, tar bort första och skriver ut den nya arrayen

"use strict";


let meny = ["Pasta", "Pizza", "Hamburger", "Sushi", "Taco"]

console.log(meny);

console.log("Först i meny:",meny[0]);
console.log("Sist i meny:",meny[4]);

meny.push("Pannkaka");  //Lägger till pannkaka sist i arrayen meny
meny.splice(0,1);       //Tar bort första elementet i arrayen

console.log(meny);
