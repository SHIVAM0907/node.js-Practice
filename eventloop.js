fs = require('fs');
const a = 100;

setImmediate(() => {
  console.log('Immediate callback executed');
});

fs.readFile('./file.txt', 'utf8', () => {
  console.log('File read callback executed');
});

setTimeout(() => {
  console.log('Timeout callback executed');
}, 0);

function printA(){
    console.log("a",a);

}

printA();
console.log('last line of script');