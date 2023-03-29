//map method

let mapArray = [34,98,45];
let m = mapArray.map((value,index,array) => {
    console.log(value,index,array);              //map mehtod is used to perofrom operations on elements of array
    return value + 1;
})

console.log(m);

//filter method

let filterArray = [23,34,12,56,89,,65,45,244];
let f = filterArray.filter((value)=>{             //filter method filters an array passing test
    return value>50
})
console.log(f);

//reduce method

let reduceArray = [1,2,3,4,5,6,7,8,9];
let r = reduceArray.reduce((a,b)=>{            //reduce method reduces an array to single element
    return a+b;
})
console.log(r)