// var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.
// const mapNewNumbers = numbers.map(function double(x){
//     return 2*x;
// })
// console.log(mapNewNumbers)

// var eachNewNumber = [];
// numbers.forEach(function (y){
//     eachNewNumber.push(3*y);
// })
// console.log(eachNewNumber);

//Filter - Create a new array by keeping the items that return true.
// const filterNumbers = numbers.filter(function (z){
//     return z<10;
// })
// console.log(filterNumbers);

// var eachFilterNumber = []
// numbers.forEach(function (num){
//     if (num < 10){
//         eachFilterNumber.push(num);
//     } 
// })
// console.log(eachFilterNumber);


//Reduce - Accumulate a value by doing something to each item in an array.

// const redNumber = numbers.reduce(function(newNumber, currentNumber){
//     return newNumber+currentNumber;
// })
// console.log(redNumber)

// var total = 0;
// numbers.forEach(function (num){
//     return total+= num;
    
// })
// console.log(total)

//Find - find the first item that matches from an array.

// const findNumber = numbers.find(function (num){
//     if (num > 10){
//         return num;
//     }
// })
// console.log(findNumber)

//FindIndex - find the index of the first item that matches.

// const findIndex = numbers.findIndex(function (num){
//     if (num > 10){
//         return num;
//     }
// })
// console.log(findNumber)


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import emojipedia from "./emojipedia";

const ajay = emojipedia.map(function (emoji){
    return emoji.meaning.substring(0,100);
}
)
console.log(ajay)