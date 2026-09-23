//Vilkor
//Program som beroende värde på variable "ålder" skriver ut i console om barn/pensionär/vuxen

ålder = 65

if (ålder<18){
    console.log("Barn");
}
else if (ålder>=65){
    console.log("Pensionär")
}
else {
    console.log("Vuxen")
}