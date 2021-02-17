const fs=require('fs'); // commonJS module standard === import from 'fs'
console.log(process.pid+" is started....");// single-threaded process

// task-1 : IO

console.log("IO initiated....");
fs.readFile('./veg-menu.txt',(err,data)=>{
console.log("IO finished....");
console.log(data.toString());
});


// Task-2 : any other work
console.log("do somethine else....");
