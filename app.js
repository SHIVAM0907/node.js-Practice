
require("./xyz.js");
// console.log(require("./cal"));
// const {x,calculateSum} = require("./cal/sum.js");   //Common JS style is used 

// const {calculateMultiply} = require("./cal/multiply.js");

const { calculateMultiply,x,calculateSum} = require("./cal");

// import { x, calculateSum } from "./calculate /sum.js";  // ES6 style is used
// import {}from "./xyz.js";

var name="namaste Node.js";

var a=12;

var b=10;
calculateSum(a,b);
calculateMultiply(a,b)
console.log(x);
