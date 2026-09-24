//Arrayer
//Program med en array som skrivs ut, skriver ut första och sista värdet i arrayen, lägger till ett värde i slutet, tar bort första och skriver ut den nya arrayen

"use strict";


let meny = ["Pasta", "Pizza", "Hamburger", "Sushi", "Taco"]

for (let i = 0; i<meny.length; i++){
    console.log(meny[i])
}

console.log(meny[0]);
console.log(meny[4]);

meny.push("Pannkaka");
meny.splice(0,1);
for (let i = 0; i<meny.length; i++){
    console.log(meny[i])
}