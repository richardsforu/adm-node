/*

imp-note: All objects that emit events are instances of the EventEmitter class.

*/


console.log("Event Emitter Demo");
const EventEmitter = require('events').EventEmitter;

//----------------------------------------

/*
const ee=new EventEmitter();

ee.on('some-event1',()=>{   
    console.log('handling some event1');
});

ee.on('some-event2',()=>{
    console.log('handling some event2');
});

// How to trigger custom event 
//ee.emit('some-event1');
//ee.emit('some-event2');

// call event 1 after 5 secs
setInterval(()=>{
    ee.emit('some-event1')
},3000);

*/

//----------------------------------------------

class Door extends EventEmitter {
    constructor(number, floor) {
        super();
        this.number = number;
        this.floor = floor;
    }

    open() {
        console.log('door opened...');
        let event = { number: this.number, floor: this.floor }
        this.emit('door-open', event)
    }

    close() {
        console.log('door closed...');
        let event = { number: this.number, floor: this.floor }
        this.emit('door-closed', event)
    }

}

const door = new Door(12, 45);
const door2 = new Door(5, 12);


//-------------------------
// light
//-------------------------

const light = {
    setUp() {

        door.on('door-open', event => {
            console.log(`LIGHT ON >>>> ${event.number} : ${event.floor}`);
        })

        door2.on('door-open', event => {
            console.log(`LIGHT ON >>>> ${event.number} : ${event.floor}`);
        })

        door.on('door-closed', event => {
            console.log(`LIGHT OFF >>>> ${event.number} : ${event.floor}`);
        })
        door2.on('door-closed', event => {
            console.log(`LIGHT OFF >>>> ${event.number} : ${event.floor}`);
        })
    }
}

const AC = {
    setUp() {

        door.on('door-open', event => {
            console.log(`AC IS ON >>>> ${event.number} : ${event.floor}`);
        })

        door.on('door-closed', event => {
            console.log(`AC IS OFF >>>> ${event.number} : ${event.floor}`);
        })
    }
}

light.setUp();
AC.setUp();


setTimeout(() => {
    door.open();
    door2.open();
    setTimeout(() => {
        door.close();
        door2.close();
    }, 3000)
}, 3000)


