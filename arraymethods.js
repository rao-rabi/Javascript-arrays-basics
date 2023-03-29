let numArray = [2, 4, 6, 8, 45];
numArray.toString();
console.log(numArray);
console.log(numArray.join(' and '));
numArray.pop();
console.log(numArray);
numArray.push(34);
console.log(numArray);
let shift = numArray.shift();
console.log(shift);
let unshift = numArray.unshift(23);
console.log(unshift, numArray);

let numArray2 = [2, 3, 4, 6, 5, 7, 8, 5];
delete numArray2[1];
console.log(numArray2 , numArray2.length); 

let numArray3 = [2, 3, 4, 56, 5, 4, 55, 33];

let newArray = numArray.concat(numArray2,numArray3);
console.log(newArray,newArray.length);
let compare = (a, b) => {
    return a - b;            //for asscending order, for descending array do b-a
}

numArray3.sort(compare);
console.log(numArray3);

console.log(numArray3.reverse());


let deletedNumbers = numArray3.splice(2, 4, 1021, 1022, 1023, 1024, 1025);  //deletedNumbers to get deleted numbers from array
console.log(numArray3);
console.log(deletedNumbers);

let sliceArray = numArray3.slice(2,4);
console.log(sliceArray);