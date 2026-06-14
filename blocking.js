const crypto = require("crypto");

console.log("hello world")

var a = 343;
var b = 3212;

// pbkdf2 - Password Base Key Derivation Function 

//Synchronous Function - will block the main thread so don't use it
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("first key ")

//Asychronous Function 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("Second key ");
})

function multiply(a,b){
    const res = a*b;
    return res;

};

var c = multiply(a,b);
console.log(c);
