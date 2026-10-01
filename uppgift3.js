//Vilkor, uppgift 3 av Victor H, 2026
//Program som beroende värde på variable "ålder" skriver ut i console om barn/pensionär/vuxen

"use strict";

let ålder = 65

if (ålder<18){ //om ålder är mindre än 18
    console.log("Barn");
}
else if (ålder>=65){ //om ålder är lika med eller större än 65
    console.log("Pensionär")
}
else {
    console.log("Vuxen")
}