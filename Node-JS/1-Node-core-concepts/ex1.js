const fs=require('fs'); 
const now=require('performance-now');

// read both veg and non veg menus files in node.js and display in Console

//------------------------
// # 1 blocking / sync IO
//------------------------
/*
const start=now();
// step 1:
console.log('initialting IO operating on veg.txt');
const vegMenu=fs.readFileSync('./veg-menu.txt'); // Node-peocess ==> OS ==> Disk
console.log('After IO on veg.txt');
console.log(vegMenu.toString());

// step 2:
console.log('initialting IO operating on non-veg.txt');
const  nonVegMenu=fs.readFileSync('./non-veg-menu.txt');
console.log('After IO on non-veg.txt');
console.log(nonVegMenu.toString());

const end=now();

console.log(end-start);


//5.905638000000003
//5.640307
*/

//-----------------------------
// # 2 non-blocking / Async IO  // recamended
//-----------------------------

const start=now();
// step-1
console.log('initialting IO operating on veg.txt');
fs.readFile('./veg-menu.txt',(error,data)=>{
    if(error) throw error;
    console.log('after IO on veg.txt');
    console.log(data.toString());
})

// step-2

console.log('initialting IO operating on non-veg.txt');
fs.readFile('./non-veg-menu.txt',(error,data)=>{
    if(error) throw error;
    console.log('after IO on non-veg.txt');
    console.log(data.toString());
})

const end=now();

console.log(end-start);