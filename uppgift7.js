//Arrayer och funktioner
//Program som innehåller en array men tal som sedan räknar ut totala summan av alla värden i arrayen och skriver ut i console

tal = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function summan_array(arr){ //loopar genom arrayen och lägger till varje värde till variabeln "summa"
    summan = 0;
    for(let i = 0; i < arr.length; i++) {
        summan += arr[i]
    }
    return summan;
} 

console.log(summan_array(tal))