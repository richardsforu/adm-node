const fs=require('fs'); // commonJS module standard === import from 'fs'

console.log(process.pid+" is started....");// single-threaded process

// task-1 : IO
const menu=fs.readFileSync('./veg-menu.txt') // blocking IO : 10 secs

console.log(menu.toString());
console.log('do something else....');




