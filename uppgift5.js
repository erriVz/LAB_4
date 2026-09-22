meny = ["Pasta", "Pizza", "Hamburger", "Sushi", "Taco"]

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