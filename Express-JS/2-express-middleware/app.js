const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); // use is a middleware in express
app.use(express.static(__dirname + '/images')); // use is a middleware in express
app.use(express.static(__dirname + '/ppt')); // use is a middleware in express
app.use(express.static(__dirname + '/pdf')); // use is a middleware in express





/*
app.get('/', (req,res) => {
    res.sendFile(__dirname +'/public/index.html');
})
*/


// a custom middleware for Authentication
app.use((req, res, next) => {
    //....
    console.log("Authentication....");
    next();
})

app.get('/todos', (req, res) => {
    res.json(
        [
            { "id": 1, "title": "Item-1", "completed": false },
            { "id": 2, "title": "Item-2", "completed": true }
        ]
    )
})





app.listen(3000, () => {
    console.log('Server listening on port 3000');
})