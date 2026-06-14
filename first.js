const  fs  = require("fs");
const https = require("https");

var a = 1078698;
var b = 20986;

//synchronous
fs.readFileSync("./file.txt","utf8");
console.log("this is synchronous way of reading the file. this will block the code. It is blocking the main thread")

https.get("https://dummyjson.com/product/1",
    (res) =>{
        console.log("Fetching data Successfully");

    }
);
setTimeout(() => {
    console.log("settimeout");
},5000);
//Async
fs.readFile("./file.txt", "utf8", 
    (err, data)=>{
        console.log("File Data: ",data);
    }
);

function multiply(x,y){
    const res = x*y;
    return res;
}
var c = multiply(a,b);
console.log(c);