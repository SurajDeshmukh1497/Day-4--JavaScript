// // Number Object

let num1 = 15; //primitives
const num2 = new Number(10); 
console.log(num1 + num2);
console.log(typeof(num1));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(NaN);


Number(val);
Number(10);
Number("Suraj");

// Boolean Object
let bool = true;
console.log(bool)
console.log(toString(bool));
console.log(valueOf(bool));
                
 // string Obejct
const str1 = new String ("hello");

// Arrays
let array = new Array(1,2,3,4,5,6);
let array2 = [1,2,3,4,5,6,7];
console.log(array[1])  //index
console.log(array2)
console.log(array.length) //length
array2.push(45);
console.log(array2)
array[2]= 45;
console.log(array)

// arrays are iterable
let list= [1,2,3,4,5,6,7,8];
for (let n=0; n < list.length; n++){
    console.log(list[n]);
}

//Date object
new Date( )
new Date(milliseconds)
new Date(datestring)
new Date(year,month,date[hour,minute,second,millisecond ])

//Set Object
let set1 = new Set([1,2,3,4,5]);
let set2 = new Set([10,20,30,4,5]);

console.log(set1);
for (let x of set1.values()){ //set.values
    console.log(x);
}
set1.add(6); //insert element
set1.delete(3); // delete element
set1.has(45); // check set has 45 or not
 
//union
let set4 = new Set([1,2,3,4,5]);
let set5 = new Set([10,20,30,4,5]);
let union = new Set ([...set4,...set5]);
for (let n of union.values()){
    console.log(n)
}

// // intersection
let inter = new Set();
for (let numx of set4){
    if (set5.has(numx)){
        inter.add(numx)
    }

}
for (let x of inter.values()){
    console.log(x)
}

//Diffrence
let diff = new Set(set4);
for (let dp of set5){ //dp random variable
    diff.delete(dp)
}
for (let x of diff.values()){
    console.log(x);
}

//map object
let map = new Map([]);