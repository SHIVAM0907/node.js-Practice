console.log("hello world");

var a = 3123;
var b = 421;

// This callback will only be pushed to call stack in v8 once the call stack is empty.
setTimeout(()=>{
    console.log("call me immediately");

},0)

setTimeout(()=>{
    console.log ("call me after 3 seconds");
},3000);

function multiply(a,b){
    var res = a*b;
    return res;
}

var c = multiply(a,b);
console.log("Multiply value: ",c);