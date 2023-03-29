//forEach loop
let arrayNum = [2,3,4,5,6,7,8,9];
arrayNum.forEach((element) =>{
    console.log(element*element);   //use of foreach loop to get sqaure of elements in array
})

arrayNum.forEach((element)=>{
    console.log(element%2);        //to get reminder
});

//Array.from

let name = 'Rao Rabi';
let arr = Array.from(name);   //convert any object or html collection to array
console.log(arr);


//for...of loop

for(let item of arrayNum){    //print elements of array
    console.log(item);
}

//for...in loop

for(let i in arrayNum){
    console.log(i, arrayNum[i]);        //print keys of array and to print lements use array[i]
}


