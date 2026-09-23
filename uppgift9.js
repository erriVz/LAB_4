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

        if (medlemmar[i].familjetag === "Hund"){
            ärdjur = "är"
        }
        else {
            ärdjur = "är inte"
        }
    console.log(medlemmar[i].namn + " är "+ medlemmar[i].ålder + " år gammal och " + ärdjur + " ett djur ")
    }
}

information(Hushåll)
