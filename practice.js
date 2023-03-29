//create an array of numbers and take an input from the user to add it into the array

let arr = [0, 1, 2, 3, 4, 5, 56, 7, 4];
 let a = parseInt(prompt("Enter a number: "));
 arr.push(a);
 console.log(arr);

//keep adding numbers to the array in above question until user adds the 0

let arr2= [2,3,4,5,6,7,8,9,65,43];
let b;
do {
    b = parseInt(prompt("Enter a number: "));
    arr2.push(b);
}while(b != 0);
console.log(arr2);

//filter for numbers divisble by 10 from a given array

let arr3 = [12, 10, 123, 30, 50, 234, 56, 60, 900];
let f = arr3.filter((elements) => {
    return (elements % 10 == 0)
})
console.log(f);


//create an array of square of given numbers

let arr4 = [23,45,67,89,09,87,65,43,21,12,34];
let sq = arr4.map((values)=>{
    return(values*values)
})
console.log(sq);

//use reduce to calculate factorial of a given number from an array of first n natural numbers

let arr5 = [1,2,3,4,5,6,7,8,9,10];
let fact = arr5.reduce((num1,num2)=>{
    return num1 * num2;
})
console.log(fact)