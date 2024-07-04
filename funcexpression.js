let add = function (a=1,b=5){ // a,b: func Parameters
                             // a=1 & b=5 is a default value
    return a + b;
};
console.log(add(2,3))  // 2,3: func arguments


const factorial = function fact(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };
  
  console.log(factorial(5)); // Outputs: 120

//   fuction expression:
//   if we use fucntion as part of expression without defining
//   previously, or use as variable or argument


function update(obj) {
   obj.domain = "www.tutorialspoint.com";
}
var obj = {
   domain: "www.google.com",
}
console.log("Before calling the function! <br>");
console.log("domain = " + obj.domain + "<br>");

update(obj);

console.log("after calling the function! <br>");
console.log("domain = " + obj.domain + "<br>");
