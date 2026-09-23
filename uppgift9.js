//Sammanhängade program
//Program med objekt i en array där sedan en funktion loopar arrayen och skriver ut i console informationen i varje objekt

Hushåll = [
    {
        namn: "Victor",
        ålder: 25,
        familjetag: "Människa"
    },
    {
        namn: "Ricardo",
        ålder: 57,
        familjetag: "Människa"
    },
    {
        namn: "Zeb",
        ålder: 1,
        familjetag: "Hund"
    }
];


function information(medlemmar){

    for (let i=0; i<medlemmar.length; i++){
        
        ärdjur = ""

        if (medlemmar[i].familjetag === "Hund"){ //om .familjetag är lika med "hund" sätt ärdjur till "är". annars sätt ärdjur till "är inte"
            ärdjur = "är"
        }
        else {
            ärdjur = "är inte"
        }
    console.log(medlemmar[i].namn + " är "+ medlemmar[i].ålder + " år gammal och " + ärdjur + " ett djur ")
    }
}

information(Hushåll) //Kallar funktionen med arrayen Hushåll
