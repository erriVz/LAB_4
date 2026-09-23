tal = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function summan_array(tal){
    summan = 0;
    for(let i = 0; i < tal.length; i++) {
        summan += tal[i]
    }
    return summan;
} 

console.log(summan_array(tal))