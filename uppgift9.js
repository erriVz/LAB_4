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


function information(Hushåll){

    for (let i=0; i<Hushåll.length; i++){
        
        ärdjur = ""

        if (Hushåll[i].familjetag === "Hund"){
            ärdjur = "är"
        }
        else {
            ärdjur = "är inte"
        }
    console.log(Hushåll[i].namn + " är "+ Hushåll[i].ålder + " år gammal och " + ärdjur + " ett djur ")
    }
}

information(Hushåll)
